export class Document {
  public signature: null | string;

  constructor(public title: string) {
    this.signature = null;
  }

  sign(signature: string) {
    this.signature = signature;
  }
}

export class DocumentComposite {
  public items: Document[];

  constructor(title?: string) {
    this.items = [];
    if (title) {
      this.items.push(new Document(title));
    }
  }

  add(item: Document) {
    this.items.push(item);
  }

  sign(signature: string) {
    this.items.forEach((doc) => {
      doc.sign(signature);
    });
  }
}
