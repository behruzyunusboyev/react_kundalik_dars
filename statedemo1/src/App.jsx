import { use, useState } from 'react'
import {useEffect} from 'react'
import './App.css'
import QuoteCard from './pages/QuoteCard'

function App() {

  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getQuote = async () =>{
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
  }, []);

  useEffect(() => {
    if (quote) {
    const ranglar = ["#3498DB", "#2ECC71", "#9B59B6", "#E67E22", "#E74C3C", "#F1C40F", "#34495E", "#FD79A8"];
    const randomColor = ranglar[Math.floor(Math.random() * ranglar.length)];
    document.body.style.backgroundColor = randomColor;
    document.body.style.transition = "background-color 1s ease";
  };
  },[quote]);


  
  return (
    <div>
    <div style={{maxWidth:"600px", margin:"50px auto", textAlign:"center"}}
      id='app'
    >
        <h1>kun hikmati</h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{color:"red"}}>{error}</p>}
        {!loading && !error && quote && (

            QuoteCard({ quote: quote.content, author: quote.author })

          )}
        
    </div>
        <button onClick={getQuote} style={{
          background:"black",
          color:"white",
          width:"120px",
          height:"60px",
          borderRadius:"30px",
          fontSize:"15px",
          fontWeight:"bold"
        }}>Yangi hikmat</button>
    </div>
  )
}

export default App
