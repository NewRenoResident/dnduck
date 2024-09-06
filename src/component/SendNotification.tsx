import { Button, Stack } from "@chakra-ui/react";
const channel = new BroadcastChannel("state_channel");
import { CloseButton } from "@chakra-ui/react";

export const SendNotification = ({
  setNotificationList,
  title,
  description,
  id,
}: {
  setNotificationList: React.Dispatch<React.SetStateAction<Notification[]>>;
  title: string;
  description: string;
  id: string;
}) => (
  <Stack direction="row" alignItems="center" justifyContent="center">
    <Button
      onClick={() => {
        new Audio("/Blow.mp3").play();
        channel.postMessage({
          title,
          description,
          id,
        });
      }}
    >
      {title}
    </Button>
    <CloseButton
      onClick={() =>
        setNotificationList((prev) => prev.filter((eld) => eld.id !== id))
      }
    />
  </Stack>
);
