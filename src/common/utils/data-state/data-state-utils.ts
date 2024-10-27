import { DataStateKey } from '@/common/types/frontend-data-types';
import { DATA_STATES } from '@/common/constants';

export const getDataNotAskedKey = (): DataStateKey => DATA_STATES.notAsked;
export const getDataLoadingKey = (): DataStateKey => DATA_STATES.loading;
export const getDataLoadedKey = (): DataStateKey => DATA_STATES.loaded;
export const getDataFailedKey = (): DataStateKey => DATA_STATES.failed;

export const isDataNotAsked = (key: DataStateKey): boolean => key === getDataNotAskedKey();
export const isDataLoading = (key: DataStateKey): boolean => key === getDataLoadingKey();
export const isDataLoaded = (key: DataStateKey): boolean => key === getDataLoadedKey();
export const isDataFailed = (key: DataStateKey): boolean => key === getDataFailedKey();
