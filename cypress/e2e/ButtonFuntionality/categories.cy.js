describe("Button functionality", () => {
   
  
    it("Categories button functionality", () => {
      cy.visit("https://croper.com");
      cy.wait(3000);  
      cy.get(".cp-button-sm").contains("Categorías").select("Bioinsumos");
      cy.get(".text-piccolo").contains("Ver todos los productos").click();
      cy.url().should("include", "/category/46-bioinsumos");
      
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
