import { ApplicationInsights } from "@microsoft/applicationinsights-web";

const appInsights = new ApplicationInsights({
  config: {
    connectionString: import.meta.env.VITE_APPINSIGHTS_CONNECTION_STRING,
    enableAutoRouteTracking: true, // SPA route changes
  },
});

appInsights.loadAppInsights();
appInsights.trackPageView();

export default appInsights;
