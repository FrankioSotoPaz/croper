describe("Target functionality", () => {
   
  
    it("Offers functionality", () => {
      cy.visit("https://croper.com");
      cy.wait(3000);  
      cy.get(".text-md").contains("Oferta").click();
      cy.url().should("include", "/offers");
      
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
