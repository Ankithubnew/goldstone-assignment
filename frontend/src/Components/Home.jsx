import { Box, Button, Center, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spinner, Table, TableContainer, Tbody, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [data,setData] = useState([])
    const [user,setUser] = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit = async () => {
        setData(data.map((elem)=>{  return elem.id === user.id ? user : elem }  ))
        const res = await axios.put("https://goldstone-h6jg.onrender.com/api/update/users/"+user.id,user);
        console.log(res);
        onClose()
    }
    const getData = async () => {
        const res = await axios.get("https://goldstone-h6jg.onrender.com/api/get/users");
        console.log(res.data);
        setData(res.data)
    }


    useEffect(() => {
        getData()
    }, [])
  return (
    <>
    {data.length === 0 && <Center mt={'4'}>
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
    </Center>}
    <Box backgroundColor={'GrayText'} >
        
        {data.length>0?<TableContainer maxW={'90%'} m={'auto'}  backgroundColor={'Background'}>
        <Table  variant="striped" colorScheme='teal' >
            <Thead>
                <Tr>
                    <Th>Id</Th>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Gender</Th>
                    <Th>Status</Th>
                    <Th>Edit</Th>
                </Tr>
            </Thead>
            <Tbody>
                {data?.map((elem,ind) => {
                    return (
                        <Tr key={elem.id}>
                            <Th>{elem.id}</Th>
                            <Th>{elem.name}</Th>
                            <Th>{elem.email}</Th>
                            <Th>{elem.gender}</Th>
                            <Th>{elem.status}</Th>
                            <Th onClick={()=>{setUser(elem)}}><Button onClick={onOpen}>Edit</Button></Th>
                        </Tr>
                    )
                })}

            </Tbody>
        </Table>
        <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modify your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input name='name' defaultValue={user.name} onChange={handleChange} placeholder='Name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input name='email' defaultValue={user.email} onChange={handleChange} placeholder='Email' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Select name='gender' defaultValue={user.gender} onChange={handleChange} placeholder='Select Gender'>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='others'>Others</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Status</FormLabel>
              <Select name='status' onChange={handleChange} defaultValue={user.status} >
                <option value='active'>active</option>
                <option value='inactive'>inactive</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' onClick={handleSubmit} mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </TableContainer>:null}
    </Box>
    </>
  )
}
