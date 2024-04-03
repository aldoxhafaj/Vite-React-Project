import { ImageName, ImageSize } from '@themes/images';

export type ImageResizeMode = 'cover' | 'contain';

export type ImageComponentProps = {
  name: ImageName;
  resizeMode?: ImageResizeMode;
  imageHeight?: ImageSize;
  imageWidth?: ImageSize;
  white?: boolean;
};

export type BackgroundImageProps = Omit<ImageComponentProps, 'white'> & {
  children: React.ReactNode;
};
