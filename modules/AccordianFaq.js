import { useRef } from "react";
import ArrowDown from '../icons/Arrow-Down';
function AccordianFaq(props){
    
    const accord=useRef(null);
    function handler(){
        accord.current.classList.toggle("active");
    }
    return (
        <div ref={accord} className={`accordian-faq d-flex d-flex-column  ${props.classes}`}>
            <div  className='d-flex d-align-center d-justify-space-between' onClick={handler}>
                <h5 className='secondary-font f-600 mb-0'>{props.title}</h5>
                <ArrowDown color="#9D9D9D" ></ArrowDown>
            </div>
            {props.children}
        </div>
      
        );
}
export default AccordianFaq;