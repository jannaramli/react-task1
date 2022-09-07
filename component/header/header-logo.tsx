import { Image, Box } from '@chakra-ui/react'
import React from 'react'

interface Props {}

function HeaderLogo(props: Props) {
    const {} = props

    return (
        <Box boxSize='sm'>
            <Image 
                position = 'absolute'
                width = '61px'
                height = '61px'
                left = '120px'
                top= '19px'
                src="/images/logo.png" alt='logo header' 
            />
        </Box>
    )
}

export default HeaderLogo

