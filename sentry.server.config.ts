import * as Sentry from "@sentry/nuxt";

Sentry.init({
  dsn: "https://e2d832dee415c49e90e58fceef898d65@o4509586243321856.ingest.us.sentry.io/4509626101334017",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
