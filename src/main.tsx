import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ControlPanel } from "./component/ControlPanel.tsx";
import { theme } from "./theme";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { MapPage } from "./pages/MapPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "control-panel",
    element: <ControlPanel />,
  },
  {
    // TODO 404 page
    path: "*",
    element: (
      <Box
        w={"100vw"}
        h={"100vh"}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Page not found
      </Box>
    ),
  },
  {
    path: "map",
    element: <MapPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </>
);
