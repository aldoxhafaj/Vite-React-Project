import { getImage } from '@themes/images';
import { useMemo } from 'react';

import { BackgroundImageProps } from './types';

export const BackgroundImage = ({
  name,
  resizeMode,
  imageHeight,
  imageWidth,
  children,
}: BackgroundImageProps) => {
  const memoizedImage = useMemo(() => getImage(name), [name]);

  const width = imageWidth || '100%';

  return (
    <div className="relative" style={{ height: imageHeight, width }}>
      <img
        className="absolute top-0 right-0 left-0 bottom-0"
        src={memoizedImage}
        style={{
          height: imageHeight,
          width,
          objectFit: resizeMode ?? 'cover',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
