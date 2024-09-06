import {
  Box,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Fade,
  ScaleFade,
} from "@chakra-ui/react";
import { useState } from "react";
import { ActiveGridItem } from "../ActiveGridItem/ActiveGridItem";
import { useSelector } from "react-redux";
import { selectGridDynamicElements } from "../../store/slice/grid-map-slice";

export const AddNewUserButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const gridActiveItems = useSelector(selectGridDynamicElements);

  return (
    <Box
      bottom={4}
      right={4}
      position="absolute"
      display="flex"
      alignItems="end"
      flexDirection="column"
    >
      <ScaleFade in={isOpen}>
        <Box
          p={3}
          color="white"
          mt="4"
          mb={8}
          mr={8}
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          {gridActiveItems.map((item) => (
            <ActiveGridItem
              width={"50px"}
              height={"50px"}
              id={item.id}
              key={item.id}
            />
          ))}
        </Box>
      </ScaleFade>
      <Button
        w={10}
        h={10}
        borderRadius={"100%"}
        colorScheme="blue"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text pb={1} fontSize={30} color="white">
          +
        </Text>
      </Button>
    </Box>
  );
};
