describe("Target functionality", () => {
   
  
    it("Banks functionality", () => {
      cy.visit("https://croper.com");
      cy.wait(3000);  
      cy.get(".text-md").contains("Crédito").click();
      cy.url().should("include", "/banks");
      
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
