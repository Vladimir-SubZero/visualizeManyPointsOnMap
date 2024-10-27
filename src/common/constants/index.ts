
export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
} as const;

export const DATA_STATES = {
  notAsked: 'notAsked',
  loading: 'loading',
  loaded: 'loaded',
  failed: 'failed',
} as const;