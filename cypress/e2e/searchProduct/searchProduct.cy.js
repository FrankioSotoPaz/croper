describe("Search and verify the product", () => {
   
  
    it("Search and verify the product", () => {
      cy.visit("https://croper.com");
      cy.fixture("searchProduct.json").then((data) => {
      cy.wait(3000);  
      cy.get(".line-clamp-1").contains("Busca lo que necesitas").click();  
      cy.get("#cp-input-0").type(data.product).type("{enter}");
      cy.wait(3000)
      cy.get('cp-product-grid > .grid').invoke('text').then(textoSeccion1 => {
        const ocurrencias = (textoSeccion1.match(/Filtro de aceite/g) || []).length
        cy.log(`El texto "Filtro de aceite" aparece ${ocurrencias} veces en la búsqueda realizada`)

  })
  
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
});
  