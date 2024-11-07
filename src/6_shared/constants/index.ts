
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

export const LoadingOrdersCount = [
  1000, 5000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000
] as const;