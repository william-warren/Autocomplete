context("Autocomplete from API", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000");
    cy.get("input#student-name").as("input");
    cy.get("datalist#student-names").as("list");
  });

  it("should have an input for the student name", () => {
    cy.get("@input").should("exist");
  });

  it("should have a datalist for the student name options", () => {
    cy.get("@list").should("exist");
  });

  it("should have an empty datalist at first", () => {
    cy.get("@list").should("be.empty");
  });

  it("should populate the datalist based on input", () => {
    cy.get("@input").type("guz");

    cy.get("@list")
      .get("option[value*=Guz]")
      .should("exist");
  });

  it("should keep the list in sync with the input", () => {
    cy.get("@input").type("guz");

    cy.get("@input").clear();

    cy.get("@list").should("be.empty");
  });
});
