/*
    Pass a data list
*/

import { useRef } from "react";
import ArrowDownOutline from "../icons/Arrow-Outline-Down";

function DropDown(props){
    const dropDown = useRef(null);

    function handler(){
        dropDown.current.classList.toggle("active");
    }

    return(
        <>
            <h6 className={`${props.labelClass}`}>{props.title}</h6>
            <ul ref={dropDown} className="drop__down-list rounded border m-0 p-0 user-select-none">
                <li className="drop__down-list-placeholder" onClick={handler}>
                    {props.placeholder}
                    <ArrowDownOutline color="#9D9D9D"></ArrowDownOutline>
                </li>
                <li> Data Item 1 </li>
                <li> Data Item 1 </li>
                <li> Data Item 1 </li>
                <li> Data Item 1 </li>
                <li> Data Item 1 </li>
                <li> Data Item 1 </li>
            </ul>
        </>
    )
}

export default DropDown;