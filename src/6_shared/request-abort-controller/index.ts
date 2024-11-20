export const appRequestAbortControllersMap: Map<AbortController, undefined> = new Map();

export const getRequestAbortController = (
  shouldAbortByCommonAbort = true,
  commonAbortControllersMap = appRequestAbortControllersMap,
): AbortController => {
  const abortController = new AbortController();

  if (shouldAbortByCommonAbort) {
    commonAbortControllersMap.set(abortController, undefined);
  }

  return abortController;
};
