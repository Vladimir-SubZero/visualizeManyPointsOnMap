export const getRandomColor = (onlyPerfect: boolean) => {
  const r = Math.floor(Math.random() * 200);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const colors = [
    '26, 15, 219',
    '196, 10, 247',
    '2, 220, 240',
    '38, 240, 2',
    '232, 240, 2',
    '240, 89, 2',
    '2, 188, 240',
    '93, 2, 240',
    '161, 2, 240',
    '220, 2, 240',
    '255, 5, 5',
  ]
  if (onlyPerfect) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return 'rgb(' + color + ')'
  }
  return `rgb(${r}, ${g}, ${b})`;
}


