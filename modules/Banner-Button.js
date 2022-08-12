import Wallet from "../icons/Wallet";
import { useState } from 'react';
import Popup from './Popup-List';
import UserHeader from "../icons/User-header";
function BannerButton(props){

    const [active, setActive] = useState(false);
    const [hasMount, setHasMount] = useState(false)
    function activeHandler(e){
        setActive(prev => !prev);
    }
    if(!hasMount){
        return <></>
    }
    useEffect(()=>{
        setHasMount(true);
    },[])
    if(props.type==0){
    return (
        <a className={`mr-2 ml-2 ${props.button} btn-rounded btn-secondary`}> 
            {props.value} 
            
            <Wallet color="#000"></Wallet>
        </a>
    )}
    if(props.type==1){
        return (
            <a href="#" className={`d-flex  btn-rounded btn-secondary p-relative f-600 ${props.button}`} onClick={activeHandler}>
                <UserHeader color="#000"></UserHeader>
                {props.childs==="true" && active && <Popup type="2" handler={props.profileModal}></Popup>}

            </a>
        )}
}

export default BannerButton;