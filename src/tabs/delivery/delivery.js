import "./delivery.css";
import InspireItems from "./inspireItems";
import { useState } from "react";
import data from "./data/inspireItems.json";
import data1 from "./data/topBrand.json";
import MyCards from "./myCards";
import data2 from "./data/allitems.json";

function Delivery(){
    const [num, setNum] = useState(1)
    const [lnum, setLNum] = useState(6)
    const [dir, setDir] = useState("front")
    const [tnum, setTNum] = useState(1)
    const [tlnum, setTLNum] = useState(4)
    const [tdir, setTDir] = useState("front")
    return (
        <>
        <div className="inspireMain">
            <div >
            <h3 className="inspire" >Inspiration for your first order</h3>
            {dir==="front"?
            data.map((ele)=>ele.id>=num?
            <InspireItems key={ele.id} image = {ele.image} name={ele.name} />: 
            console.log(ele.id)):
            data.map((ele)=>ele.id>=num?
            <InspireItems key={ele.id} image = {ele.image} name={ele.name} />: 
            console.log(ele.id))}
            </div>
            <div>
            {num>=2 ?
            <button id="nextLBtn" className="Lbtns" onPointerLeave={()=>{document.getElementById("nextLBtn").className="Lbtns"}} onClick={()=>{document.getElementById("nextLBtn").className="Lbtns1"; setNum(num-1);setLNum(lnum+1);setDir("")}}><i className="fa-solid fa-chevron-left" style={{fontSize:"20px"}} ></i></button>
            :console.log(num)}
            {lnum!==0 ?
            <button id="nextBtn" className="btns" onPointerLeave={()=>{document.getElementById("nextBtn").className="btns"}} onClick={()=>{document.getElementById("nextBtn").className="btns1"; setNum(num+1);setLNum(lnum-1);setDir("front")}}><i className="fa-solid fa-chevron-right" style={{fontSize:"20px"}} ></i></button>
            :console.log(num)}
            </div>
        </div>
        <div className="inspireMain">
        <div >
        <h3 className="inspire" >Top brands for you</h3>
        {tdir==="front"?
        data1.map((ele)=>ele.id>=tnum?
        <InspireItems key={ele.id} image = {ele.image} name={ele.name} />: 
        console.log(ele.id)):
        data1.map((ele)=>ele.id>=tnum?
        <InspireItems key={ele.id} image = {ele.image} name={ele.name} />: 
        console.log(ele.id))}
        </div>
        <div>
        {tnum>=2 ?
        <button id="topNextLBtn" className="Lbtns" onPointerLeave={()=>{document.getElementById("topNextLBtn").className="Lbtns"}} onClick={()=>{document.getElementById("topNextLBtn").className="Lbtns1"; setTNum(tnum-1);setTLNum(tlnum+1);setTDir("")}}><i className="fa-solid fa-chevron-left" style={{fontSize:"20px"}} ></i></button>
        :console.log(num)}
        {tlnum!==0 ?
        <button id="topNextBtn" className="btns" onPointerLeave={()=>{document.getElementById("topNextBtn").className="btns"}} onClick={()=>{document.getElementById("topNextBtn").className="btns1"; setTNum(tnum+1);setTLNum(tlnum-1);setTDir("front")}}><i className="fa-solid fa-chevron-right" style={{fontSize:"20px"}} ></i></button>
        :console.log(num)}
        </div>
    </div>
    <div className="items">
            <div >
            <h1 className="inspire" >Delivery Restaurants in Hyderabad</h1>
                {data2.map((ele)=><div className="carditem"><MyCards key={ele.id} image={ele.image}
                offer={ele.offer} name={ele.name} details={ele.details} rating={ele.rating} 
                price={ele.price} time={ele.time} /></div>)}
            </div>
    </div>
    </>
    );
}
export default Delivery;