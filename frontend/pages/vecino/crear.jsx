import { useState as state} from 'react'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { createVecino } from '../../data/vecinos'
import InputForm from '../../components/InputForm'
import TextareaInput from '../../components/TextareaInput'
import router from 'next/router'
import { Formik } from 'formik'
import vecinoValidation from '../../validations/vecinoValidation'
import axios from 'axios'

const neighbour = () => {

    const [vecino, setVecino] = state({
        name: '',
        price: 0,
        description: ''
    })


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
                            <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre del vecino" type="text" value={values.name} handleBlur={handleBlur} />
                            {touched.name && errors.name && (
                                <Text color={"red"}>{errors.name}</Text>
                            )}

                            <HStack>
                                <InputForm label="Apellido" handleChange={handleChange} lastname="lastname" placeholder="Apellido del Vecino" type="text" value={values.lastname} handleBlur={handleBlur} />
                            {touched.lastname && errors.lastname && (
                                <Text color={"red"}>{errors.lastname}</Text>
                            )}
                            </HStack>


                            <HStack>
                                <InputForm label="Correo" handleChange={handleChange} species="species" placeholder="Raza de la mascota" type="text" value={values.species} handleBlur={handleBlur} />
                                {touched.species && errors.species && (
                                <Text color={"red"}>{errors.species}</Text>
                            )}
                            </HStack>

                            <HStack>
                                <InputForm label="Telefono" handleChange={handleChange} name="weight" placeholder="Peso de la mascota" type="number" value={values.weight} handleBlur={handleBlur} />
                            </HStack>
                            <HStack justify={"space-between"}>
                                {touched.weight && errors.weight && (
                                    <Text color={"red"}>{errors.weight}</Text>
                                )}
                            </HStack>

                            <HStack>
                                    <InputForm label="Genero" handleChange={handleChange} gender="gender" placeholder="Genero de la mascota" type="text" value={values.gender} handleBlur={handleBlur} />
                                {touched.gender && errors.gender && (
                                <Text color={"red"}>{errors.gender}</Text>
                                )}
                            </HStack>

                                    <HStack>
                                    <InputForm label="Edad" handleChange={handleChange} owner="owner" placeholder="Dueño de la mascota" type="text" value={values.owner} handleBlur={handleBlur} />
                                {touched.owner && errors.owner && (
                                <Text color={"red"}>{errors.owner}</Text>
                                )}
                            </HStack>

                            <HStack>
                                    <InputForm label="Residencia" handleChange={handleChange} TipoServicio="TipoServicio" placeholder="Tipo de Servicio para la mascota" type="text" value={values.TipoServicio} handleBlur={handleBlur} />
                                {touched.TipoServicio && errors.TipoServicio && (
                                <Text color={"red"}>{errors.TipoServicio}</Text>
                                )}
                            </HStack>
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