import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import QuoteCard from './components/QuoteCard';

function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getQuate = async () =>{
    setLoading(true);
    setError(null);
    try{
      const res = await fetch("https://dummyjson.com/quotes/random");
      const data = await res.json();
      setQuote({
        content: data.quote,
        author: data.author
      });
      
    }catch(err){
      setError("Failed to fetch quote. Please try again.");
      console.error(err);
    }
    setLoading(false);
  }
  useEffect(() => {
    getQuote();
  }, [])
  return (
    <>
      <section id="center">
       <div style={{maxWidth:"600px", margin:"50px auto", textAlign:"center"}}>
        <h1>kun hikmati</h1>

        {loading && <p>Loading...</p>}
        {error && <p style={{color:"red"}}>{error}</p>}
        {!loading && !error && quote && (
            QuoteCard({ quote: quote.content, author: quote.author })
          )}
          <button onClick={getQuate}>Yangi hikmat</button>
       </div>
       </section>
    </>
  )
}

export default App
