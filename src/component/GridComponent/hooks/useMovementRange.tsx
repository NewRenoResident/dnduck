import { useEffect, useState } from "react";
import { calculateMovementRange } from "../utils/calculate-movement-range";

export const useMovementRange = (
  clickedActiveElementIndex: number | undefined,
  rows: number,
  columns: number
) => {
  const [movementRange, setMovementRange] = useState<number[]>([]);

  useEffect(() => {
    if (clickedActiveElementIndex !== undefined) {
      const range = calculateMovementRange(
        clickedActiveElementIndex,
        rows,
        columns
      );
      setMovementRange(range);
    } else {
      setMovementRange([]);
    }
  }, [clickedActiveElementIndex, rows, columns]);

  return movementRange;
};
