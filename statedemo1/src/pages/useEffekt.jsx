import { useEffect } from "react";
import { useState } from "react";
function Effet(){
        const [name, setname] = useState("Mehmon");

        useEffect(() => {
            document.title ='xush kelibsiz' + name
            console.log("useEffect ishladi")
        }, [name]);
    return(
        <div style={{padding:"20px"}}>
        <h1>salom {name}</h1>
        <input type="text"
        onChange={(e) => setname(e.target.value)}
        placeholder="Ismingizni kiriting"
         />
         <p>Brauzer tepasiga tab ga etibor bering</p>
        </div>
    )
}
export default Effet;