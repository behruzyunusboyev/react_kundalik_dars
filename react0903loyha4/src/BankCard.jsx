import './BankCard.css'
function BankCard(props) {
    return (
        <div className="bankdiv">
            <nav className="name"> <h1>Bank</h1> <h2>{props.cardType}</h2> </nav>
            <div className="gold"></div>
            <div className="numbers"><h1>{props.number}</h1></div>
            <div className="date"><h3>{props.expiryDate}</h3></div>
            <div className="userdiv"><h3 className='user'>{props.userName}</h3></div>
        </div>
    )
}
export default BankCard