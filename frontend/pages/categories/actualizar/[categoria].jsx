import { useState as state } from 'react'
import { getCategory, updateCategory } from '../../../data/categories'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import TextareaInput from '../../../components/TextareaInput'
import react from 'next/router'
import Swal from 'sweetalert2'
import axios from 'axios'


export const getServerSideProps = async (context) => {
    const response = await getCategory(context.query.categoria)
    return {
        props: {
            data: response.data
        }
    }
}

const editar = ({ data }) => {
    const [category, setCategory] = state(data)

    const { categoria } = router.query

    const handleChange = (e) => {
        setCategory({
            ...category,
            [e.target.name]: e.target.value
        })

    }

    const submitCategory = async (e) => {
        e.preventDefault()
        const response = await updateCategory(categoria, category)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Categoria actualizada',
                showConfirmButton: true,
                text: 'La Categoria se actualizó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrió un error al actualizar la Categoria'
            })
        }
    }
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar Categoria: {category.name}</Heading>
            <Stack spacing={4} mt={10}>
                <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre de la categoria" type="text" value={category.name} />
            </Stack>
            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitCategory}>Editar categoria</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default editar