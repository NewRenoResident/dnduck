import { Grid } from "@chakra-ui/react";
import { ActiveGridItem } from "../ActiveGridItem/ActiveGridItem";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  changeElementPosition,
  selectGridDynamicElements,
  setCellSize,
} from "../../store/slice/grid-map-slice";
import { useDispatch } from "react-redux";
import { useMovementRange } from "./hooks/useMovementRange";
import { GridCell } from "./components/GridCell";

interface activeElement {
  id: number;
  position: number;
}

export const GridComponent = ({
  rows,
  columns,
  cellCount,
}: {
  rows: number;
  columns: number;
  cellCount: number;
}) => {
  const gridActiveItems = useSelector(selectGridDynamicElements);
  const dispatch = useDispatch();
  const [clickedActiveElement, setClickedActiveElement] =
    useState<null | activeElement>(null);
  const movementRange = useMovementRange(
    clickedActiveElement?.position,
    rows,
    columns
  );
  const gridCells = useMemo(
    () =>
      Array(cellCount)
        .fill(null)
        .map((_, index) => ({
          index,
          isInMovementRange: movementRange.includes(index),
        })),
    [cellCount, movementRange]
  );

  const handleCellClick = (index: number) => {
    if (
      clickedActiveElement !== null &&
      clickedActiveElement.position !== index &&
      movementRange.indexOf(index) >= 0
    ) {
      dispatch(
        changeElementPosition({
          id: clickedActiveElement.id,
          position: index,
        })
      );
      setClickedActiveElement(null);
    }
  };

  return (
    <Grid
      templateColumns={`repeat(${columns}, 1fr)`}
      templateRows={`repeat(${rows}, 1fr)`}
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      gap={"1px"}
      w="100%"
      h="100%"
    >
      {gridCells.map(({ index, isInMovementRange }) => (
        <GridCell
          key={index}
          index={index}
          isInMovementRange={isInMovementRange}
          activeElement={clickedActiveElement !== null}
          onClick={() => handleCellClick(index)}
        >
          {gridActiveItems.map(
            (i) =>
              i.position === index && (
                <ActiveGridItem
                  key={i.id}
                  id={i.id}
                  onClick={() =>
                    setClickedActiveElement(
                      i.position === clickedActiveElement?.position
                        ? null
                        : i.position !== undefined
                        ? { id: i.id, position: i.position }
                        : null
                    )
                  }
                />
              )
          )}
        </GridCell>
      ))}
    </Grid>
  );
};
