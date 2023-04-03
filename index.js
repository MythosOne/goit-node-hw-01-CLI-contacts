const contacts = require("./contacts");

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const listContacts = await contacts.listContacts();
      console.table(listContacts);
      break;

    case "get":
      const getContact = await contacts.getContactById(id);
      console.table(getContact);
      break;

    case "add":
      const addContact = await contacts.addContact(name, email, phone);
      console.table(addContact);
      break;

    case "remove":
      const removeContact = await contacts.removeContact(id);
      console.table(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
