import ModalBig from './ModalBig';
import styles from '../modules/css/modal.module.css';
import EtheriumSmall from '../icons/Etherium-Small';
import Etherium from '../icons/Etherium';
export default function CheckOutModal(){
    return (
        <ModalBig modal="modal-big">
            <div className="d-flex d-flex-column">
                <h3 className="f-600">Checkout</h3>
                <div className='d-flex d-justify-space-between mt-2'>
                    <h5 className='f-600'>Item</h5>
                    <h5 className='f-600'>Subtotal</h5>
                </div>
                <div className='d-flex mt-2'>
                    <div className={`${styles["checkout-img"]}`}>
                        <img src="images/Collectable.png"/>
                    </div>
                    <div className='d-flex d-flex-column ml-2'>
                        <h3 className='f-300 mb-0'>2019-20 Panini Prizm Luka Samanic</h3>
                        <span className='f-800 font-16 l-22  mb-0 '>Seller : <span className='f-600 text-grey'>Alex Payne</span></span>
                    </div>
                    <div className='d-flex d-flex-column'>
                        <div className='d-flex d-align-center'>
                            <EtheriumSmall></EtheriumSmall>
                            <h5 className='f-800 text-grey secondary-font m-l-6 mb-0'>0.002</h5>
                        </div>
                        <h6 className='f-700 text-light-grey secondary-font m-t-6'>$ 2,388.5</h6>
                    </div>
                </div>
                <div className='border rounded-20 p-2 mt-4 d-flex d-justify-space-between'>
                    <h3 className='f-600 text-primary secondary-font'>Total</h3>
                    <div className='d-flex d-flex-column d-align-end'>
                        <div className='d-flex d-align-center'>
                            <Etherium></Etherium>
                            <h3 className='f-800 text-primary secondary-font m-l-6 mb-0'>0.002</h3>
                        </div>
                        <h5 className='f-600 text-light-grey secondary-font m-t-6'>$ 2,388.5</h5>
                    </div>
                </div>
                <div className="d-flex d-align-center mt-3">
                    <input type="checkbox"/>
                    <h6 className="f-700 text-grey secondary-font m-0 m-l-12">By checking this box, I agree to our <span className="text-secondary">Terms of Service</span>.</h6>
                </div>
                <button className='btn btn-primary btn-modal mt-5'>Checkout</button>
            </div>
        </ModalBig>
    );
}