import ModalBig from './ModalBig';
import styles from '../modules/css/modal.module.css';
import Truck from '../icons/Truck';
import Timer from '../icons/Timer';
import TimerColored from '../icons/Timer-Colored';
export default function OrderPlacedModal(){
    return (
        <ModalBig modal="modal-big">
            <div className="d-flex d-flex-column">
                <TimerColored></TimerColored>
                <h3 className='f-600 mt-2'>Your Order has been Placed</h3>
                <h5 className='f-600 secondary-font'>ID: 0192837476510103</h5>
                <div className='d-flex d-align-center m-t-4'>
                    <Truck></Truck>
                    <h6 className='f-700 m-l-12 mb-0'>Shipping</h6>
                </div>
                <h6 className='f-500 mt-1 secondary-font'>Charges around USD 49.99 or ETH 0.00021</h6>
                <div className='d-flex d-align-center'>
                    <Timer></Timer>
                    <h6 className='f-700 m-l-12 mb-0'>Delivery</h6>
                </div>
                <h6 className='f-500 mt-1 secondary-font'>Estimated between Mon, May 9 and Thu, Jun 9</h6>
                <div className='d-flex d-align-center gap-2 mt-3'>
                    <buttton className="btn btn-default-width btn-primary  secondary-font">Back to Marketplace</buttton>
                    <buttton className="btn  btn-large btn-secondary secondary-font">go to orders</buttton>
                </div>
            </div>
        </ModalBig>
    );
}