import { Box, Text } from "@chakra-ui/react";
import { useRef, useEffect } from "react";

export const ActiveGridItem = ({
  id,
  onClick,
  width,
  height,
  letter,
}: {
  id?: number;
  onClick?: () => void;
  width?: number | string;
  height?: number | string;
  letter?: string;
}) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.addEventListener("dragstart", (e) => {
        const dragIcon = document.createElement("div");
        dragIcon.textContent = letter;
        dragIcon.style.backgroundColor = "#7C93C3";
        dragIcon.style.width = "30px";
        dragIcon.style.height = "30px";
        dragIcon.style.borderRadius = "50%";
        dragIcon.style.display = "flex";
        dragIcon.style.justifyContent = "center";
        dragIcon.style.alignItems = "center";
        dragIcon.style.color = "white";
        document.body.appendChild(dragIcon);
        e.dataTransfer?.setDragImage(dragIcon, 15, 15);
        setTimeout(() => document.body.removeChild(dragIcon), 0);
      });
    }
  }, [letter]);

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("text/plain", id?.toString() || "");
  };

  return (
    <Box
      ref={boxRef}
      onClick={onClick}
      width={width || "100%"}
      height={height || "100%"}
      rounded="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow={"hidden"}
      bg={"#7C93C3"}
      transition="background-color 0.1s ease"
      draggable
      onDragStart={handleDragStart}
    >
      <Text>{letter}</Text>
    </Box>
  );
};
