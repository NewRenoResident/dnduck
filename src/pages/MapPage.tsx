import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { useSelector } from "react-redux";
import {
  selectGridMapColumnSize,
  selectGridMapRowsSize,
} from "../store/slice/grid-map-slice";
import { GridComponent } from "../component/GridComponent/GridComponent";
import { MapImage } from "../component/MapImage/MapImage";
import { SizerControls } from "../component/SizeControls/SizeControls";
import { AddNewUserButton } from "../component/AddNewUserButton/AddNewUserButton";

export const MapPage = () => {
  const ref = useRef<HTMLImageElement>(null);
  const columns = useSelector(selectGridMapColumnSize);
  const rows = useSelector(selectGridMapRowsSize);
  const [cellCount, setCellCount] = useState(rows * columns);

  useEffect(() => {
    if (ref.current) {
      const totalCells = rows * columns;
      setCellCount(totalCells);
    }
  }, [ref, rows, columns]);

  return (
    <Box position="relative">
      <TransformWrapper doubleClick={{ disabled: true }}>
        <TransformComponent>
          <Box
            w={"100vw"}
            h={"100vh"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            <Box boxSizing="border-box" position="relative">
              <GridComponent
                rows={rows}
                columns={columns}
                cellCount={cellCount}
              />
              <MapImage ref={ref} />
            </Box>
          </Box>
        </TransformComponent>
      </TransformWrapper>
      <SizerControls />
      <AddNewUserButton />
    </Box>
  );
};
