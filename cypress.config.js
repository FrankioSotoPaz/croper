const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Configuración global de Cypress
  pageLoadTimeout: 120000, // 120 segundos

  e2e: {
    setupNodeEvents(on, config) {
      // Implementa aquí los escuchadores de eventos de nodo si es necesario
    }
  }
});

