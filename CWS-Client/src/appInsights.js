import { ApplicationInsights } from "@microsoft/applicationinsights-web";

const appInsights = new ApplicationInsights({
  config: {
    connectionString:
      "InstrumentationKey=549ddc10-4942-43aa-bfaa-244ae9fba8e2",
    enableAutoRouteTracking: true
  }
});

try {
  appInsights.loadAppInsights();
} catch (e) {
  console.warn("Application Insights failed to load", e);
}

export { appInsights };

