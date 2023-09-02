import mockMoviesData from "../fixtures/movieData.json";

describe("Display All Movies", function () {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      mockMoviesData
    ).as("fetchMovies");
  });

  it("should display all movies when visiting the app", function () {
    cy.visit("http://localhost:3000");
    cy.wait("@fetchMovies");
    cy.contains("Loading...").should("not.exist");
    cy.get(".movies-container").should("be.visible");
    mockMoviesData.movies.forEach((movie) => {
      cy.get('.movies-container img[src="' + movie.poster_path + '"]').should(
        "be.visible"
      );
    });
  });
});
