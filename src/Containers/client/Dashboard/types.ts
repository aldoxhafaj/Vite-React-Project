import { ImageName, ImageSize } from '@themes/images';

export type CardButton = {
  title: string;
  value: string;
  leftIcon?: ImageName;
  iconSize?: ImageSize;
  onClick?: () => void;
};
