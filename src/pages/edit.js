import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { ContactService } from 'services/contact';

@inject(ContactService, Router)
export class EditViewModel {
  constructor(contactService, router) {
    this.contactService = contactService;
    this.router = router;
  }
  activate() {
    return this.contactService.getContactById(1)
      .then((contact) => this.contact = contact);
  }
  save() {
    const { id } = this.contact;
    this.contactService.saveContact(id, this.contact)
    this.router.navigateToRoute('view-contact');
  }
}
