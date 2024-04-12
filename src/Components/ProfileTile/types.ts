import { Color } from '@themes/color';
import { ImageName, ImageSize } from '@themes/images';

export type ProfileTileProps = {
  avatar?: ImageName;
  imageSize?: ImageSize;
  username: string;
  backgroundColor?: Color;
};
