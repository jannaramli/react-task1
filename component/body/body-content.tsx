import React from 'react'
import { Stack, Text } from '@chakra-ui/react'

interface Props {}

function BodyContent(props: Props) {
    const {} = props

    return (  
        <Stack >
           <Text
                fontStyle = 'normal'
                fontWeight = '800'
                fontSize = '30px'
                color = '#000000'
                left = '120px'
                top= '230px'
                position = 'absolute'
                lineHeight = '2em'
            >
                How To Start Your Own Bussiness ! <br></br>
                Will You Ready ?
            </Text> 
            <Text
                fontStyle = 'normal'
                fontWeight = '100'
                fontSize = '24px'
                lineHeight = '2em'
                position = 'absolute'
                left = '120px'
                top= '390px'
            >
                WE Help Individuals Or Organizations To Start Their <br></br>
                Business Or Start-Up By Giving Them Indepth Theory <br></br>
                And Practical Sessions.
            </Text>
        </Stack>
    )
}

export default BodyContent
