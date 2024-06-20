describe("Service Details Page", () => {
  it("loads service details page", () => {
    cy.visit("/service/1"); // Assuming "/service/1" is the URL for a service details page
    cy.contains("Service Details").should("be.visible");
  });
});
