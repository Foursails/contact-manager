import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { ContactService } from 'services/contact';

@inject(ContactService, Router)
export class EditViewModel {
  constructor(contactService, router) {
    this.contactService = contactService;
    this.router = router;
  }
  activate({ id }) {
    if (id) {
      return this.contactService.getContactById(id)
        .then(({ name, email, phone }) => this.contact = { id, name, email, phone });
    } else {
      this.contact = {};
    }
  }
  save() {
    const { id } = this.contact;
    if (id) {
      this.contactService.saveContact(id, this.contact);
    } else {
      this.contactService.createContact(this.contact);
    }
    this.router.navigateToRoute('home');
  }
}
