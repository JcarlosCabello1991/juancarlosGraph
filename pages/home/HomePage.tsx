import { NextPage } from 'next'
import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import { HeaderSection, MainSection, FooterSection } from '../../components/sectionsStyles/styles'

const HomePage = () => {
  return (
    <>
      <HeaderSection><Header /></HeaderSection>
      <MainSection><Main /></MainSection>
      <FooterSection><Footer /></FooterSection>
    </>
      
  )
}

export default HomePage