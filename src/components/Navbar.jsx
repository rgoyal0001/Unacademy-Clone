import { ChakraProvider } from "@chakra-ui/react"
import React from 'react';
import { Box, Image, Button, Input, Heading, InputGroup, InputLeftElement, UnorderedList, Link, Text } from '@chakra-ui/react';
import { ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';

export default function Navbar(){
    return(
        <ChakraProvider>

        <Box position="sticky" top="0px" left="0px" width="100%" height="72px" backgroundColor="#FFFFFF" boxShadow="inset 0px -1px 0px rgba(233, 238, 242, 0.4)" zIndex="2">
                    <Box width="1200px" margin="auto" padding="15px" display="flex" justifyContent="space-between" alignItems="center" height="100%" marginInline="auto" backgroundColor="transparent">
                        <Image src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256"></Image>
                        <Link href="/login"><Button colorScheme="green" fontSize="sm" fontWeight="semibold">Login</Button></Link>
                    </Box>
        </Box>
        </ChakraProvider>

    )
}