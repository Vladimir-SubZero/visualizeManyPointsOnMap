import { isValidMaxListItemsCountValue } from '@/common/utils/list-view-data-utils';

export function getPaginationItemsPositionData({
  selectedPageIndex,
  maxItemsCountOnPage,
  totalItemsCount,
}: {
  selectedPageIndex: number;
  maxItemsCountOnPage: number;
  totalItemsCount: number;
}): {
  currentItemsStartNumber: number;
  currentItemsEndNumber: number;
  totalItemsCount: number;
} {
  const selectedPageNumber = selectedPageIndex + 1;

  let currentItemsStartNumber = selectedPageNumber * maxItemsCountOnPage;
  let currentItemsEndNumber = currentItemsStartNumber + maxItemsCountOnPage;

  if (maxItemsCountOnPage > totalItemsCount) {
    currentItemsStartNumber = 1;
    currentItemsEndNumber = totalItemsCount;
  }

  if (selectedPageNumber === 1) {
    currentItemsStartNumber = 1;

    if (maxItemsCountOnPage <= totalItemsCount) {
      currentItemsEndNumber = maxItemsCountOnPage;
    }
  }

  if (!isValidMaxListItemsCountValue(maxItemsCountOnPage) && currentItemsStartNumber === 1) {
    currentItemsEndNumber = totalItemsCount;
  }

  if (!totalItemsCount) {
    currentItemsStartNumber = 0;
    currentItemsEndNumber = 0;
  }

  return {
    currentItemsStartNumber,
    currentItemsEndNumber,
    totalItemsCount,
  };
}
