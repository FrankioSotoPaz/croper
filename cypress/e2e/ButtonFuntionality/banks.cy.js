describe("Button functionality", () => {
   
  
    it("Banks button functionality", () => {
      cy.visit("https://croper.com");
      cy.wait(3000);  
      cy.get(".cp-button-sm").contains("Créditos").select("Bioinsumos");
      cy.get(".cp-button-sm").contains("Entidades financieras").click();
      cy.url().should("include", "/banks");
      
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
