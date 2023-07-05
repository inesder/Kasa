import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import AboutPage from './pages/AboutPage'
import HousingPage from './pages/HousingPage'
import ErrorPage from './pages/ErrorPage'
import Header from './components/Header'
import Footer from './components/Footer'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />}/>
                <Route path='/housing' element={<HousingPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)