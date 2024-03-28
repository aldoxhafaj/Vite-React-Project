import { getLocalStorageItem } from '@utils/storage';
import { StorageKey } from '@utils/storage/storage';

export const getAppLanguage = async () => {
  const language = getLocalStorageItem(StorageKey.LANGUAGE);

  return language;
};
