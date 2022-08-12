import ModalBig from './ModalBig';
import styles from '../modules/css/modal.module.css';
import TimerColored from '../icons/Timer-Colored';
export default function PurchaseSuccessModal(){
    return (
        <ModalBig modal="modal-small">
            <div className="d-flex d-flex-column d-align-center">
                <TimerColored></TimerColored>
                <h3 className='f-600 mt-2'>Purchase Successful</h3>
                <h5 className='f-600 secondary-font'>ID: 0192837476510103</h5>
                <buttton className="btn btn-default-width btn-primary mt-3 secondary-font">Back to Marketplace</buttton> 
            </div>
        </ModalBig>
    );
}