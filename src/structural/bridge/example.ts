import { About, BlueTheme, Contacts, DarkTheme } from "./pattern";

const aboutPage = new About(new DarkTheme());
console.log(aboutPage.getContent());

const contactsPage = new Contacts(new BlueTheme());
console.log(contactsPage.getContent());
