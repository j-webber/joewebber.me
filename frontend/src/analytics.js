import Analytics from "analytics";
import simpleAnalyticsPlugin from "@analytics/simple-analytics";

// Custom inline analytics plugin
const myPlugin = {
  name: "my-custom-plugin",
  page: ({ payload }) => {
    console.log("page view fired", payload);
  },
  track: ({ payload }) => {
    console.log("track event payload", payload);
  },
};

const analytics = Analytics({
  app: "watch-now-ai-mern",
  plugins: [
    //myPlugin, //only use in development
    simpleAnalyticsPlugin(),
  ],
});

export default analytics;
