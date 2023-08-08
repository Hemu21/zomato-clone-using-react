import "./collectItems.css";
function CollectItems(props){
    return (
        <div>
            <div className="collectMain">
            <img className='Image' src={props.image} alt='collect' />
            <p className='Name'>{props.name}</p>
            <p className="Detail" >{props.detail} <i className="fa-solid fa-caret-right" style={{marginTop:"3px"}}></i>
            </p>
        </div>
        </div>
    ); 
}

export default CollectItems;