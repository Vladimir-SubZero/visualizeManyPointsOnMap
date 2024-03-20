export function getValidArrayItems<Items extends string[] | number[]>(
  items: Items,
  allowedItems: string[] | number[],
): Items {
  if (!Array.isArray(items) || !items.length) {
    return [] as unknown as Items;
  }

  if (!Array.isArray(allowedItems) || !allowedItems.length) {
    return [] as unknown as Items;
  }

  const isListWithNumbers = typeof items[0] === 'number';

  // (items as string[]) -> https://github.com/microsoft/TypeScript/issues/36390
  const allowedItemsMap = (allowedItems as string[]).reduce<Record<string, true>>((acc, i) => {
    acc[String(i)] = true;

    return acc;
  }, {});

  const resultItems = (items as string[]).filter((i) => allowedItemsMap[String(i)]);

  return (!isListWithNumbers ? resultItems : (resultItems as string[]).map((i) => Number(i))) as unknown as Items;
}
