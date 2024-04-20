import { m } from 'framer-motion';

import { AnimationMotionProps } from './types';

export const AnimationMotion = ({
  className,
  children,
  backgroundColor,
  margin,
  padding,
  flexGrow,
  onClick,
  ...props
}: AnimationMotionProps) => {
  return (
    <m.div
      className={className}
      style={{ backgroundColor, margin, padding, flexGrow }}
      onClick={onClick}
      {...props}
    >
      {children}
    </m.div>
  );
};
