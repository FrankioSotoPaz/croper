describe("Button functionality", () => {
   
  
    it("Insurance button functionality", () => {
      cy.visit("https://croper.com");
      cy.wait(3000);  
      cy.get(".cp-button-sm").contains("Seguros").click();
      cy.url().should("include", "/stores/145-tuprimero");
      
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
