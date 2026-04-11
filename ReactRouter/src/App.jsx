import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <nav style={{padding:"20px", background:"#eee"}}>
          {/* <Link to='/' style={{marginRight:"10px"}}>Bosh sahifa</Link>
          <Link to='/about' style={{marginRight:"10px"}}>Haqida</Link>
          <Link to='/contact'>Aloqada</Link> */}
      </nav>

      <div style={{padding:'20px'}}>
        <Routes>
          {/* <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/> */}
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App