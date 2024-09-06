import { useToast } from "@chakra-ui/react";
import { NotificationToast } from "../NotificationToast";

const channel = new BroadcastChannel("state_channel");
export const Toaster = () => {
  const toast = useToast();

  channel.onmessage = (event) => {
    if (!toast.isActive(event.data.id)) {
      toast({
        id: event.data.id,
        // title: event.data.title,
        // icon: <Image h={"100%"} src="/icons8-dungeons-and-dragons-480.png" />,
        position: "top-right",
        render: () => (
          <NotificationToast
            description={event.data.description}
            title={event.data.title}
            imageSrc={"/dnd.svg"}
          />
        ),
        description: event.data.description,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return null;
};
