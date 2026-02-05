const appInsights = require("applicationinsights");

appInsights.setup(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING)
  .setAutoCollectRequests(true)       // HTTP requests
  .setAutoCollectDependencies(true)   // MongoDB, HTTP, etc.
  .setAutoCollectExceptions(true)     // Uncaught exceptions
  .setAutoCollectPerformance(true)    // CPU, memory
  .setAutoCollectConsole(true, true)  // console.log, console.error
  .setUseDiskRetryCaching(true)
  .start();

module.exports = appInsights;
