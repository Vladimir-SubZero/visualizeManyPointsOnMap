import { AxiosError } from 'axios';
import { appInternalEventEmitter } from '@/common/internal-event-emitter';

export class AuthErrorInterceptor {
  private constructor() {
    // do nothing
  }

  private static instance: AuthErrorInterceptor;

  static getInstance(): AuthErrorInterceptor {
    if (!AuthErrorInterceptor.instance) {
      AuthErrorInterceptor.instance = new AuthErrorInterceptor();
    }

    return AuthErrorInterceptor.instance;
  }

  static isAuthError(error: AxiosError | unknown): error is AxiosError {
    const checkingError = error as AxiosError;

    return Boolean(
      checkingError &&
        checkingError.isAxiosError &&
        checkingError.config &&
        checkingError.response &&
        checkingError.response.status === 401,
    );
  }

  public handleError(error: AxiosError | unknown): Promise<never> {
    if (AuthErrorInterceptor.isAuthError(error)) {
      appInternalEventEmitter.emit('cancelRequests');
      appInternalEventEmitter.emit('userAuthSessionReject');
      console.log('is Auth Error');
    }

    // https://github.com/axios/axios/issues/960#issuecomment-320659373 -
    // дополнительный вариант обработки ошибок, который можно использовать в
    // AxiosInterceptors. Сейчас он не используется, так как нет необходимости.
    //
    // Но если нужно будет использовать, то использовать с осторожностью,
    // так как он неявно меняет типизацию возвращаемых ошибок во всех утилитах,
    // зависящих от axiosInstance.
    return Promise.reject(error);
  }
}

export const authErrorInterceptorInstance = AuthErrorInterceptor.getInstance();
