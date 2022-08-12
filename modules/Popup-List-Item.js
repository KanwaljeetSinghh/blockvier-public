import { useState } from 'react';
import Car from "../icons/Car";
import styles from './css/popup.module.css';

function PopupListItem(props){
    const [hover,setHover] = useState(false);
    
    function hoverOnHandler(){
        setHover(true);
    }

    function hoverOutHandler(){
        setHover(false);
    }

    return (
        <a href="#" className={`d-flex d-align-center f-600 text-secondary ${styles["popup-list-item"]} ${hover && "bg-smoke" }`} onMouseOver={hoverOnHandler} onMouseOut={hoverOutHandler}> 
            <Car circle="true" height="48px" width="48px" color="#000"></Car>
            {props.value}
        </a>
    )
}

export default PopupListItem;