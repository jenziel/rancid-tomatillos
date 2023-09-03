describe("Movie Details", function () {
  beforeEach(() => {
    cy.interceptMovies();
    cy.interceptMovieDetails();
  });

  it("should display movie details when a movie is clicked", function () {
    cy.checkMovieDetails();
  });
  it("Should handle a non-existent movie", () => {
    cy.visit("http://localhost:3000/movies/999999");
    cy.contains(`That Page Doesn't Exist.`).should('be.visible');
});

});
