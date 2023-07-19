import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import AboutPage from './pages/AboutPage'
import HousingPage from './pages/HousingPage'
import ErrorPage from './pages/ErrorPage'
import Header from './components/Header'
import Footer from './components/Footer'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'


const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
    }
    body {
        margin:0;
    }
    
`

const MainContainer = styled.div`
  margin: 5vw 10vw;

  @media screen and (max-width: 768px) {
    margin: 3vw 5vw;
  }

`

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/housing/:id" element={<HousingPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MainContainer>
      <Footer />
    </Router>
  </React.StrictMode>,
)
