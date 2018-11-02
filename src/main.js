export async function configure(aurelia) {
  aurelia.use.standardConfiguration();
  aurelia.use.developmentLogging();
  aurelia.start().then(() => aurelia.setRoot('pages/shell'));
}
