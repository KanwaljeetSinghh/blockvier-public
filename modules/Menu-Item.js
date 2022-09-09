import { useEffect, useState } from 'react';
import Popup from './Popup-List';
import ArrowDown from '../icons/Arrow-Down';


function MenuItem(props){
    const [hasMount, setHasMount] = useState(false)
    const [active, setActive] = useState(false);

    function activeHandler(e){
        setActive(prev => !prev);
    }
    if(!hasMount){
        return <></>
    }
    useEffect(()=>{
        setHasMount(true);
    },[])
    return (
        <li className="menu__item level-1 pl-2 pr-2 p-relative">
            <a href="#" className={`d-flex p-relative menu__link f-600 ${active? "text-secondary active-menu":"text-grey"}`} onClick={activeHandler}>
                {props.value}
                {props.childs==="true" && <ArrowDown color={`${active? "#000":"#4c4c4c"}`}></ArrowDown>}
            </a>
            {props.childs==="true" && active && <Popup type="0"></Popup>}
        </li>
    )
}

export default MenuItem;