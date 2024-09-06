import { Button, Container, Input } from "@chakra-ui/react";
const imageChannel = new BroadcastChannel("image");

import { FormControl, FormLabel, Box } from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import { NotificationList } from "./NotificationList";
import { Link } from "react-router-dom";

interface Notification {
  id?: number;
  title: string;
  description: string;
  imageSrc?: string;
}

export const ControlPanel = () => {
  const [notificationList, setNotificationList] = useState<Notification[]>(
    () => {
      const storedList = localStorage.getItem("notificationList");
      return storedList ? JSON.parse(storedList) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("notificationList", JSON.stringify(notificationList));
  }, [notificationList]);

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const items = event.clipboardData?.items;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          const blob = items[i].getAsFile();
          if (blob) {
            imageChannel.postMessage(blob);
          }
        }
      }
    }
  };
  return (
    <>
      <Box display="flex">
        <Container
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <form
            onSubmit={(event: FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const title = (
                event.currentTarget.elements.namedItem(
                  "title"
                ) as HTMLInputElement
              ).value;
              const description = (
                event.currentTarget.elements.namedItem(
                  "description"
                ) as HTMLInputElement
              ).value;

              setNotificationList((prev) => [
                ...prev,
                {
                  title,
                  description,
                  id: Math.round(Math.random() * 100000000000000),
                },
              ]);
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <FormControl p={4}>
                <FormLabel>Title</FormLabel>
                <Input name="title" type="text" />
                <FormLabel>Description</FormLabel>
                <Input name="description" type="text" />
              </FormControl>
              <Button type="submit">Add new Notification</Button>
            </Box>
          </form>
          <Link to="/">Control Panel</Link>
        </Container>
        <Container
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <NotificationList
            setNotificationList={setNotificationList}
            notifications={notificationList}
          />
        </Container>
        <Container
          m={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border="1px solid grey"
        >
          <input
            type="file"
            title=""
            name="myImage"
            onClick={(event) => event.preventDefault()}
            onChange={(event) => {
              if (event.target.files && event.target.files[0]) {
                imageChannel.postMessage(event.target.files[0]);
              }
            }}
            onPaste={handlePaste}
            style={{
              width: "inherit",
              height: "100%",
              opacity: 1,
            }}
          />
        </Container>
      </Box>
    </>
  );
};
