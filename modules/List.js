import { useRef } from 'react';
import $ from 'jquery';
import styles from './css/list.module.css';

function List(props){
    
    const handler = (e) =>{
        $("."+styles["list__wrapper"]+" li").removeClass(styles["active"]);
        $(e.target).addClass(styles["active"]);
    }
    return (
        <ul className={`${props.classes} ${styles["list__wrapper"]}`} >
            
            <li className={`cursor-pointer mt-3 ${styles["active"]}`} onClick={handler}>Buyer FAQs</li>
            <li className={`cursor-pointer mt-3`} onClick={handler}>Seller FAQs</li>
            <li className={`cursor-pointer mt-3`} onClick={handler}>Payment FAQs</li>
            <li className={`cursor-pointer mt-3`} onClick={handler}>How it Works?</li>
        </ul>
    )
}

export default List;