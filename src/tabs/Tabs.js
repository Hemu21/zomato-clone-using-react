import DiningOut from "./diningout/DiningOut";
import Delivery from "./delivery/delivery";
import NightLife from "./Nightlife/NightLife";

function Tabs(props){
    console.log(props.opt);
    var tag = <Delivery />
    if(props.opt===1){
        tag = <Delivery />
    }else if(props.opt===2){
        tag = <DiningOut />
    }else{
        tag = <NightLife />
    }

    return (
        <>{tag}</>
    );
}

export default Tabs;