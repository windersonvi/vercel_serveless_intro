const Sentry = require("@sentry/node");


Sentry.init({
  dsn: "https://232f119d78a64d42acc6a9ef9b7a63b7@o4504982625189888.ingest.sentry.io/4504982628073472",
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});

module.exports = Sentry;