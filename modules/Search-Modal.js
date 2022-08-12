import ModalBig from './ModalBig';
import styles from '../modules/css/modal.module.css';
import TimerColored from '../icons/Timer-Colored';
export default function SearchModal(props){
    return (
       
        <div className={`d-flex d-flex-column  ${styles["search-modal"]}`} onClick={props.handler}>
            <h6 className='f-800'>Search results</h6>
            <div className='d-flex d-align-center'>
                <div className={`${styles["circle"]}`}></div>
                <h5 className="f-400 mb-0">Louis Vuiton  Submarine 17E Watch</h5>
            </div>
            <div className='d-flex d-align-center mt-1'>
                <div className={`${styles["circle"]}`}></div>
                <h5 className="f-400 mb-0">Louis Vuiton  Submarine 17E Watch</h5>
            </div>
            <div className='d-flex d-align-center mt-1'>
                <div className={`${styles["circle"]}`}></div>
                <h5 className="f-400 mb-0">Louis Vuiton  Submarine 17E Watch</h5>
            </div> 
            <h6 className='f-800 mt-2'>Recent searches</h6>
            <div className='d-flex d-align-center'>
                <div className={`${styles["circle"]}`}></div>
                <h5 className="f-400 mb-0">Louis Vuiton  Submarine 17E Watch</h5>
            </div>
            <div className='d-flex d-align-center mt-1'>
                <div className={`${styles["circle"]}`}></div>
                <h5 className="f-400 mb-0">Louis Vuiton  Submarine 17E Watch</h5>
            </div>
            <div className='d-flex d-align-center mt-1'>
                <div className={`${styles["circle"]}`}></div>
                <h5 className="f-400 mb-0">Louis Vuiton  Submarine 17E Watch</h5>
            </div> 
        </div>
    )
}