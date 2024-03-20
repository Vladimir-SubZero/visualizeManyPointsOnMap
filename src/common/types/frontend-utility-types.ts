/** В этом файле находятся все, не привязанные к бизнес-логике,
 *  утилитарные типы, используемые в рамках frontend-приложения. */

import { OptionalKeys } from 'utility-types';

export type Nullable<T> = T | null;

export type GetOptionalFields<T> = Required<Pick<T, OptionalKeys<T>>>;

export type PartialRecord<Key extends string, Value> = Partial<Record<Key, Value>>;

export type EmptyRecord = Record<string, never>;

export type UnknownRecord = Record<string, unknown>;

export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
