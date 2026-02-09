import { ApplicationInsights } from "@microsoft/applicationinsights-web";

const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: "549ddc10-4942-43aa-bfaa-244ae9fba8e2",
    enableAutoRouteTracking: true,
  },
});

appInsights.loadAppInsights();
appInsights.trackPageView();

export { appInsights };


