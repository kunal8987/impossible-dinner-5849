import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
export default function JobFilter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen} position={"fixed"}>
         Filters
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Filters</DrawerHeader>
          <DrawerBody>
            <Button colorScheme="teal" m={'10px'} variant="link">
              HR jobs
            </Button>
            <br />
            <Button colorScheme="teal" m={'10px'} variant="link">
              Marketing jobs
            </Button>
            <br />
            <Button colorScheme="teal" m={'10px'} variant="link">
              IT jobs
            </Button>
            <br />
            <Button colorScheme="teal" m={'10px'} variant="link">
              Data Science
            </Button>
            <br />
            <Button colorScheme="teal" m={'10px'} variant="link">
              Work From Home Jobs
            </Button>
            <br />
            <Button colorScheme="teal" m={'10px'} variant="link">
              Fresher jobs
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
