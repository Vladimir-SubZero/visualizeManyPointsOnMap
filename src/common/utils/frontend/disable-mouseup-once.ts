export const disableMouseupOnce = (elem: Pick<HTMLElement, 'removeEventListener' | 'addEventListener'>) => {
  const onMouseupDisableOnce = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    requestAnimationFrame(enableMouseup);
  };

  const enableMouseup = () => {
    elem.removeEventListener('mouseup', onMouseupDisableOnce, true);
  };

  elem.addEventListener('mouseup', onMouseupDisableOnce, true);

  return enableMouseup;
};
