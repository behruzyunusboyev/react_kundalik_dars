import github_icon from "../pages/github_icon.jpg"
import email_icon from "../pages/email_icon.jpg"
import tg_icon from "../pages/tg_icon.jpg"
import "../pages/styles/contact.css"
function Cuntact(){
    return(
        <div className="cuntact_div" style={{marginTop:'70px'}}>
            <h1>Men bilan aloqa</h1>
            <div className="yollar">
                <img src={github_icon} alt="github_icon" />
                <h1>Git Hub:</h1>
                <p>behruzyunusboyev</p>
            </div>
            <div className="yollar">
                <img src={email_icon} alt="email_icon" />
                <h1>Email:</h1>
                <p>behruzyunusboyev9@gmail.com</p>
            </div>
            <div className="yollar">
                <img src= {tg_icon} alt="" />
                <h1>Telegram:</h1>
                <p>@Be1ruz_1310</p>
            </div>
        </div>
    )
}
export default Cuntact