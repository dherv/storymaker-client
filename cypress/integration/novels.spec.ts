describe("novels", () => {
  it("should navigate to novel page and show page one", () => {
    cy.visit("http://localhost:3000/novels");
    cy.contains("test").should("exist");
    cy.contains("show more").should("exist").click();
    cy.url().should(
      "eq",
      "http://localhost:3000/novel/c611cc74-a553-4ff6-a9d6-354e01b129f6/page/1"
    );
  });
});

export {};
