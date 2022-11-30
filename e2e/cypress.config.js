const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://samat.admin.samat.diplomportal.dk/'

  }
})