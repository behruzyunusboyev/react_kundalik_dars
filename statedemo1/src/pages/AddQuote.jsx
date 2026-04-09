import { useState } from "react";
function AddQuote() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    
    return(
        <div>
            <input type="text" placeholder="Hikmat" value={quote} onChange={(e) => setQuote(e.target.value)} />
            <input type="text" placeholder="Muallif" value={author} onChange={(e) => setAuthor(e.target.value)} />
            {/* <button style={{ background:"blue", color:"white", width:"100px", height:"40px", borderRadius:"30px", 
            fontSize:"15px", fontWeight:"bold"}}>  Qo'shish </button> */}
        </div>
    )
}
export default AddQuote