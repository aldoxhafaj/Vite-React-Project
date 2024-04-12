import { CardProps } from '@nextui-org/react';
import { Color } from '@themes/color';
import { ImageName, ImageSize } from '@themes/images';
import { HorizontalSpacing } from '@themes/spacing';
import { ReactNode } from 'react';

export type CardWidgetProps = {
  title: string;
  cardBodyComponent?: ReactNode;
  leftIcon?: ImageName;
  iconSize?: ImageSize;
  backgroundColor?: Color;
  cardWidth?: HorizontalSpacing;
} & Omit<CardProps, 'style'>;
