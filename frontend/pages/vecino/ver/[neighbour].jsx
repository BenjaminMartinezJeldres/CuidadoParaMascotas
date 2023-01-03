import { useState as state} from 'react'
import { getVecino } from '../../../data/vecinos'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import router from 'next/router'
import ShowInfo from '../../../components/ShowInfo'
import axios from 'axios'



export const getServerSideProps = async (context) => {
        const response = await getVecino(context.query.neighbour)
        if (response.status === 200) {
            return {
                props: {
                    data: response.data
            }
        }
    }
}


const editar = ({ data }) => {
    const [vecino] = state(data)


    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Vecino: {vecino.name}</Heading>

        <Stack my={10}>
            <ShowInfo value={vecino.name} color={"darkgreen"} tag={"Nombre"} />
            <ShowInfo value={vecino.lastname} color={"blue.300"} tag={"Apellido"} />
                <ShowInfo value={vecino.correo} color={"blue.300"} tag={"Correo"} />
                <ShowInfo value={vecino.telefono} color={"blue.300"} tag={"Telefono"} />
                <ShowInfo value={vecino.genero} color={"blue.300"} tag={"Genero"} />
                <ShowInfo value={vecino.edad} color={"blue.300"} tag={"Edad"} />
                <ShowInfo value={vecino.residencia} color={"blue.300"} tag={"Residencia"} />
        </Stack>





            <HStack >
                <Button w={"full"} colorScheme="green" mt={10} mb={10}>Dejar Comentarios</Button>
                <Button w={"full"} colorScheme="red" mt={10} mb={10}>Eliminar</Button>
                <Button w={"full"} colorScheme="green" mt={10} mb={10} onClick={() => router.push("/neighbour")}>Volver</Button>
            </HStack>
        </Container>
    )
}

export default editar


