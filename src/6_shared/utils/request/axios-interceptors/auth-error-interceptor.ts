import { AxiosError } from 'axios';

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
      console.log('is Auth Error');
    }
    return Promise.reject(error);
  }
}

export const authErrorInterceptorInstance = AuthErrorInterceptor.getInstance();
