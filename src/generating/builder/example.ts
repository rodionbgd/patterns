import MediaPlayerBuilder from "./pattern";

const mediaPlayer = new MediaPlayerBuilder("red")
  .addDisplay()
  .addTouch()
  .addUsb()
  .addSdcard()
  .build();

console.log(mediaPlayer.color);
