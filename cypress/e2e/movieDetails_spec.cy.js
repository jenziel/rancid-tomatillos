describe("Movie Details", function () {
  beforeEach(() => {
    cy.interceptMovies();
    cy.interceptMovieDetails();
  });

  it("should display movie details when a movie is clicked", function () {
    cy.checkMovieDetails();
  });
});
