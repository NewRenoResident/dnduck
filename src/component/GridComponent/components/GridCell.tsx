import { GridItem } from "@chakra-ui/react";
import React, { forwardRef, useEffect, useRef } from "react";
import {
  addElement,
  setCellSize,
  updateOrAddElement,
} from "../../../store/slice/grid-map-slice";
import { useDispatch } from "react-redux";

interface GridCell {
  index: number;
  isInMovementRange: boolean;
  onClick: () => void;
  children: React.ReactNode;
  activeElement: boolean;
}

export const GridCell = ({
  index,
  isInMovementRange,
  onClick,
  children,
  activeElement,
}: GridCell) => {
  const calculateBg = () => {
    if (activeElement) {
      if (isInMovementRange) {
        return "rgba(124, 147, 195, 0.3)";
      }
      return "rgba(0, 0, 0, 0.6)";
    }
    return "transparent";
  };
  const dispatch = useDispatch();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData("text/plain");
    dispatch(updateOrAddElement({ id: +itemId, position: index }));
  };

  return (
    <GridItem
      position="relative"
      key={index}
      onClick={onClick}
      boxShadow="0 0 0 1px rgba(255,255,255,0.4)"
      cursor="pointer"
      transition="background-color 0.3s ease"
      bg={calculateBg()}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {children}
    </GridItem>
  );
};
