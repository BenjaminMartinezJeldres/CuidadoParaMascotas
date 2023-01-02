import { useState } from 'react'
import { getPet, updatePet } from '../../../data/pets'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import TextareaInput from '../../../components/TextareaInput'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import axios from 'axios'


export const getServerSideProps = async (context) => {
    const response = await getPet(context.query.mascota)
    return {
        props: {
            data: response.data
        }
    }
}

const editar = ({ data }) => {
    const [pet, setPet] = useState(data)
    const router = useRouter()
    const { mascota } = router.query

    const handleChange = (e) => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        })

    }

    const submitPet = async (e) => {
        e.preventDefault()
        const response = await updatePet(mascota, pet)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Mascota actualizada',
                showConfirmButton: true,
                text: 'La mascota se actualizó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrió un error al actualizar la mascota'
            })
        }
    }
    //---------------------------------------------------------------------------------------------
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar mascota: {pet.name}</Heading>
            <Stack spacing={4} mt={10}>
                <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre de la mascota" type="text" value={pet.name} />
                <HStack>
                    <InputForm label="Raza" handleChange={handleChange} name="race" placeholder="Precio del servicio" type="number" value={pet.race} />
                </HStack>
                    <TextareaInput label="Especie" handleChange={handleChange} name="species" placeholder="Descripción del servicio" value={pet.species} />
                <HStack>
                    <InputForm label="Peso" handleChange={handleChange} name="weight" placeholder="Nombre del servicio" type="text" value={pet.weight} />
                </HStack>
                <HStack>
                    <InputForm label="Genero" handleChange={handleChange} name="weight" placeholder="Nombre del servicio" type="text" value={pet.weight} />
                </HStack>
                <HStack>
                    <InputForm label="Dueño" handleChange={handleChange} name="weight" placeholder="Nombre del servicio" type="text" value={pet.weight} />
                </HStack>
                <HStack>
                    <InputForm label="TipoServicio" handleChange={handleChange} name="weight" placeholder="Nombre del servicio" type="text" value={pet.weight} />
                </HStack>
                <HStack>
                    <InputForm label="Categoria" handleChange={handleChange} name="weight" placeholder="Nombre del servicio" type="text" value={pet.weight} />
                </HStack>
            </Stack>


            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitPet}>Editar mascota</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default editar