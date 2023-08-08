import './card.css'

function MyCards(props){
    return (
        <div className="cardMain">
            <img className='cardImage' src={props.image} alt="item" />
            <p className='cardOffer'>{props.offer}</p>
            <div style={{width:"310px"}}>
            <h6 className='cardName' >{props.name}</h6>
            <div className='cardRating'>
                <p className='cardRatingt'>{props.rating}</p>
                <div className='cardStar'>
                <i className="fa-solid fa-star" ></i>
                </div>
            </div>
            </div>
            <br/>
            <div style={{width:"310px"}}>
            <p className='cardDetail'>{props.details}</p>
            <div className='cardPrice'>
                <p>{props.price}</p>
            </div>
            </div>
            <div className='cardTime'>
                <h6>{props.time}</h6>
            </div>
        </div>
    );
}
export default MyCards;