import "./App.css";

import { Box } from "@chakra-ui/react";

import { ControlPanelAccessor } from "./component/ControlPanelAccessor";
import { PlayerViewImage } from "./component/PlayerViewImage/PlayerViewImage";
import { Toaster } from "./component/Toaster/Toaster";

function App() {
  return (
    <Box width={"100vw"} height={"100vh"}>
      <Toaster />
      <ControlPanelAccessor />
      <PlayerViewImage />
    </Box>
  );
}

export default App;
