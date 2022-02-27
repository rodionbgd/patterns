import { IronDoorFactory, WoodenDoorFactory } from "./pattern";

const woodenFactory = new WoodenDoorFactory();
const woodenDoor = woodenFactory.makeDoor();
const carpenter = woodenFactory.makeExpert();

woodenDoor.getDescription();
carpenter.getDescription();

const ironFactory = new IronDoorFactory();
const ironDoor = ironFactory.makeDoor();
const welder = ironFactory.makeExpert();

ironDoor.getDescription();
welder.getDescription();
