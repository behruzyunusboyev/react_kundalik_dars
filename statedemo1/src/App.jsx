import { useState } from 'react'
import {useEffect} from 'react'
import './App.css'
import QuoteCard from './pages/QuoteCard'
// import AddQuote from './pages/AddQuote'

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

  // const [hikmat, setHikmat] = useState("");
  //   const [author, setAuthor] = useState("");
  //   let hikmatlar =[]
  //   let muallif =[]


  //       const qoshish = () =>{
  //       hikmatlar.push(hikmat)
  //       muallif.push(author)
  //       console.log(hikmatlar);
  //       console.log(muallif);
  //   }
  //   const clear = () =>{
  //       setHikmat("");
  //       setAuthor("");
  //   }

  // const  createQ = () =>{
  //       setQuote({
  //         content: hikmatlar,
  //         author: author
  //       })
  //   }
  
  return (
    <div>
      {/* <div>
            <input type="text" placeholder="Hikmat" value={hikmat} onChange={(e) => setHikmat(e.target.value)} />
            <input type="text" placeholder="Muallif" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <button onClick={qoshish}>Qo'shish</button>
            <button onClick={clear}>clear</button>
      </div> */}

    <div style={{maxWidth:"600px", margin:"50px auto", textAlign:"center"}} id='app' >
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

        {/* <button 
        onClick={createQ}  
        style={{
          background:"black",
          color:"white",
          width:"120px",
          height:"60px",
          borderRadius:"30px",
          fontSize:"15px",
          fontWeight:"bold"
        }}>Hikmat yaratish</button> */}
    </div>
  )
}

export default App
