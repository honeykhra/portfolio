import React from 'react'

import Footer from '../components/Footer/Footer'
import Hamburger from '../components/HamBurger/HamBurger'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
      <Header />
      <Hamburger />
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
