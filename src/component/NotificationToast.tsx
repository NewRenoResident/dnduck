import { Box, Text, Image } from "@chakra-ui/react";

interface NotificationToastProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const NotificationToast = ({
  title,
  description,
  imageSrc,
}: NotificationToastProps) => (
  <Box
    border="2px solid #ef9f76"
    p={1}
    minWidth={"100%"}
    // boxShadow="0px 2px 8px 0px rgba(108, 112, 134, 0.2)"
    h={75}
    borderRadius={8}
    display="flex"
    justifyContent="space-between"
    opacity={1}
    background="#737994"
  >
    <Image height="100%" src={imageSrc} ml={2} />
    <Box
      p={2}
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        fontWeight={800}
        fontFamily="Inter"
        fontSize="x-large"
        color="#f4b8e4"
      >
        {title}
      </Text>
      <Text fontFamily="Inter" fontSize="large" color="#c6d0f5">
        {description}
      </Text>
    </Box>
  </Box>
);
