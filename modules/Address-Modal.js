import ModalBig from './ModalBig';
import styles from '../modules/css/modal.module.css';

export default function AddressModal(){
    return (
        <ModalBig modal="modal-big">
            <div className="d-flex d-flex-column">
                <h3 className='f-600 '>Add address</h3>
                <h6 className='text-danger f-500 '>*Required fields</h6>
                <label>House number or Building name<span className='text-danger'>*</span></label>
                <input type="text" placeholder='select'/>
                <div className={`${styles["flex-input"]}`}>
                    <div className="">
                        <label>Area,Road name or Colony<span className='text-danger'>*</span></label>
                        <input type="text" className="m-t-6" placeholder='Enter your name'/>
                    </div>
                    <div className="">
                        <label>street<span className='text-danger'>*</span></label>
                        <input type="text" className="m-t-6" placeholder='Enter your street'/>
                    </div>
                </div>
                <div className={`${styles["flex-input"]}`}>
                    <div className="">
                        <label>City<span className='text-danger'>*</span></label>
                        <input type="text" className="m-t-6" placeholder='Enter your city'/>
                    </div>
                    <div className="">
                        <label>Zip Code<span className='text-danger'>*</span></label>
                        <input type="text" className="m-t-6" placeholder='Enter your zip code'/>
                    </div>
                </div>
                <label>Any Special instructions</label>
                <textarea placeholder='Please provide instructions to your courier service, if any' rows="2"/>
                <h5 className="f-400 text-grey secondary-font"><b >Note: </b>In case your address is not properly found or data inaccurate, your order will be cancelled and your money will be refunded.</h5>
                <buttton className="btn btn-modal btn-primary secondary-font">Continue</buttton>
            </div>
        </ModalBig>
    );
}