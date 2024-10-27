import { Injectable } from '@nestjs/common';

export type Option = {
  key: string;
  value: string;
};

@Injectable()
export class TestService {
  items: Option[] = [
    {
      key: 'test-item-1',
      value: 'test item 1',
    },
  ];

  getItems(): Option[] {
    return this.items;
  }

  addItem(item: Option): Option[] {
    this.items.push(item);

    return this.items;
  }

  changeItem(key: string, item: Option): Option[] {
    const targetIndex = this.items.findIndex((i) => i.key === key);

    if (targetIndex !== -1) {
      this.items[targetIndex] = {
        ...this.items[targetIndex],
        ...item,
      };
    }

    return this.items;
  }

  deleteItem(key: string): Option[] {
    const targetItemIndex = this.items.findIndex((i) => i.key === key);

    if (targetItemIndex !== -1) {
      this.items.splice(targetItemIndex, 1);
    }

    return this.items;
  }
}
