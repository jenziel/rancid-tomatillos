import mockMoviesData from "../fixtures/movieData.json";
import mockMovieDetails from "../fixtures/movieDetailsData.json"

describe("Movie Details", function () {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      mockMoviesData
    ).as("fetchMovies");
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/*",
      mockMovieDetails,
    ).as("fetchMovieDetails");
  });

  it("should display movie details when a movie is clicked", function () {
    cy.visit("http://localhost:3000");
    cy.wait("@fetchMovies");
    cy.contains("Loading...").should("not.exist");
    cy.get(".movies-container img.original-view").first().click();
    cy.wait("@fetchMovieDetails");
    cy.url().should("match", /\/movies\/\d+/);
    cy.get('.backdrop').should('be.visible');
    cy.get(".movie-poster").should("be.visible");
    cy.get(".right-side h2").should("be.visible");
    cy.get(".tagline").should("be.visible");
    cy.get(".overview").should("be.visible");
    cy.get(".budget").should("contain", "Budget: $200000000 million");
    cy.get(".genres").should("contain", "Genres: ActionFantasyScience Fiction");
    cy.get(".revenue").should("contain", "Gross Revenue: $384571691");
    cy.get(".runtime").should("contain", "Runtime: 125 minutes");
  });
})