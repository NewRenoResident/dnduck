import { Stack, Button, Text } from "@chakra-ui/react";
import { SendNotification } from "./SendNotification";
interface Notification {
  id?: number;
  title: string;
  description: string;
  imageSrc?: string;
}

export const NotificationList = ({
  notifications,
  setNotificationList,
}: {
  notifications: Notification[];
  setNotificationList: React.Dispatch<React.SetStateAction<Notification[]>>;
}) => {
  let counter = 1;
  return (
    <Stack direction="column">
      {notifications.map(({ description, title, id }) => (
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Text>{counter++}</Text>
          <SendNotification
            title={title}
            setNotificationList={setNotificationList}
            description={description}
            id={id}
          />
        </Stack>
      ))}
      {/* <Button
        type="button"
        onClick={() => {
          localStorage.removeItem("notificationList");
          setNotificationList([]);
        }}
      >
        Clear
      </Button> */}
    </Stack>
  );
};
