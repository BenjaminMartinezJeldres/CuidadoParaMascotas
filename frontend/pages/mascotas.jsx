import { useState, useEffect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { getPets } from '../data/pets'
import { useRouter } from 'next/router'
import axios from 'axios'

const mascotas = () => {

    const [pets, setPets] = useState([{
        id: '',
        name: '',
        race : '',
		species: '',
		weight: '',
		gender: '',
		owner: '',
	tiposervicio:'',
		category: ''

    }])
    const router = useRouter()

    const contentTable = () => {
        return pets.map(pet => {
            return (
                <Tr key={pet._id}>
                    <Td>{pet.name}</Td>
                    <Td>{pet.race}</Td>
                    <Td>{pet.species}</Td>
                    <Td>{pet.weight}</Td>
                    <Td>{pet.gender}</Td>
                    <Td>{pet.owner}</Td>
                    <Td>{pet.tiposervicio}</Td>
                    <Td>{pet.category}</Td>
                    <Td>
                        <HStack>
                            <Button colorScheme={"orange"} onClick={() => router.push(`./pet/ver/${pet._id}`)}>Ver</Button>
                            <Button colorScheme={"teal"} onClick={() => router.push(`./pet/actualizar/${pet._id}`)}>Editar</Button>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    useEffect(() => {
        getPets().then(res => {
            setPets(res.data)
        })
    }, [])


    return (
        <>
            <Container maxW="container.xl">
                <Button colorScheme="blue"mt="10" mb="10" onClick={() => router.push('./')}>volver</Button>
                <Heading as="h1" size="2xl" textAlign="center" mt="10"> Listado de mascotas </Heading>
                <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('/pet/crear')}>Agregar mascota</Button>
                <Stack spacing={4} mt="10">
                    <Table variant='striped' colorScheme='blue'>
                        <Thead>
                            <Tr>
                                <Td>Nombre</Td>
                                <Td>Raza</Td>
                                <Td>Especie</Td>
                                <Td>Peso</Td>
                                <Td>Genero</Td>
                                <Td>Dueño</Td>
                                <Td>Tipo de Servicio</Td>
                                <Td>Categoria</Td>
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

export default mascotas