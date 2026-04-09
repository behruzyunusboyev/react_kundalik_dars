import './Cards.css'

function Cards(card){
    return(
        <div id='CardsDiv' style={{
        }}>
            <img id='CardsImg' src={card.rasm} alt="foydalanuvchi" />
            <h3>Ism: {card.ism}   </h3>
            <p> Kasbi: {card.kasb}</p>
        </div>
    )
}
export default Cards;