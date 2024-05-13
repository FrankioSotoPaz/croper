describe("Target functionality", () => {
   
  
    it("Management functionality", () => {
      cy.visit("https://croper.com");
      cy.wait(3000);  
      cy.get(".text-md").contains("Gestión de fincas").click();
      cy.url().should("include", "/back-office/productive-unit/fincas");
      
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
