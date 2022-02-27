class WoodenDoor {
  getDescription() {
    console.log("wooden door");
  }
}

class IronDoor {
  getDescription() {
    console.log("iron door");
  }
}

class Carpenter {
  getDescription() {
    console.log("I'm a carpenter");
  }
}

class Welder {
  getDescription() {
    console.log("I'm a welder");
  }
}

export class WoodenDoorFactory {
  makeDoor() {
    return new WoodenDoor();
  }

  makeExpert() {
    return new Carpenter();
  }
}

export class IronDoorFactory {
  makeDoor() {
    return new IronDoor();
  }

  makeExpert() {
    return new Welder();
  }
}
