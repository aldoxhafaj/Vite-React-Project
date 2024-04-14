import { ImageSize } from '@themes/images';

export type NotificationBellProps = {
  notifications?: boolean;
  iconSize?: ImageSize;
  onClick: () => void;
};
