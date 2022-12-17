import React from "react";
import {
  Card,
  Image,
  Button,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  
 
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function CompanyCard({
  titleAnchor,
  cardtag,
  cardtag_2,
  cardtag_5,
  cardtag_6,
  titleAnchor_href

}) {
  return (
    <>
     <Card position={'inherit'}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image width={"50%"} 
    // objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://static8.depositphotos.com/1378583/1010/i/600/depositphotos_10108949-stock-photo-blue-flame-logo.jpg'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody mb={"10px"}>
      <Heading size='md'>{titleAnchor}</Heading>

      <Text py='1'>
        {cardtag}
      </Text>
      <Text py='1'>
        {cardtag_2}
      </Text>
      <Text py='1'>
        {cardtag_5}
      </Text>
      <Text py='1'>
        {cardtag_6}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' position={'inherit'} colorScheme='blue'>
        Details
      </Button>
    </CardFooter>
  </Stack>
</Card>
    </>
  );
}
