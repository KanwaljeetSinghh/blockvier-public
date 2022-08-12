import { useRef } from "react";
import ArrowDown from '../icons/Arrow-Down';
function Accordian(props){
    
    const accord=useRef(null);
    function handler(){
        accord.current.classList.toggle("active");
    }
    return (
        <div ref={accord} className={`accordian d-flex d-flex-column border rounded pt-3 pb-3 pr-2 pl-2 ${props.classes}`}>
            <div  className='d-flex d-align-center d-justify-space-between' onClick={handler}>
                <h5 className='secondary-font f-600 m-0'>{props.title}</h5>
                <ArrowDown color="#000000" ></ArrowDown>
            </div>
            {props.children}
        </div>
      
        );
}
export default Accordian;