import { useState as state} from 'react'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { createService } from '../../data/services'
import InputForm from '../../components/InputForm'
import TextareaInput from '../../components/TextareaInput'
import router from 'next/router'
import { Formik } from 'formik'
import serviceValidation from '../../validations/serviceValidation'
import axios from 'axios'

const servicios = () => {

    const [service, setService] = state ({
        name: '',
        price: 0,
        description: ''
    })


    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear Servicio</Heading>
            <Formik
                initialValues={service}
                validationSchema={serviceValidation}
                onSubmit={(values) => {
                    createService(values).then(res => {
                        router.push("/servicios")
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

export default servicios


{/* <Stack spacing={4} mt={10}>
                <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre del producto" type="text" value={product.name} />
                <HStack>
                    <InputForm label="Precio" handleChange={handleChange} name="price" placeholder="Precio del producto" type="number" value={product.price} />
                    <InputForm label="Cantidad" handleChange={handleChange} name="quantity" placeholder="Cantidad del producto" type="number" value={product.quantity} />
                </HStack>
                <TextareaInput label="Descripción" handleChange={handleChange} name="description" placeholder="Descripción del producto" value={product.description} />
            </Stack>
            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitProduct}>Crear</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
            </HStack> */}