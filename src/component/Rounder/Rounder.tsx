import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export const Rounder = ({ children }: { children: ReactNode }) => (
  <Box
    bgColor="#295F98"
    borderRadius={"100%"}
    p={4}
    w={20}
    h={20}
    justifyContent={"center"}
    alignItems={"center"}
    display={"flex"}
  >
    {children}
  </Box>
);
