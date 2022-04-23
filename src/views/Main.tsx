import { Stack, Text } from "@chakra-ui/react";
import Piano from "../components/Piano";

const Main = () => (
  <Stack
    w={"100vw"}
    h={'100vh'}
    justifyContent={'center'}
    alignItems={'center'}
    spacing={25}
    bg={'blue.100'}
  >
    <Text
      fontSize={62}
      fontWeight={'bold'}
    >
      Pia-NO
    </Text>
    <Piano />
  </Stack>
)

export default Main;