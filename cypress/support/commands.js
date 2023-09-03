Cypress.Commands.add("interceptMovies", (fixturePath = "movieData.json") => {
  cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
    fixture: fixturePath,
  }).as("fetchMovies");
});

Cypress.Commands.add(
  "interceptMovieDetails",
  (fixturePath = "movieDetailsData.json") => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/*",
      {
        fixture: fixturePath,
      }
    ).as("fetchMovieDetails");
  }
);

Cypress.Commands.add("checkMovieDetails", () => {
  cy.visit("http://localhost:3000");
  cy.wait("@fetchMovies");
  cy.contains("Loading...").should("not.exist");
  cy.get(".movies-container img.original-view").first().click();
  cy.wait("@fetchMovieDetails");
  cy.url().should("match", /\/movies\/\d+/);
  cy.get(".backdrop").should("be.visible");
  cy.get(".movie-poster").should("be.visible");
  cy.get(".right-side h2").should("be.visible");
  cy.get(".tagline").should("be.visible");
  cy.get(".overview").should("be.visible");
  cy.get(".budget").should("contain", "Budget: $200000000 million");
  cy.get(".genres").should("contain", "Genres: ActionFantasyScience Fiction");
  cy.get(".revenue").should("contain", "Gross Revenue: $384571691");
  cy.get(".runtime").should("contain", "Runtime: 125 minutes");
});

Cypress.Commands.add("checkDisplayAllMovies", (movies) => {
  movies.forEach((movie) => {
    cy.get('.movies-container img[src="' + movie.poster_path + '"]')
      .should("be.visible")
      .then(($img) => {
        if (!$img.length) {
          throw new Error(`Image with src ${movie.poster_path} not found.`);
        }
      });
  });
});
