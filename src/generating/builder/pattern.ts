export default class MediaPlayerBuilder {
  display: boolean | undefined;

  public usb: boolean | undefined;

  public touch: boolean | undefined;

  public sdcard: boolean | undefined;

  constructor(public color: string) {}

  addDisplay() {
    this.display = true;
    return this;
  }

  addTouch() {
    this.touch = true;
    return this;
  }

  addUsb() {
    this.usb = true;
    return this;
  }

  addSdcard() {
    this.sdcard = true;
    return this;
  }

  build() {
    // eslint-disable-next-line
    return new MediaPlayer(this);
  }
}

class MediaPlayer {
  public color: string;

  private display: boolean;

  private touch: boolean;

  private usb: boolean;

  private sdcard: boolean;

  constructor(builder: MediaPlayerBuilder) {
    this.color = builder.color;
    this.display = builder.display || false;
    this.touch = builder.touch || false;
    this.usb = builder.usb || false;
    this.sdcard = builder.sdcard || false;
  }
}
