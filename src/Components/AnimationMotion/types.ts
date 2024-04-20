import { Color } from '@themes/color';
import { HorizontalSpacing } from '@themes/spacing';
import { MotionProps } from 'framer-motion';

export type AnimationMotionProps = {
  className?: string;
  flexGrow?: number;
  padding?: HorizontalSpacing;
  margin?: HorizontalSpacing;
  backgroundColor?: Color;
  onClick?: () => void;
} & MotionProps;
