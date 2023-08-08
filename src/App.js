import './App.css';
import Footer from './footer/footer';
import Header from "./header/Header";
import Tabs from './tabs/Tabs';
import { useState } from 'react';

function App() {
  const [val,setVal] = useState(1);
  function navChange(id,n){
    setVal(n);
    for(var i=1;i<4;i++){
      if(i!==n){
        document.getElementById("navButton"+i).className="navItems";
        document.getElementById('logo'+i).className = "logo1";
        document.getElementById('navContent'+i).className = "navContent";
      }
    }
    if(n===1){
      document.getElementById('logo'+n).className = "logo";
    }else{
      document.getElementById('logo'+n).className = "logo2";
    }
    
    document.getElementById('navContent'+n).className = "navContent1";
    document.getElementById(id).className = 'navItems1';

  }
  return (
    <div>
      <Header />
      <nav className='navbar'>
        <button id="navButton1" className='navItems1' onClick={()=>{navChange('navButton1',1)}}><div id='logo1' className='logo'><img className='navLogo' src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" alt="Delivery" /></div><h1 id="navContent1" className='navContent1'>Delivery</h1></button>
        <button id="navButton2" className='navItems' onClick={()=>{navChange('navButton2',2)}}><div id='logo2' className='logo1'><img className='navLogo' src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png" alt="DiningOut" /></div><h1 id="navContent2" className='navContent'>Dining Out</h1></button>
        <button id="navButton3" className='navItems' onClick={()=>{navChange('navButton3',3)}}><div id='logo3' className='logo1'><img className='navLogo' src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png" alt="NightLife" /></div><h1 id="navContent3" className='navContent'>Nightlife</h1></button>
      </nav>
      <Tabs opt={val} />
      <Footer />
    </div>
  );
}

export default App;
