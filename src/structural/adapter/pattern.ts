type Image = {
  path: string;
  meta: string;
};

export class ImageConverter {
  static convert(image: Image, newFormat: string) {
    const splitPath = image.path.split(".");
    splitPath.splice(-1, 1, newFormat);
    return { ...image, path: splitPath.join(".") };
  }
}

export class ImageMeta {
  constructor(public converter: ImageConverterAdapter) {}

  addMetaToPng(image: Image) {
    const convertedImage = this.converter.convertToPng(image);
    convertedImage.meta = "meta for png";
    return convertedImage;
  }

  addMetaToJpg(image: Image) {
    const convertedImage = this.converter.convertToJpg(image);
    convertedImage.meta = "meta for jpg";
    return convertedImage;
  }
}

export default class ImageConverterAdapter {
  convertToJpg(image: Image) {
    return ImageConverter.convert(image, "jpg");
  }

  convertToPng(image: Image) {
    return ImageConverter.convert(image, "png");
  }
}
