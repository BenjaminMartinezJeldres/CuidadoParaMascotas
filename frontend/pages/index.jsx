import { useState, useEffect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody, FormControl, FormLabel } from '@chakra-ui/react'
import { getServices } from '../data/services'
//import { getCategories } from '../data/categories'
import { useRouter } from 'next/router'
//import { login } from '../data/user'
import axios from 'axios'
import reac,{fragment} from 'react'
import {
Breadcrumb,
BreadcrumbItem,
BreadcrumbLink,
BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import { extendTheme } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { login } from '../data/user'




const index = () => {

	const [rut, setRUT] = useState('')
	const router = useRouter()

	const handleChange = (e) => {
		setRUT(e.target.value)
	}

	const onSubmit = async (e) => {
		e.preventDefault()
		const response = await login(rut)
		if (response.status === 200) {
			localStorage.setItem('token', rut)
			router.push('./neighbour')
			elsif (<Input
    isInvalid
    errorBorderColor='red.300'
    placeholder='Here is a sample placeholder'/>)
		}
	}

	return (
		<>
		<Container maxW="container.xl" centerContent>
			<Stack direction='row'>
			<Image
  				borderRadius='full'
 				boxSize='100px'
 	 			objectFit='cover'
				mt="10"
  				src='https://static.vecteezy.com/system/resources/previews/006/470/722/original/pet-shop-logo-design-template-modern-animal-icon-label-for-store-veterinary-clinic-hospital-shelter-business-services-flat-illustration-background-with-dog-cat-and-horse-free-vector.jpg'
   				alt='Dan Abramov'


				/>
				<link rel="stylesheet" href="./styles/globals"></link>
				<Heading as="h1" size="2xl" textAlign="center" pt ="20"   mx="20"mt="0">Cuidados para mascotas del condominio</Heading>

</Stack>


				<Stack my={5} pt="20">
					<FormControl>

						<FormLabel>Rut del usuario: </FormLabel>
						<Input borderColor={"green"} px="10" onChange={handleChange} />
					</FormControl>

					<Button colorScheme="green" textAlign="center" mt="10" mb="10" onClick={(onSubmit) => router.push('./menu')}>Ingresar</Button>

				</Stack>
				<Stack>





				</Stack>
			</Container>
		</>

	)
}

export default index