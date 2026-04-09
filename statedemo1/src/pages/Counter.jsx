import { use, useState } from "react";

function Counter() {
    const [son, setSon] = useState(0);
    const h22= document.getElementById("h22");
    const error1 = document.querySelector(".error1");
    const oshirish = () => {
        setSon(son +1);
    }
    const kamaytrish = () => {
        if(son > 0){
            setSon(son -1);
        }else{
            error1.innerHTML = "Siz 0 dan kichik son kiritolmaysiz";
            h22.style.color = "red";
        }
    }
    const [daraja, drson] = useState(0);
    const dr1 = () => {
        drson(daraja + 1);
        
    }
    const daraja2 = () => {
        drson(daraja - 1);
    }
    return(
        <div id="divv" style={{border:"1px solid black", width:"400px",  display:"flex", flexDirection:"column", 
        alignItems:"center", justifyContent:"center" , borderRadius:"10px" ,}}>
            <h4 className="error1"></h4>
            <h2 style={{ color:"black", marginBottom:"30px"}} id="h22">hozirgi sanoq : {son}<sup>{daraja}</sup>={Math.pow(son, daraja)}</h2>
            <div className="btndiv" style={{ display:"flex" , width:"100%", height:"50px", alignItems:"center",justifyContent:"space-around"}}>
            <button onClick={oshirish}          style={{borderRadius:"10px", border:"none", width:"80px", height:"20px"}}>Oshirish</button>
            <button onClick={kamaytrish}        style={{borderRadius:"10px", border:"none", width:"80px", height:"20px"}}>kamaytrish</button>
            <button onClick={() => {setSon(0)}} style={{borderRadius:"10px", border:"none", width:"80px", height:"20px"}}>nollash</button>
            <button onClick={dr1}     >daraja(+)</button>
            <button onClick={daraja2} >daraja(-)</button>
            </div>
        </div>
    )
}
// onClick={daraja2}
export default Counter;