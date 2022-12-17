import React from "react";
import {
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Badge,
  Container,
} from "@chakra-ui/react";

export default function JobsCard({
  title,
  titlehref,
  fleft_2,
  fleft_3,
  fleft_4,
  fleft_5,
  fleft_6,
  subTitle,
  job_description,
  ellipsis,
  ellipsis_3,
}) {
  return (
    <>
    <Container maxW={'80%'} flex={'colom'}>
      <Card position={'inherit'}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>

            <Text py="2">{subTitle}</Text>
            <Text py="2">{job_description}</Text>
            <Stack direction="row">
              <Badge>{ellipsis}</Badge>
              <Badge>{fleft_2}</Badge>
              <Badge>{fleft_3}</Badge>
              <Badge>{fleft_4}</Badge>
              <Badge>{fleft_5}</Badge>
              <Badge>{fleft_6}</Badge>
            </Stack>
            <Text py="2">Location:- {ellipsis_3}</Text>
          </CardBody>

          <CardFooter>
            <Button position={'inherit'} variant="solid" colorScheme="blue">
              Applay 
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      </Container>
    </>
  );
}
