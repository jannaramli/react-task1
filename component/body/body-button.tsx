import { Button, Flex} from '@chakra-ui/react'
import React from 'react'

interface Props {}

function BodyButton(props: Props) {
  const {} = props

  return (
    <Flex position="absolute" top={600} left={120}>
      <Button 
        size="lg" 
        fontStyle = 'normal'
        background = 'rgba(85, 85, 255, 0.81)'
        fontWeight = '100'
        fontSize = '36px'  
        color = '#FFFFFF'
        borderRadius='2px'
      >
        Join Now
      </Button>
    </Flex>
  )
}

export default BodyButton
