import { useState } from 'react'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { createVecino } from '../../data/vecinos'
import InputForm from '../../components/InputForm'
import TextareaInput from '../../components/TextareaInput'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import vecinoValidation from '../../validations/vecinoValidation'
import axios from 'axios'

const neighbour = () => {

    const [vecino, setVecino] = useState({
        name: '',
        price: 0,
        description: ''
    })
    const router = useRouter()


    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear Vecino</Heading>
            <Formik
                initialValues={vecino}
                validationSchema={vecinoValidation}
                onSubmit={(values) => {
                    createVecino(values).then(res => {
                        router.push("/neighbour")
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
                            <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre del servicio" type="text" value={values.name} handleBlur={handleBlur} />
                            {touched.name && errors.name && (
                                <Text color={"red"}>{errors.name}</Text>
                            )}
                            <HStack>
                                <InputForm label="Precio" handleChange={handleChange} name="price" placeholder="Precio del servicio" type="number" value={values.price} handleBlur={handleBlur} />
                            </HStack>
                            <HStack justify={"space-between"}>
                                {touched.price && errors.price && (
                                    <Text color={"red"}>{errors.price}</Text>
                                )}
                            </HStack>
                            <TextareaInput label="Descripción" handleChange={handleChange} name="description" placeholder="Descripción del servicio" value={values.description} handleBlur={handleBlur} />
                            {touched.description && errors.description && (
                                <Text color={"red"}>{errors.description}</Text>
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

export default neighbour