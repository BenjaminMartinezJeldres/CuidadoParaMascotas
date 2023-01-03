import { useState as state} from 'react'
import { getService, updateService } from '../../../data/services'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import TextareaInput from '../../../components/TextareaInput'
import router from 'next/router'
import Swal from 'sweetalert2'
import axios from 'axios'


export const getServerSideProps = async (context) => {
    const response = await getService(context.query.servicio)
    return {
        props: {
            data: response.data
        }
    }
}

const editar = ({ data }) => {
    const [service, setService] = state(data)
    const { servicio } = router.query

    const handleChange = (e) => {
        setService({
            ...service,
            [e.target.name]: e.target.value
        })

    }

    const submitService = async (e) => {
        e.preventDefault()
        const response = await updateService(servicio, service)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Servicio actualizado',
                showConfirmButton: true,
                text: 'El servicio se actualizó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrió un error al actualizar el servicio'
            })
        }
    }
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar Servicio: {service.name}</Heading>
            <Stack spacing={4} mt={10}>
                <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre del servicio" type="text" value={service.name} />
                <HStack>
                    <InputForm label="Precio" handleChange={handleChange} name="price" placeholder="Precio del servicio" type="number" value={service.price} />
                </HStack>
                <TextareaInput label="Descripción" handleChange={handleChange} name="description" placeholder="Descripción del servicio" value={service.description} />
            </Stack>
            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitService}>Editar servicio</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default editar