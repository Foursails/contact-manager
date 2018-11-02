let ID = 0;

export class ContactService {
  constructor() {
    this.contacts = [{
      id: ++ID,
      name: 'Matthew James Davis',
      email: 'matt.davis@aurelia.io'
    }];
  }
  getAllContacts() {
    return Promise.resolve(this.contacts);
  }
  getContactById(id) {
    const contact = this.contacts.find((contact) => contact.id == id);
    return Promise.resolve(contact);
  }
}
