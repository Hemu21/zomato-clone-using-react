import CollectItems from "../diningout/CollectItems";
import data from "../diningout/data/collect.json";
import DiningCard from "../diningout/diningCard";
import DiningOffCard from "../diningout/diningOffCard";
import data2 from "./data/nightitem.json";
function NightLife(){
    return (
        <div >
            <h1 style={{margin:"10px"}}>Collections</h1>
            <h3 style={{margin:"10px"}}>Explore curated lists of top restaurants, cafes, pubs, and bars in Hyderabad, based on trends</h3>
            <div className="collectMainH">
                {data.map((ele)=>ele.id===2?<div className="collectitem"><CollectItems key={ele.id} image={ele.image} name={ele.name} detail={ele.number} /></div>:console.log())}
            </div>
            <div  >
                <img className="largeimg" src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png" alt="large" />
            </div>
            <h1 style={{margin:"8px"}}>Nightlife Restaurants in Hyderabad</h1>
        <br/>
        <div className="ditems">
            {data2.map((ele)=>ele.offer===" "?<div className="dcarditem"><DiningOffCard key={ele.id} image={ele.image}
                name={ele.name} details={ele.details} rating={ele.rating} 
                price={ele.price} time={ele.time} /></div>:
                 <div className="dcarditem"><DiningCard key={ele.id} image={ele.image}
                offer={ele.offer} name={ele.name} details={ele.details} rating={ele.rating} 
                price={ele.price} time={ele.time} /></div>)}
        </div>
        </div>    
    );
}

export default NightLife