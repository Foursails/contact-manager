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
      { route: '', name: 'view-contact', moduleId: 'pages/detail' },
      { route: 'edit', name: 'edit-contact', moduleId: 'pages/edit' }
    ]);
    this.router = router;
  }
}
