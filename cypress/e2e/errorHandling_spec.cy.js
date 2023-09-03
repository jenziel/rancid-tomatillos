describe("Error handling", () => {
  it("Should handle a 500 error", () => {
    cy.interceptMovies();
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        statusCode: 500,
        body: {
          fixture: "errorData.json",
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).as("getMovieById");

    cy.visit("http://localhost:3000/");
    cy.wait("@fetchMovies");
    cy.get(".movies-container img.original-view").first().click();
    cy.contains("Error 500: Internal Server Error").should("be.visible");
  });

  it("Should handle a 404 error", () => {
    cy.visit("http://localhost:3000/potato");
    cy.contains(`Woops!`).should("be.visible");
    cy.contains(`That Page Doesn't Exist`).should("be.visible");
    cy.get("button").should("contain", "Return to Homepage");
  });
});
