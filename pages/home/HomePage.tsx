import { NextPage } from 'next'
import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import { context } from '../../context/ContextProvider'
import { contextProps } from '../../interfaces/contextProps.interface'
import Translation from '../../interfaces/translation.interface'
import { RootState } from '../../redux/store/store'


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