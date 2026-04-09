import { useState } from "react";

function LiveInput(){
    const [matn, setMatn] = useState("");
    return(
        <div style={{ width:"250px", border:"1px solid blue", borderRadius:"10px", display:"flex", flexDirection:"column", alignItems:"center", 
        justifyContent:"center", gap:"0px"}}>
            <h3>jonli matn yozish</h3>
            <input 
                type="text" 
                value={matn} 
                onChange={(e) => setMatn(e.target.value)} 
                placeholder="Matn kiriting..."
                style={{backgroundColor:"white", fontFamily:"italic", border:"1px solid black", borderRadius:"5px", color:"black"}}
            />
            <h4 style={{color:"green"}}>Siz yozgan matn: {matn}</h4>
        </div>
    )
}
export default LiveInput;