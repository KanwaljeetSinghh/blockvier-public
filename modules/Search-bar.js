import styles from './css/search-bar.module.css';
import Magnifier from '../icons/Magnifier';
import {useState} from 'react';
function SearchBar(props){
    const [keyword,setKeyword] = useState("");

    function keywordHandler(e){
        setKeyword(e.target.value)
    }
    return (

        <div className={`d-flex d-align-center ${styles['search-bar-wrapper']} ${props.classes} ${props.inputClass}`} onClick={props.handler}>
            <Magnifier></Magnifier>
            <form>
            <input type="text" placeholder={props.placeholder} value={keyword} onChange={keywordHandler} />
            </form>
        </div>
        
    )
}

export default SearchBar;