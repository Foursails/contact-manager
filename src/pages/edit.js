import { inject } from 'aurelia-framework';
import { ContactService } from 'services/contact';

@inject(ContactService)
export class EditViewModel {
  constructor(contactService) {
    this.contactService = contactService;
  }
  activate() {
    return this.contactService.getContactById(1)
      .then((contact) => this.contact = contact);
  }
}
