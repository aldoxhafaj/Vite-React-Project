import { Color } from '@themes/color';
import { ImageName, ImageSize } from '@themes/images';

export type ImageResizeMode = 'cover' | 'contain';

export type ImageComponentProps = {
  className?: string;
  name: ImageName;
  resizeMode?: ImageResizeMode;
  imageHeight?: ImageSize;
  imageWidth?: ImageSize;
  white?: boolean;
};

export enum GradientDirection {
  BOTTOM = 'bottom',
  TOP = 'top',
  RIGHT = 'right',
  LEFT = 'left',
}

export type BackgroundImageProps = Omit<
  ImageComponentProps,
  'white' | 'className'
> & {
  gradient?: {
    direction: GradientDirection;
    from: Color;
    to: Color;
  };
  children: React.ReactNode;
};
