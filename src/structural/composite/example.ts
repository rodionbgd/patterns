import { Document, DocumentComposite } from "./pattern";

const forms = new DocumentComposite();

const invitation = new Document("Celebration invitation");
const report = new Document("Daily report");

forms.add(invitation);
forms.add(report);

forms.sign(`Authored by: Me`);

console.log(forms);
