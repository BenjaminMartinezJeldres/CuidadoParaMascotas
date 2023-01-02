import { useState } from 'react'
import { getVecino, updateVecino } from '../../../data/vecinos'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import TextareaInput from '../../../components/TextareaInput'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import axios from 'axios'


export const getServerSideProps = async (context) => {
    const response = await getVecino(context.query.neighbour)
    return {
        props: {
            data: response.data
        }
    }
}

const editar = ({ data }) => {
    const [vecino, setVecino] = useState(data)
    const router = useRouter()
    const { neighbour } = router.query

    const handleChange = (e) => {
        setVecino({
            ...vecino,
            [e.target.name]: e.target.value
        })

    }

    const submitVecino = async (e) => {
        e.preventDefault()
        const response = await updateVecino(neighbour, vecino)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Vecino actualizado',
                showConfirmButton: true,
                text: 'El Vecino se actualizó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrió un error al actualizar el vecino'
            })
        }
    }
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar Servicio: {vecino.name}</Heading>
            <Stack spacing={4} mt={10}>
                <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre del servicio" type="text" value={vecino.name} />
                <HStack>
                    <InputForm label="Precio" handleChange={handleChange} name="price" placeholder="Precio del servicio" type="number" value={vecino.price} />
                </HStack>
                <TextareaInput label="Descripción" handleChange={handleChange} name="description" placeholder="Descripción del servicio" value={vecino.description} />
            </Stack>
            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitVecino}>Editar servicio</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default editar