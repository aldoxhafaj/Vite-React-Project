import { ImageName, ImageSize } from "@themes/images";

export type ImageResizeMode = "cover" | "contain";

export type ImageComponentProps = {
  name: ImageName;
  resizeMode?: ImageResizeMode;
  imageHeight?: ImageSize;
  imageWidth?: ImageSize;
};

export type BackgroundImageProps = ImageComponentProps & {
  children: React.ReactNode;
};
