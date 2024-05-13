describe("Target functionality", () => {
   
  
    it("Final products functionality", () => {
      cy.visit("https://croper.com");
      cy.wait(3000);  
      cy.get(".text-md").contains("Productos finales").click();
      cy.url().should("include", "/products?type=Producto%20final");
      
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
