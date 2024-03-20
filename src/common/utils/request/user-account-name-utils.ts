import { getStringOnly } from '@/common/utils/parse-utils/parse-utils';
import { USER_ACCOUNT_NAME_SETTINGS } from '@/common/constants';

const { sessionStorageKey } = USER_ACCOUNT_NAME_SETTINGS;

export function setUserAccountNameToBrowser(accountName: string): void {
  sessionStorage.setItem(sessionStorageKey, getStringOnly(accountName));
}

export function getUserAccountNameFromBrowser(): string {
  return getStringOnly(sessionStorage.getItem(sessionStorageKey));
}

export function getUserAccountNameHeaderData(): {
  'mx-account': string;
} {
  return {
    'mx-account': getUserAccountNameFromBrowser(),
  };
}
