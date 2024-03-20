export const onClickOutside = (elements: HTMLElement[], handler: (e: Event) => void) => {
  const clickOutsideHandler = (event: Event) => {
    const target = event.target as HTMLElement;
    if (target === null) return;

    if (elements.some((elem) => elem === target || elem.contains(target))) {
      return;
    }

    handler(event);
  };

  document.addEventListener('click', clickOutsideHandler);

  return () => document.removeEventListener('click', clickOutsideHandler);
};
