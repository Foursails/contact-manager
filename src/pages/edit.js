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
    return this.contactService.getContactById(id)
      .then(({ name, email, phone }) => this.contact = { id, name, email, phone });
  }
  save() {
    const { id } = this.contact;
    this.contactService.saveContact(id, this.contact)
    this.router.navigateToRoute('home');
  }
}
