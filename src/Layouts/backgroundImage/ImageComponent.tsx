import { getImage } from '@themes/images';
import { useMemo } from 'react';

import { ImageComponentProps } from './types';

export const ImageComponent = ({
  name,
  resizeMode,
  imageHeight,
  imageWidth,
}: ImageComponentProps) => {
  const memoizedImage = useMemo(() => getImage(name), [name]);

  return (
    <img
      src={memoizedImage}
      style={{
        height: imageHeight,
        width: imageWidth,
        objectFit: resizeMode ?? 'cover',
      }}
    />
  );
};
