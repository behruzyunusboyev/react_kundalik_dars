import { useState } from 'react'
import './App.css' 
import Header from './Header'
import Footer from './Footer'
import UserCard from './UserCard'
import nurbek from './assets/props/react_rasmi.jpg'
import Cards from './cards'
import rasm1 from './assets/props/rasm1.jpg'
import rasm2 from './assets/props/rasm2.jpg'
import Product from './products'
import BankCard from './BankCard'



function xaridXabari(nomi){
  alert(nomi + " ni sotib oldingiz")
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <section id="center">
        {/* <Header /> */}
        <div id="bankcards">
          <BankCard 
            cardType="Aloqa Bank"
            number="1234 5678 9012 3456"
            expiryDate="12/24"
            userName="John Doe"
          />
          <BankCard 
            cardType="Halq Bank"
            number="0000 0000 0000 0000"
            expiryDate="10/14"
            userName="johon evazov"
          />
        </div>
        <div style={{display:'flex', justifyContent:"space-beetwen", gap:"25px", alignItems:"center"}}>
          <Cards
          ism="Nurbek"
          kasb="Web-Dasturchi"
          rasm={nurbek}
          />
          <Cards
          ism="Behruz"
          kasb="Dasturchi"
          rasm={rasm1}
          />
          <Cards
          ism="Sardor"
          kasb="Dasturchi"
          rasm={rasm2}
          />
        </div>
        <div>
          <Product
          nomi="Iphone 14 Pro Max"
          eskiNarx={2000}
          yangiNarx={1500}
          sotibOlish={xaridXabari}
          />
          <Product
          nomi="Samsung Galaxy S23 Ultra"
          eskiNarx={1800}
          yangiNarx={1800}
          sotibOlish={xaridXabari}
          />
        </div>
        <Footer />
      </section>
      
    </>
  )
}

export default App
