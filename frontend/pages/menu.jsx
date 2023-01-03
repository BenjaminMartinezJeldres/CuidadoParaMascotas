import { useState, useEffect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody, FormControl, FormLabel } from '@chakra-ui/react'
import { getServices } from '../data/services'
//import { getCategories } from '../data/categories'
import router from 'next/router'
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




const menu=() =>{

return(
	<>


		<Container maxW="container.md">

<Stack direction='row'>
	<Image
        borderRadius='full'
        boxSize='150px'
        objectFit='cover'
		mt="0"
		src='https://static.vecteezy.com/system/resources/previews/006/470/722/original/pet-shop-logo-design-template-modern-animal-icon-label-for-store-veterinary-clinic-hospital-shelter-business-services-flat-illustration-background-with-dog-cat-and-horse-free-vector.jpg'
		alt='Dan Abramov'

				/>
					<Heading pt="10" fontSize='50px' as="h1" size="2xl" > Cuidados para mascotas del condominio </Heading>
</Stack>



		<Breadcrumb>

		<Breadcrumb fontWeight='medium' fontSize='sm'></Breadcrumb>

<BreadcrumbItem>

	<Button colorScheme="green" textAlign="center" mt="10" mb="10" onClick={() => router.push('./servicios')}>Servicios</Button>
</BreadcrumbItem>

<BreadcrumbItem>
    <Button colorScheme="green" textAlign="center" mt="10" mb="10" onClick={() => router.push('./mascotas')}>Mascotas</Button>
</BreadcrumbItem>

<BreadcrumbItem isCurrentPage>
    <Button colorScheme="green" textAlign="center" mt="10" mb="10" onClick={() => router.push('./categorias')}>Categorias</Button>
</BreadcrumbItem>

<BreadcrumbItem>
    <Button colorScheme="green" textAlign="center" mt="10" mb="10" onClick={() => router.push('./neighbour')}>Vecinos</Button>
</BreadcrumbItem>

<BreadcrumbItem>
    <Button colorScheme="red" textAlign="center" mt="10" mb="10" onClick={() => router.push('./')}>Salir</Button>
</BreadcrumbItem>


</Breadcrumb>


	
		</Container>
	</>
	)
}

export default menu