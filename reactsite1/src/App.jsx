import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import React from 'react'
import { Home, About, Kurslar, Aloqa } from './pages/pages'
// import './App.css'
import Navbar from './companents/Navbar'

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () =>{
    switch(currentPage){
      case 'Home':  return <Home/>
      case 'About':  return <About/>
      case 'Kurslar':  return <Kurslar/>
      case 'Aloqa': return <Aloqa/>
    }
  }
  return (
    <>
      <section id="center">
        <Navbar setPage={setCurrentPage}/>
      <main>
        {renderPage()}
      </main>
        
        </section>
    </>
  )
}

export default App
