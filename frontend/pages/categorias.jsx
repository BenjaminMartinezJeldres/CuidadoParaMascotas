import { useState as state, useEffect as efect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { getCategories } from '../data/categories'
import router from 'next/router'
import axios from 'axios'

const categorias = () => {

    const [categories, setCategories] = state([{
        id: '',
        name: ''

    }])


    const contentTable = () => {
        return categories.map(categories => {
            return (
                <Tr key={categories._id}>
                    <Td>{categories.name}</Td>
                    <Td>{categories._id}</Td>
                    <Td>
                        <HStack>

                            <Button colorScheme={"teal"} onClick={() => router.push(`./categories/actualizar/${categories._id}`)}>Editar</Button>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    efect(() => {
        getCategories().then(res => {
            setCategories(res.data)
        })
    }, [])


    return (
        <>
            <Container maxW="container.xl">
                <Button colorScheme="red"mt="10" mb="10" onClick={() => router.push('./menu')}>volver</Button>
                <Heading as="h1" size="2xl" textAlign="center" mt="10"> Listado de categorias </Heading>
                <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('/categories/crear')}>Agregar categoria</Button>

                <Stack spacing={4} mt="10">
                    <Table variant='striped' colorScheme='blue'>
                        <Thead>
                            <Tr>
                                <Td>Nombre</Td>
                                <Td>id</Td>

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

export default categorias