import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";

const imageChannel = new BroadcastChannel("image");
export const PlayerViewImage = () => {
  const [currentImageUrl, setImageUrl] = useState("");

  imageChannel.onmessage = (event) => {
    setImageUrl(URL.createObjectURL(event.data));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image alt="player-image" height={"100vh"} src={currentImageUrl} />
    </Box>
  );
};
