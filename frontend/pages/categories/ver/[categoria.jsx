import { useState } from 'react'
import { getCategory } from '../../../data/Categories'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import ShowInfo from '../../../components/ShowInfo'
import axios from 'axios'
export const getServerSideProps = async (context) => {
    try {
        const response = await getCategory(context.query.categoria, localStorage.getItem('token'))
        if (response.status === 200) {
            return {
                props: {
                    data: response.data
                }
            }
        } else {
            return {
                redirect: {
                    destination: "/",
                }
            }
        }
    } catch (error) {
        return {
            redirect: {
                destination: "/",
            }
        }
    }

}

const editar = ({ data }) => {
    const [category] = useState(data)
    const router = useRouter()

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Categoria: {category.name}</Heading>
            <Stack my={10}>
                <ShowInfo value={category.name} color={"green.300"} tag={"Nombre"} />
            </Stack>

            <HStack >
                <Button w={"full"} colorScheme="blue" mt={10} mb={10}>Editar</Button>
                <Button w={"full"} colorScheme="red" mt={10} mb={10}>Eliminar</Button>
                <Button w={"full"} colorScheme="green" mt={10} mb={10} onClick={() => router.push("/")}>Volver</Button>
            </HStack>
        </Container>
    )
}

export default editar