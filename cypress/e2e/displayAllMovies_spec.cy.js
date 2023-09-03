describe("Display All Movies", function () {
  beforeEach(() => {
    cy.interceptMovies();
  });

  it("should display all movies when visiting the app", function () {
    cy.visit("http://localhost:3000");
    cy.wait("@fetchMovies");
    cy.contains("Loading...").should("not.exist");
    cy.get(".movies-container").should("be.visible");

    cy.fixture("movieData.json").then((mockMoviesData) => {
      cy.checkDisplayAllMovies(mockMoviesData.movies);
    });
  });
});
