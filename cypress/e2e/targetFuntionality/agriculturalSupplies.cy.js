describe("Target functionality", () => {
   
  
    it("agricultural Supplies functionality", () => {
      cy.visit("https://croper.com");
      cy.wait(3000);  
      cy.get(".text-md").contains("Insumos agrícolas").click();
      cy.url().should("include", "/products?type=Insumo");
      
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
