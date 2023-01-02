import { useState } from 'react'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { createPet } from '../../data/pets'
import InputForm from '../../components/InputForm'
import TextareaInput from '../../components/TextareaInput'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import petValidation from '../../validations/petValidation'
import axios from 'axios'

const mascotas = () => {

    const [pet, setPet] = useState({
        name: '',
        price: 0,
        description: ''
    })
    const router = useRouter()


    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Registrar Mascota</Heading>
            <Formik
                initialValues={pet}
                validationSchema={petValidation}
                onSubmit={(values) => {
                    createPet(values).then(res => {
                        router.push("/mascotas")
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
                            <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre de la mascota" type="text" value={values.name} handleBlur={handleBlur} />
                            {touched.name && errors.name && (
                                <Text color={"red"}>{errors.name}</Text>
                            )}

                            <HStack>
                                <InputForm label="Raza" handleChange={handleChange} race="race" placeholder="Raza de la mascota" type="text" value={values.race} handleBlur={handleBlur} />
                            {touched.race && errors.race && (
                                <Text color={"red"}>{errors.race}</Text>
                            )}
                            </HStack>


                            <HStack>
                                <InputForm label="Especie" handleChange={handleChange} species="species" placeholder="Raza de la mascota" type="text" value={values.species} handleBlur={handleBlur} />
                                {touched.species && errors.species && (
                                <Text color={"red"}>{errors.species}</Text>
                            )}
                            </HStack>

                            <HStack>
                                <InputForm label="Peso" handleChange={handleChange} name="weight" placeholder="Peso de la mascota" type="number" value={values.weight} handleBlur={handleBlur} />
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
                                    <InputForm label="Dueño" handleChange={handleChange} owner="owner" placeholder="Dueño de la mascota" type="text" value={values.owner} handleBlur={handleBlur} />
                                {touched.owner && errors.owner && (
                                <Text color={"red"}>{errors.owner}</Text>
                                )}
                            </HStack>

                            <HStack>
                                    <InputForm label="TipoServicio" handleChange={handleChange} TipoServicio="TipoServicio" placeholder="Tipo de Servicio para la mascota" type="text" value={values.TipoServicio} handleBlur={handleBlur} />
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

export default mascotas