import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Table, TableContainer, Tbody, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [data,setData] = useState([])
    const [user,setUser] = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit = () => {
        setData(data.map((elem)=>{  return elem.id === user.id ? user : elem }  ))
        // axios.patch("http://localhost:3002/api/patch/users/"+user.id,user).then((data)=>{
        //     console.log(data)
        // })

        onClose()
    }


    useEffect(() => {
        console.log("Home")
        fetch("http://localhost:3002/api/get/users").then((data) => {
            return data.json()
        }
        ).then((data) => {
            console.log(data)
            setData(data)
        })
    }, [])
  return (
    <Box>
        {console.log(user) }
        <TableContainer maxW={'90%'} m={'auto'} mt={'4'} >
        <Table  variant="striped" colorScheme='twitter' >
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
                {data?.length === 0 && <Tr><Th>Loading...</Th></Tr>}
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
    </TableContainer>
    </Box>
    
  )
}
