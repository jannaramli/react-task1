import { Image, Box } from '@chakra-ui/react'
import React from 'react'

interface Props {}

function BodyImage(props: Props) {
    const {} = props

    return (
        <Box boxSize='sm'>
            <Image position = 'absolute' left = '827px' top= '286px' src="/images/laptop.png" alt='laptop body' />
        </Box>
    )
}

export default BodyImage

