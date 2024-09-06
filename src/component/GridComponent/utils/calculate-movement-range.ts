export const calculateMovementRange = (
  index: number,
  rows: number,
  columns: number,
  SPEED: number = 25,
  CELL_SIZE: number = 5
) => {
  const range: number[] = [];
  const maxDistance = Math.floor(SPEED / CELL_SIZE);
  const centerX = index % columns;
  const centerY = Math.floor(index / columns);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      const distance = Math.abs(x - centerX) + Math.abs(y - centerY);
      if (distance <= maxDistance) {
        range.push(y * columns + x);
      }
    }
  }
  return range;
};

// const calculateMovementRange = (
//   index: number,
//   rows: number,
//   columns: number
// ) => {
//   const range: number[] = [];
//   const maxDistance = Math.floor(SPEED / CELL_SIZE);
//   const centerX = index % columns;
//   const centerY = Math.floor(index / columns);

//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < columns; x++) {
//       const dx = Math.abs(x - centerX);
//       const dy = Math.abs(y - centerY);
//       const distance = Math.max(dx, dy); // Изменение здесь
//       if (distance <= maxDistance) {
//         range.push(y * columns + x);
//       }
//     }
//   }

//   return range;
// };
