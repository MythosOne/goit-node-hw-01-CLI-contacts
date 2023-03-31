const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

function readFile() {
  const contacts = fs.readFile(contactsPath);
  return JSON.parse(contacts);
}

function writeFile(contacts) {
  const contacts = fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts;
}

module.exports = {
    readFile,
    writeFile,
    listContacts,
    getContactById,
    removeContact,
    addContact
}

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}
