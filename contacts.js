const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

/// Методы работы с файлом контактов.
async function readFile() {
  const data = await fs.readFile(contactsPath, "utf8");

  return JSON.parse(data);
}

async function writeFile(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts), "utf8");

  return contacts;
}

/// Методы работы с коллекцией контактов.
async function listContacts() {
  const listContacts = await readFile();

  return listContacts;
}

async function getContactById(contactId) {
  const contacts = await readFile();
  const contact = contacts.find((contact) => contact.id === contactId);

  return contact;
}

async function removeContact(contactId) {
  const contacts = await readFile();
  const contact = contacts.filter((contact) => contact.id !== contactId);

  const newContacts = await writeFile(contact);

  return newContacts;
}

async function addContact(name, email, phone) {
  const contacts = await readFile();

  const newContacts = {
    id: nanoid(8),
    name,
    email,
    phone,
  }

  contacts.push(newContacts);

  await writeFile(contacts);

  return contacts;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
