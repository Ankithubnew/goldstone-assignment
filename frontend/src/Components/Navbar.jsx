import { Box, Spacer, Text,Flex, Link, Button } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'

export default function Navbar() {
    const handleDownload = async  () => {
        console.log("Download")
        const users=await axios.get("https://goldstone-h6jg.onrender.com/api/get/users"); 
        console.log(users.data);
        const csvData = users.data.map(user => {
          const headers = Object.keys(user);
          const data = headers.map(header => JSON.stringify(user[header]));
          return headers.join(',') + '\n' + data.join(',');
        });
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'users.csv';
        document.body.appendChild(a);
        a.click();
    }
  return (
    <Flex bg="tomato" w="100%" p={4} color="white">
        <Text fontSize="2xl">Goldstone</Text>
        <Spacer />
        <Button onClick={handleDownload} colorScheme="teal" mr={4}>Get Csv</Button>
    </Flex>
  )
}
