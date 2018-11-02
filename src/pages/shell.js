export class ShellViewModel {
  constructor() {
    this.contact = {
      name: 'Matthew James Davis',
      email: 'matt.davis@aurelia.io'
    };
    this.contacts = [this.contact];
  }
  configureRouter(config, router) {
    config.map([
      { route: '', moduleId: 'pages/detail' },
      { route: 'edit', moduleId: 'pages/edit' }
    ]);
    this.router = router;
  }
}
