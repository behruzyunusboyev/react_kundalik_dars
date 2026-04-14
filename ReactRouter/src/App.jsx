import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Projects from './pages/Proyects'
import Homepage from './pages/Homepage'
import "../src/App.css"
import Cuntact from './pages/Contact'
function App() {
  return (
    <BrowserRouter>
      <nav className='App_nav'>
          <Link to='/'         className='links'>Bosh sahifa</Link>
          <Link to='/projects' className='links'>Projects</Link>
          <Link to='/contact'  className='links'>Aloqada</Link>
      </nav>

      <div style={{padding:'20px'}}>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Cuntact />}/>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App