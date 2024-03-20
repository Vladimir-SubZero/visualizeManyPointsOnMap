import {
  getUserAccountNameFromBrowser,
  getUserAccountNameHeaderData,
  setUserAccountNameToBrowser,
} from '@/common/utils/request/user-account-name-utils';
import { USER_ACCOUNT_NAME_SETTINGS } from '@/common/constants';

const { sessionStorageKey } = USER_ACCOUNT_NAME_SETTINGS;

describe('Тесты утилит работы с сохранение имени пользователя в sessionStorage', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  describe('setUserAccountNameToBrowser', () => {
    it('правильно сохраняет имя, когда оно корректно', () => {
      const name = 'user1';

      setUserAccountNameToBrowser(name);

      expect(sessionStorage.getItem(sessionStorageKey)).toBe(name);
    });

    it('сохраняет пустую строку, когда имя некорректно', () => {
      const name = { foo: 'bar' } as unknown as string;

      setUserAccountNameToBrowser(name);

      expect(sessionStorage.getItem(sessionStorageKey)).toBe('');
    });
  });

  describe('getFasDataFromSessionStorage', () => {
    it('правильно возвращает имя, когда оно сохранено корректно', () => {
      const name = 'user1';
      sessionStorage.setItem(sessionStorageKey, name);

      expect(getUserAccountNameFromBrowser()).toStrictEqual(name);
    });

    it('возвращает пустую строку, когда имя отсутствует', () => {
      expect(getUserAccountNameFromBrowser()).toStrictEqual('');
    });
  });

  describe('getUserAccountNameHeaderData', () => {
    it('правильно возвращает заголовок, когда имя сохранено корректно', () => {
      const name = 'user1';
      sessionStorage.setItem(sessionStorageKey, name);

      expect(getUserAccountNameHeaderData()).toStrictEqual({
        'mx-account': name,
      });
    });

    it('правильно возвращает заголовок, когда имя отсутствует', () => {
      expect(getUserAccountNameHeaderData()).toStrictEqual({
        'mx-account': '',
      });
    });
  });
});
