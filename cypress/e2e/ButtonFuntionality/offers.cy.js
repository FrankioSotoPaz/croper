describe("Button functionality", () => {
   
  
    it("offers button functionality", () => {
      cy.visit("https://croper.com");
      cy.wait(3000);  
      cy.get(".cp-button-sm").contains("Ofertas").click();
      cy.url().should("include", "/offers");
      
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
