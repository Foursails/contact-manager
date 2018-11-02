import { inject } from 'aurelia-framework';
import { ContactService } from 'services/contact';

@inject(ContactService)
export class DetailViewModel {
  constructor(contactService) {
    this.contactService = contactService;
  }
  activate({ id }) {
    if (id) {
      return this.contactService.getContactById(id)
        .then((contact) => this.contact = contact);
    } else {
      this.contact = null;
    }
  }
}
