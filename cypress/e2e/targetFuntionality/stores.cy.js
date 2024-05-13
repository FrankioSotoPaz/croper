describe("Target functionality", () => {
   
  
    it("Stores functionality", () => {
      cy.visit("https://croper.com");
      cy.wait(3000);  
      cy.get(".text-md").contains("Tiendas").click();
      cy.url().should("include", "/stores");
      
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
