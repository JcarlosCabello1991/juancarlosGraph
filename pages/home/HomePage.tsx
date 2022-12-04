import { NextPage } from 'next'
import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'

const HomePage = () => {
  return (
    <>
      <header><Header /></header>
      <main><Main /></main>
      <footer><Footer /></footer>
    </>
      
  )
}

export default HomePage