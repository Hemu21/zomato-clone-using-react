import './diningcard.css'

function DiningCard(props){

    return (
        <div className="dcardMain">
            <img className="dcardImage" src={props.image} alt="item" />
            <p id="diningcardoff" className='dcardOffer'> <i className="fa-solid fa-crown"></i> {props.offer}</p>
            <div style={{width:"310px"}}>
            <h6 className='dcardName' >{props.name}</h6>
            <div className='dcardRating'>
                <p className='dcardRatingt'>{props.rating}</p>
                <div className='dcardStar'>
                <i className="fa-solid fa-star" ></i>
                </div>
            </div>
            </div>
            <br/>
            <div style={{width:"310px"}}>
            <p className='dcardDetail'>{props.details}</p>
            <div className='dcardPrice'>
                <p>{props.price}</p>
            </div>
            </div>
            <div className='dcardTime'>
                <h6>{props.time}</h6>
            </div>
        </div>
    );
}
export default DiningCard;