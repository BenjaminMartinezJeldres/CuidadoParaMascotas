import { useState as state, useEffect as efect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { getServices } from '../data/services'
import router from 'next/router'
import axios from 'axios'
import { Text } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'

const servicios = () => {

    const [services, setServices] = state([{
        id: '',
        name: '',
        price: '',
        description: '',
        category: ''
    }])


    const contentTable = () => {
        return services.map(services => {
            return (
                <Tr key={services._id}>
                    <Td>{services.name}</Td>
                    <Td>{services.description}</Td>
                    <Td>{services.price}</Td>
                    <Td>
                        <HStack>
                            <Button colorScheme={"teal"} onClick={() => router.push(`./services/actualizar/${services._id}`)}>Editar</Button>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    efect(() => {
        getServices().then(res => {
            setServices(res.data)
        })
    }, [])


    return (
        <>
            <Container maxW="container.xl">
                <Button colorScheme="red" mt="10" mb="10" onClick={() => router.push('./menu')}>  volver</Button>
                
                <Heading  as="h1" size="2xl" textAlign="center" mt="10"> Listado de servicios </Heading>

                <Stack spacing={10} mt="10">
                    <Table  variant='striped' colorScheme='blue'>
                        <Thead>

                        <Tr>

                                <Td>Nombre</Td>
                                <Td>Descripción</Td>
                                <Td>Precio</Td>
                                <Td>Acciones</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {contentTable()}
                        </Tbody>
                    </Table>
                </Stack>
            </Container>
        </>

    )
}

export default servicios