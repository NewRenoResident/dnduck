import { forwardRef } from "react";
import { Image } from "@chakra-ui/react";
export const MapImage = forwardRef<HTMLImageElement>((props, ref) => (
  <Image ref={ref} maxW={"90vw"} maxHeight={"90vh"} src="../test-map.webp" />
));
