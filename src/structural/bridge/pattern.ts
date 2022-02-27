interface Theme {
  getColor(): string;
}

export class About {
  constructor(public theme: Theme) {}

  getContent() {
    return `About page has ${this.theme.getColor()} theme`;
  }
}

export class Contacts {
  constructor(public theme: Theme) {}

  getContent() {
    return `Contacts page has ${this.theme.getColor()} theme`;
  }
}

export class DarkTheme {
  getColor() {
    return "black";
  }
}

export class BlueTheme {
  getColor() {
    return "blue";
  }
}
