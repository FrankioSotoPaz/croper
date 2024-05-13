describe("Button functionality", () => {
   
  
    it("Prodyct list button functionality", () => {
      cy.visit("https://croper.com");
      cy.wait(3000);  
      cy.get(".cp-button-sm").contains("Listas de productos").click();
      cy.url().should("include", "/auth/login");
      cy.get("#cp-input-11").type("frankiosotop@gmail.com");
      cy.get("#cp-input-12").type("pruebascroper");
      cy.get(".cp-button-primary").contains("Iniciar sesión").click();
      cy.wait(3000);
      cy.url().should("include", "/back-office/shopping/checklists/list");
      
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
