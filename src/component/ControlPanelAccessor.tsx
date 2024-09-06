import {
  Box,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ControlPanelAccessor = () => {
  return (
    <Box bottom={0} position="absolute">
      <Popover trigger="hover">
        <PopoverTrigger>
          <Box w={100} h={100} />
        </PopoverTrigger>
        <PopoverContent width="fit-content">
          <PopoverBody>
            <Link target="_blank" to="control-panel">
              Control Panel
            </Link>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
