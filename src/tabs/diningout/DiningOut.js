import { useState } from "react";
import CollectItems from "./CollectItems";
import data from "./data/collect.json";
import "../common.css";
import "./diningout.css";
import data2 from "./data/diningitems.json";
import DiningCard from "./diningCard";
import DiningOffCard from "./diningOffCard";

function DiningOut(){
    const [cnum, setCNum] = useState(1)
    const [clnum, setCLNum] = useState(4)
    const [Cdir, setCDir] = useState("front")

    return (
        <div >
            <h1 style={{margin:"10px"}}>Collections</h1>
            <h3 style={{margin:"10px"}}>Explore curated lists of top restaurants, cafes, pubs, and bars in Hyderabad, based on trends</h3>
        <div className="collectMainH">    
        {Cdir==="front"?
        data.map((ele)=>ele.id>=cnum?<div className="collectitem"><CollectItems key={ele.id} image={ele.image} name={ele.name} detail={ele.number} /></div>
        :console.log()):
        data.map((ele)=>ele.id>=cnum?
        <div className="collectitem"><CollectItems key={ele.id} image = {ele.image} name={ele.name} detail={ele.number}/></div>: 
        console.log(ele.id))}
        </div>
            {cnum>=2 ?
            <button id="CLBtn" className="CLBtns" onPointerLeave={()=>{document.getElementById("CLBtn").className="CLBtns"}} onClick={()=>{document.getElementById("CLBtn").className="CLBtns1"; setCNum(cnum-1);setCLNum(clnum+1);setCDir("")}}><i className="fa-solid fa-chevron-left" style={{fontSize:"20px"}} ></i></button>
            :console.log(cnum)}
            {clnum!==0 ?
            <button id="CBtn" className="CBtns" onPointerLeave={()=>{document.getElementById("CBtn").className="CBtns"}} onClick={()=>{document.getElementById("CBtn").className="CBtns1"; setCNum(cnum+1);setCLNum(clnum-1);setCDir("front")}}><i className="fa-solid fa-chevron-right" style={{fontSize:"20px"}} ></i></button>
            :console.log(cnum)}
        <div  >
            <img className="largeimg" src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png" alt="large" />
        </div>
        <h1 style={{margin:"8px"}}>Trending dining restaurants in Hyderabad</h1>
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

export default DiningOut;