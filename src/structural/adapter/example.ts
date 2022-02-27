import ImageConverterAdapter, { ImageMeta } from "./pattern";

const imageWebp = { path: "./fname.ext/img.webp", meta: "" };

const imageWithMeta = new ImageMeta(new ImageConverterAdapter());
const convertedImageJpg = imageWithMeta.addMetaToJpg(imageWebp);
const convertedImagePng = imageWithMeta.addMetaToPng(imageWebp);

console.log(convertedImageJpg);
console.log(convertedImagePng);
