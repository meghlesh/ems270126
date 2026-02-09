import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { ReactPlugin } from "@microsoft/applicationinsights-react-js";

export const reactPlugin = new ReactPlugin();

export const appInsights = new ApplicationInsights({
  config: {
    connectionString: import.meta.env.VITE_APPINSIGHTS_CONNECTION_STRING,
    extensions: [reactPlugin],
    enableAutoRouteTracking: true,
  },
});

appInsights.loadAppInsights();
