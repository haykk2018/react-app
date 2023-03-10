import starFillSvg from "../assets/star-fill.svg";
import starSvg from "../assets/star.svg";
import {useState} from "react";

const Star = (props) => {
    const [fill, setFill] = useState(true);
    const selected = () => setFill(!fill);

     return <img src={fill ? starFillSvg : starSvg} onClick={selected} height="35" width="38"/>
}

export default Star;