import React from 'react'
import { Button, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'

interface Props {}

function HeaderNav(props: Props) {
    const {} = props

    return (
        <Stack 
            spacing={5}
            direction={["column", "row", "row", "row"]}
            position="absolute"
            top={30}
            right={135}   
        >
            <NextLink href="/" passHref>
                <Button 
                    colorScheme='white'
                    width = '67px'
                    height = '30px'
                    fontStyle = 'normal'
                    fontWeight = {200}
                    fontSize = '24px'
                    color = '#000000'
                >
                    Home
                </Button>
            </NextLink>

            <NextLink href="/" passHref>
                <Button 
                    colorScheme='white'
                    width = '68px'
                    height = '30px'
                    fontStyle = 'normal'
                    fontWeight = {200}
                    fontSize = '24px'
                    color = '#000000'
                >            
                    About
                </Button>
            </NextLink>

            <NextLink href="/" passHref>
                <Button 
                    colorScheme='white'
                    width = '87px'
                    height = '30px'
                    fontStyle = 'normal'
                    fontWeight = {200}
                    fontSize = '24px'
                    color = '#000000'
                >
                    Contact
                </Button>
            </NextLink>

            <NextLink href="/" passHref>
                <Button 
                    colorScheme='white'
                    width = '79px'
                    height = '30px'
                    fontStyle = 'normal'
                    fontWeight = {200}
                    fontSize = '24px'
                    color = '#000000'
                >
                Gallery
                </Button>
            </NextLink>

            <NextLink href="/" passHref>
                <Button 
                    colorScheme='white'
                    width = '93px'
                    height = '30px'
                    fontStyle = 'normal'
                    fontWeight = {200}
                    fontSize = '24px'
                    color = '#000000'
                >
                Services
                </Button>
            </NextLink>
        </Stack>
    )
}

export default HeaderNav


