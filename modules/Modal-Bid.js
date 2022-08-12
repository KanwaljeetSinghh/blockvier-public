import styles from './css/modal.module.css';
import Etherium from '../icons/Etherium';
import Dot from '../icons/Dot';
import EtheriumSmall from '../icons/Etherium-Small';
function ModalBid(props){
    if(props.type==0)
    {
        return (
            <div className={`${styles["modal-container"]}`}>
                <div className={`${styles["modal-bid"]} `}>
                    <h3 className="f-600 l-35 mb-0">Place Bid</h3>
                    <div className="d-flex d-align-center mt-2">
                        <Etherium></Etherium>
                        <h2 className="f-800 text-primary mb-0 m-l-6 m-r-12">0.002</h2>
                        <Dot></Dot>
                        <h4 className="f-600 text-light-grey mb-0 m-l-12">$ 2,388.5</h4>
                    </div> 
                    <div className="d-flex d-align-center mt-2">
                        <h6 className='f-700 l-22 mr-1 mb-0'>Original Bid:</h6>
                        <EtheriumSmall></EtheriumSmall>
                        <h6 className="f-700 l-22 text-grey mb-0 m-l-6 m-r-12">0.002</h6>
                        <Dot></Dot>
                        <h6 className="f-700 l-22 text-grey mb-0 m-l-12">$ 2,388.5</h6>
                    </div> 
                    <div className='d-flex d-align-center bg-smoke border rounded-20 mt-4 m-0 p-0'>
                        <select>
                            <option>USD</option>
                            <option>ETH</option>
                        </select>
                        <input type="text" placeholder='0.000'></input>
                    </div>
                    <button type="submit" className='btn btn-modal mt-4' onClick={props.handler}>Place Bid</button>
                </div>
            </div>
        );
    }
    if(props.type==1)
    {
        return (
            <div className={`${styles["modal-container"]}`}>
                <div className={`${styles["modal-bid"]} d-flex d-flex-column d-align-center`}>
                    <img src="images/success.png"/>
                    <h3 className='f-600 l-35  mt-3'>Bid Placed for</h3>
                    <h3 className='f-800 l-40 text-primary'>ETH 0.004</h3>
                    <button type="submit" className='btn btn-default-width btn-primary mt-4' onClick={props.handler}>Okay</button>
                </div>
            </div>
        );
    }
}
export default ModalBid;