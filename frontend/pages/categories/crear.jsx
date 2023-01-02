import { useState } from 'react'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { createCategory } from '../../data/categories'
import InputForm from '../../components/InputForm'
import TextareaInput from '../../components/TextareaInput'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import categoryValidation from '../../validations/categoryValidation'
import axios from 'axios'

const categorias = () => {

    const [category, setCategory] = useState({
        name: ''
    })
    const router = useRouter()


    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear Categoria</Heading>
            <Formik
                initialValues={category}
                validationSchema={categoryValidation}
                onSubmit={(values) => {
                    createCategory(values).then(res => {
                        router.push("/categorias")
                    })
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit} id="form">
                        <Stack spacing={4} mt={10}>
                            <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre de la categoria" type="text" value={values.name} handleBlur={handleBlur} />
                            {touched.name && errors.name && (
                                <Text color={"red"}>{errors.name}</Text>
                            )}
                        </Stack>

                        <HStack>
                            <Button colorScheme="blue" mt={10} mb={10} type={"submit"} >Crear</Button>
                            <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
                        </HStack>
                    </form>
                )}
            </Formik>
        </Container >
    )
}

export default categorias
