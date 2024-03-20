import { BackendApiError } from '@/common/types/frontend-data-types';
import axios from 'axios';

type BackendApiErrorHandler = (err: BackendApiError) => void;

type ErrorHandler =
  | Partial<{
      handleBackendApiError: (err: BackendApiError) => void;
      handleRequestCancelByFrontend: () => void;
      handleUnknownError: (err: Error) => void;
    }>
  | BackendApiErrorHandler;

export const handleRequestError = (error: unknown, errorHandler: ErrorHandler): void => {
  if (typeof errorHandler === 'function') {
    const handleBackendApiError = errorHandler;

    if (axios.isAxiosError(error) && handleBackendApiError) {
      /** Обработка ошибки бекенда, вызванной исключением на сервере,
       * например, ошибки 500 Internal Server Error или 400 Bad Request и т.д. */
      handleBackendApiError(error.response as BackendApiError);
      return;
    }

    return;
  }

  const { handleBackendApiError, handleRequestCancelByFrontend, handleUnknownError } = errorHandler;

  if (axios.isAxiosError(error) && handleBackendApiError) {
    /** Обработка ошибки бекенда, вызванной исключением на сервере,
     * например, ошибки 500 Internal Server Error или 400 Bad Request и т.д. */
    handleBackendApiError(error.response as BackendApiError);
    return;
  }

  if (axios.isCancel(error) && handleRequestCancelByFrontend) {
    /** Обработка отмены запроса фронтендом */
    handleRequestCancelByFrontend();
    return;
  }

  if (error instanceof Error && handleUnknownError) {
    /** Обработка неизвестной Runtime ошибки */
    handleUnknownError(error);
    return;
  }
};
