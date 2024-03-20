export type Comparer<T> = (item1: T, item2: T) => 1 | 0 | -1;

export type SortOrder = 'ASC' | 'DESC';
