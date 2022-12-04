import React from 'react'
import styled from 'styled-components'
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';
import styles from '../../styles/Home.module.css'
import { HeaderSection, MainSection, FooterSection } from '../../components/sectionsStyles/styles'
import { NextPage } from 'next';

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  list-style:none;
`;

const Span = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const About: NextPage = () => {

  return (    
    <div className={styles.container}>
      <HeaderSection><Header /></HeaderSection>
      <MainSection><Main /></MainSection>
      <FooterSection><Footer /></FooterSection>
    </div>
  )
}

export default About
