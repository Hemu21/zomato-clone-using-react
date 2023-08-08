import './inspire.css';


function inspireItems({image,name}){
    return (
        <div style={{display:"inline-flex"}}>
        <div>
            <img className='image' src={image} alt='Biryani' />
            <p className='name'>{name}</p>
        </div>
        </div>
    );
}

export default inspireItems;