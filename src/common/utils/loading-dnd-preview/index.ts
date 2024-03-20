export const loadingDNDPreviewModule = (() => {
  const dndSingle: HTMLElement = document.createElement('div');
  const dndMultiple: HTMLElement = document.createElement('div');
  let dndIcon: HTMLElement;

  dndSingle.classList.add('dndIcon', 'single');
  dndMultiple.classList.add('dndIcon', 'multiple');
  document.body.appendChild(dndSingle);
  document.body.appendChild(dndMultiple);

  return {
    getPreview(counterSelectedStops: number, event: DragEvent) {
      const target: HTMLElement = event.target as HTMLElement;
      if (target.ownerDocument != dndSingle.ownerDocument) {
        target.ownerDocument.body.appendChild(dndSingle);
        target.ownerDocument.body.appendChild(dndMultiple);
      }

      dndIcon = counterSelectedStops == 1 ? dndSingle : dndMultiple;
      if (counterSelectedStops > 1) {
        dndIcon.innerHTML = `<div>${counterSelectedStops}</div>`;
      }
      Object.assign(dndIcon.style, { left: event.pageX + 'px', top: event.pageY + 'px' });
      dndIcon.style.visibility = 'visible';
      return dndIcon;
    },
    hidePreview() {
      dndIcon.style.visibility = 'hidden';
    },
  };
})();
