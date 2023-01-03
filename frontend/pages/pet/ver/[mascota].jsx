import { useState as state } from 'react'
import { getPet } from '../../../data/pets'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import router from 'next/router'
import ShowInfo from '../../../components/ShowInfo'
import axios from 'axios'



export const getServerSideProps = async (context) => {
        const response = await getPet(context.query.mascota)
        if (response.status === 200) {
            return {
                props: {
                    data: response.data
            }
        }
    }
}


const editar = ({ data }) => {
    const [pet] = state(data)


    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Mascota: {pet.name}</Heading>

                <Stack my={10}>
                <ShowInfo value={pet.name} color={"darkgreen"} tag={"Nombre"} />
                <ShowInfo value={pet.race} color={"blue.300"} tag={"Raza"} />
                <ShowInfo value={pet.species} color={"blue.300"} tag={"Especie"} />
                <ShowInfo value={pet.weight} color={"blue.300"} tag={"Peso"} />
                <ShowInfo value={pet.gender} color={"blue.300"} tag={"Genero"} />
                <ShowInfo value={pet.owner} color={"blue.300"} tag={"Id Dueño"} />
                <ShowInfo value={pet.tiposervicio} color={"blue.300"} tag={"Tipo de Servicio"} />
                <ShowInfo value={pet.category} color={"blue.300"} tag={"Categoria"} />
                <HStack>
                </HStack>
            </Stack>
            <HStack >
                <Button w={"full"} colorScheme="green" mt={10} mb={10}>Subir Archivo</Button>
                <Button w={"full"} colorScheme="red" mt={10} mb={10}>Eliminar</Button>
                <Button w={"full"} colorScheme="green" mt={10} mb={10} onClick={() => router.push("/mascotas")}>Volver</Button>
            </HStack>
        </Container>
    )
}

export default editar


