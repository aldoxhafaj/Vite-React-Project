import { scale } from '@utils/calculations';

import amdImage from '../Shared/Images/amd.png';
import amenitiesImage from '../Shared/Images/amenities.png';
import anonimousAvatarImage from '../Shared/Images/anonimousAvatar.png';
import bellImage from '../Shared/Images/bell.png';
import bookImage from '../Shared/Images/book.png';
import briefcaseImage from '../Shared/Images/briefcase.png';
import calendarImage from '../Shared/Images/calendar.png';
import classImage from '../Shared/Images/class.png';
import clientsImage from '../Shared/Images/clients.png';
import closeImage from '../Shared/Images/close.png';
import diamondImage from '../Shared/Images/diamond.png';
import exitImage from '../Shared/Images/exit.png';
import extendImage from '../Shared/Images/extend.png';
import filledBriefcaseImage from '../Shared/Images/filledBriefcase.png';
import filledClientsImage from '../Shared/Images/filledClients.png';
import gymImage from '../Shared/Images/gym.png';
import homeImage from '../Shared/Images/home.png';
import moneyImage from '../Shared/Images/money-bag.png';
import natureImage from '../Shared/Images/nature.png';
import pieChartImage from '../Shared/Images/pieChart.png';
import searchImage from '../Shared/Images/search.png';

const Images = {
  gym: gymImage,
  nature: natureImage,
  amd: amdImage,
  home: homeImage,
  briefcase: briefcaseImage,
  class: classImage,
  clients: clientsImage,
  amenities: amenitiesImage,
  pieChart: pieChartImage,
  calendar: calendarImage,
  book: bookImage,
  diamond: diamondImage,
  exit: exitImage,
  money: moneyImage,
  filledBriefcase: filledBriefcaseImage,
  filledClients: filledClientsImage,
  bell: bellImage,
  search: searchImage,
  anonimousAvatar: anonimousAvatarImage,
  close: closeImage,
  extend: extendImage,
};

export type ImageName = keyof typeof Images;

export const getImage = (imageName: ImageName) => Images[imageName];

enum ImageSizeEnum {
  /**
   * 4
   */
  XX_S = 4,
  /**
   * 8
   */
  X_S = 8,
  /**
   * 10
   */
  S = 10,
  /**
   * 12
   */
  S_M = 12,
  /**
   * 14
   */
  S_L = 14,
  /**
   * 16
   */
  M = 16,
  /**
   * 20
   */
  M_L = 20,
  /**
   * 24
   */
  L = 24,
  /**
   * 36
   */
  XXX_L = 36,
  /**
   * 48
   */
  XL1 = 50,
  XL2 = 100,
  XL3 = 150,
  XL4 = 200,
  XL5 = 250,
  XL6 = 300,
  XL7 = 350,
  XL8 = 400,
  full = '100dvh',
}

export enum ImageSize {
  /**
   * 4
   */
  XX_S = scale(ImageSizeEnum.XX_S),
  /**
   * 8
   */
  X_S = scale(ImageSizeEnum.X_S),
  /**
   * 10
   */
  S = scale(ImageSizeEnum.S),
  /**
   * 12
   */
  S_M = scale(ImageSizeEnum.S_M),
  /**
   * 14
   */
  S_L = scale(ImageSizeEnum.S_L),
  /**
   * 16
   */
  M = scale(ImageSizeEnum.M),
  /**
   * 20
   */
  M_L = scale(ImageSizeEnum.M_L),
  /**
   * 24
   */
  L = scale(ImageSizeEnum.L),
  /**
   * 36
   */
  XXX_L = scale(ImageSizeEnum.XXX_L),
  /**
   * 48
   */
  XL1 = scale(ImageSizeEnum.XL1),
  XL2 = scale(ImageSizeEnum.XL2),
  XL3 = scale(ImageSizeEnum.XL3),
  XL4 = scale(ImageSizeEnum.XL4),
  XL5 = scale(ImageSizeEnum.XL5),
  XL6 = scale(ImageSizeEnum.XL6),
  XL7 = scale(ImageSizeEnum.XL7),
  XL8 = scale(ImageSizeEnum.XL8),
  full = ImageSizeEnum.full,
}
