describe("Button functionality", () => {
   
  
    it("Stores button functionality", () => {
      cy.visit("https://croper.com");
      cy.wait(3000);  
      cy.get(".cp-button-sm").contains("Tiendas").click();
      cy.url().should("include", "/stores");
      
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
