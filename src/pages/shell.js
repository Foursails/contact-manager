import { inject } from 'aurelia-framework';
import { ContactService } from 'services/contact';

@inject(ContactService)
export class ShellViewModel {
  constructor(contactService) {
    this.contactService = contactService;
    this.contact = {
      name: 'Matthew James Davis',
      email: 'matt.davis@aurelia.io'
    };
    this.contacts = [this.contact];
  }
  activate() {
    return this.contactService.getAllContacts()
      .then((contacts) => this.contacts = contacts);
  }
  configureRouter(config, router) {
    config.map([
      { route: '', moduleId: 'pages/detail' },
      { route: 'edit', moduleId: 'pages/edit' }
    ]);
    this.router = router;
  }
}
