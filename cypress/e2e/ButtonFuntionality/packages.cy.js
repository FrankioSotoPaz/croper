describe("Button functionality", () => {
   
  
    it("Packages button functionality", () => {
      cy.visit("https://croper.com");
      cy.wait(3000);  
      cy.get(".cp-button-sm").contains("Paquetes tecnológicos").click();
      cy.url().should("include", "/packages");
      
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
