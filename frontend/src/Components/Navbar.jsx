import { Box, Spacer, Text,Flex, Link, Button } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
    const handleDownload = () => {
        console.log("Download")
    }
  return (
    <Flex bg="tomato" w="100%" p={4} color="white">
        <Text fontSize="2xl">Goldstone</Text>
        <Spacer />
        <Button onClick={handleDownload} colorScheme="teal" mr={4}>Get Csv</Button>
    </Flex>
  )
}
