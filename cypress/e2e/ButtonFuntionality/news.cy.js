describe("Button functionality", () => {
   
  
    it("News button functionality", () => {
      cy.visit("https://croper.com");
      cy.wait(3000);  
      cy.get(".cp-button-sm").contains("Noticias").click();
      cy.wait(4000);
      cy.window().then(win => {
      const newTab = win.openedTab 
      cy.wrap(newTab).should('exist')
      cy.wrap(newTab).then(tab => {
      cy.wrap(tab).then(() => {
      cy.url().should('include', 'https://blog.croper.com/')
        })
      
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
});
});

