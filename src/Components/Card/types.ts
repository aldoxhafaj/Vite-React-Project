import { ImageName, ImageSize } from '@themes/images';
import { ReactNode } from 'react';

export type CardProps = {
  title: string;
  cardComponent: ReactNode;
  leftIcon?: ImageName;
  iconSize?: ImageSize;
};
