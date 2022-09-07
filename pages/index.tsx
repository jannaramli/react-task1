import type { NextPage } from 'next'
import HeaderLogo from '../component/header/header-logo'
import HeaderNav from '../component/header/header-nav'
import BodyImage from '../component/body/body-image'
import BodyContent from '../component/body/body-content'
import BodyButton from '../component/body/body-button'

const Home: NextPage = () => {
  return (
    <>
      <HeaderLogo />
      <HeaderNav />
      <BodyImage />
      <BodyContent />
      <BodyButton />
    </>  
  )
}

export default Home
