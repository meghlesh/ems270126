import { ApplicationInsights } from "@microsoft/applicationinsights-web";

export const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: "549ddc10-4942-43aa-bfaa-244ae9fba8e2",
    enableAutoRouteTracking: false, // IMPORTANT for React Router v6
  },
});

appInsights.loadAppInsights();


