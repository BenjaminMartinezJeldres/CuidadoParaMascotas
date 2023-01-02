import { useState, useEffect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { getVecinos } from '../data/vecinos'
import { useRouter } from 'next/router'
import axios from 'axios'

const neighbour = () => {

    const [vecinos, setVecinos] = useState([{
        id: '',
        name: '',
        lastname: '',
        correo: '',
        telefono: '',
        genero:'',
        edad:'',
        residencia:'',
        category:''

    }])
    const router = useRouter()

    const contentTable = () => {
        return vecinos.map(vecinos => {
            return (
                <Tr key={vecinos._id}>
                    <Td>{vecinos.name}</Td>
                    <Td>{vecinos.lastname}</Td>
                    <Td>{vecinos.correo}</Td>
                    <Td>{vecinos.telefono}</Td>
                    <Td>{vecinos.genero}</Td>
                    <Td>{vecinos.edad}</Td>
                    <Td>{vecinos.residencia}</Td>
                    <Td>{vecinos.category}</Td>
                    <Td>
                        <HStack>
                            <Button colorScheme={"orange"} onClick={() => router.push(`./vecinos/ver/${vecinos._id}`)}>Ver</Button>
                            <Button colorScheme={"teal"} onClick={() => router.push(`./vecinos/actualizar/${vecinos._id}`)}>Editar</Button>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    useEffect(() => {
        getVecinos().then(res => {
            setVecinos(res.data)
        })
    }, [])


    return (
        <>
            <Container maxW="container.xl">
                <Button colorScheme="blue"mt="10" mb="10" onClick={() => router.push('./')}>volver</Button>
                <Heading as="h1" size="2xl" textAlign="center" mt="10"> Listado de vecinos </Heading>
                <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('/vecinos/crear')}>Agregar vecino</Button>
                <Stack spacing={4} mt="10">
                <Table variant='striped' colorScheme='blue'>
                        <Thead>
                            <Tr>
                                <Td>Nombre</Td>
                                <Td>lastname</Td>
                                <Td>correo</Td>
                                <Td>telefono</Td>
                                <Td>genero</Td>
                                <Td>edad</Td>
                                <Td>residencia</Td>
                                <Td>categoria</Td>

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

export default neighbour