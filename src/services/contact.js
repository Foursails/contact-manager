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
  saveContact(id, update) {
    return this.getContactById(id)
      .then((contact) => {
        if (contact) {
          contact.name = update.name;
          contact.phone = update.phone;
          contact.email = update.email;
        }
        return contact;
      });
  }
  createContact({ name, phone, email}) {
    const contact = { id: ++ID, name, phone, email };
    this.contacts.push(contact);
    return Promise.resolve(contact);
  }
}
