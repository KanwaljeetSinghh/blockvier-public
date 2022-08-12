import { useState } from 'react';
import Favorite from '../icons/Favorite';
import Etherium from '../icons/Etherium';
import styles from './css/collectable-card.module.css';

function CollectableCard(props){

    const [favorite,setFavorite] = useState(false);

    function markFavorite(){
        setFavorite(prevCheck => !prevCheck)
    }

    return (
        <div className={`user-select-none d-flex d-flex-column rounded border`}>
            <div className={`d-flex d-align-center d-justify-center ${styles["collectable-card-image"]}`}>
                <img src={props.src} />
            </div>
            <div className='p-2'>
                <div className={`d-flex d-justify-space-between ${styles["collectable-card-title"]}`}>
                    <h5 className='f-600 secondary-font d-inline-flex m-0'> 2019 Panini Optic Basketball Purple Shoc... </h5>
                    <div className='cursor-pointer' onClick={markFavorite}>
                        <Favorite value={favorite}></Favorite>
                    </div>
                </div>

                <div className={`d-flex d-align-center ${styles["collectable-card-price"]}`}>
                    <h4 className='d-inline-flex d-align-center text-primary secondary-font m-0'>
                        <Etherium></Etherium>
                        0.002
                    </h4>
                    <h6 className='d-inline-flex secondary-font m-0 text-light-grey ml-2 p-relative'>$ 2,388.5</h6>
                </div>

                <div className={`d-flex d-align-center ${styles["collectable-card-bid"]}`}>
                    <h6 className='text-grey f-500 secondary-font'> bid ends in &nbsp; <span className='f-800'>2d:7h:30m:21s</span></h6>
                </div>
            </div>
        </div>
    )
}
export default CollectableCard;