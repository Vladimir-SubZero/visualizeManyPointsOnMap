import { sumComparers, reverse, order, compare, compareNested } from '../compare';
import { Comparer } from '@/common/utils/compare';

describe('compare utils', () => {
  describe('sumComparers', () => {
    it('возвращает 0 когда все компареры выдают 0', () => {
      const comparer = sumComparers(
        () => 0,
        () => 0,
        () => 0,
      );

      expect(comparer(1, 2)).toBe(0);
    });

    it('выдает первый не 0 результат', () => {
      const comparer = sumComparers(
        () => -1,
        () => 0,
        () => 1,
      );

      expect(comparer(1, 2)).toBe(-1);
    });
  });

  describe('reverse', () => {
    it.each([
      [() => -1, 1],
      [() => 0, 0],
      [() => 1, -1],
    ] as [Comparer<unknown>, ReturnType<Comparer<unknown>>][])(
      'обращает в обратный порядок переданный компарер',
      (comparer: Comparer<unknown>, expected: ReturnType<Comparer<unknown>>) => {
        const comparerReversed = reverse(comparer);

        expect(comparerReversed(1, 2)).toBe(expected);
      },
    );
  });

  describe('order', () => {
    it.each([
      [() => -1, -1],
      [() => 0, 0],
      [() => 1, 1],
    ] as [Comparer<unknown>, ReturnType<Comparer<unknown>>][])(
      'возвращает порядок сравнения без изменения если сортировка по возратанию',
      (comparer: Comparer<unknown>, expected: ReturnType<Comparer<unknown>>) => {
        const comparerOrdered = order(comparer, 'ASC');

        expect(comparerOrdered(1, 2)).toBe(expected);
      },
    );

    it.each([
      [() => -1, 1],
      [() => 0, 0],
      [() => 1, -1],
    ] as [Comparer<unknown>, ReturnType<Comparer<unknown>>][])(
      'возвращает порядок сравнения в обратном порядке если сортировка по убыванию',
      (comparer: Comparer<unknown>, expected: number) => {
        const comparerOrdered = order(comparer, 'DESC');

        expect(comparerOrdered(1, 2)).toBe(expected);
      },
    );
  });

  describe('compare', () => {
    it('сравнивает два объекта по заданному свойству', () => {
      const obj1 = { name: 'John' };
      const obj2 = { name: 'Jane' };

      const comparer = compare<typeof obj1>('name');

      expect(comparer(obj1, obj2)).toBe(1);
      expect(comparer(obj2, obj1)).toBe(-1);
    });
  });

  describe('compareNested', () => {
    interface Person {
      name: string;
      age: number;
    }

    interface Company {
      name: string;
      owner: Person;
    }

    it('should compare two objects by the given nested property', () => {
      const companyA = { name: 'Company A', owner: { name: 'John', age: 30 } };
      const companyB = { name: 'Company B', owner: { name: 'Jane', age: 25 } };

      const comparer = compareNested<Company, { owner: Person }, Person>('owner')('age');

      expect(comparer(companyA, companyB)).toBe(1);
      expect(comparer(companyB, companyA)).toBe(-1);
    });
  });
});
