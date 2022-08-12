import { useState } from 'react';
import styles from './css/subscribe-form.module.css';
import EmailIcon from '../icons/Email';


function SubscribeForm(){

    const [email,setEmail] = useState('')

    function emailChangeHandler(e){
        setEmail(e.target.value)
    }
    return(
        <div className={`d-flex d-flex-row d-align-center ${styles['email-form-section']}`}>
            <EmailIcon></EmailIcon>

            <form className={`d-flex d-align-center d-justify-space-between ${styles['email-form']} `}>
                <input type="email" placeholder="Enter your email" value={email} onChange={emailChangeHandler} />
                {email != "" && <input type="submit" value="Subscribe" className={`${styles['btn-form']}`} />}
            </form>
        </div>
    )
}

export default SubscribeForm;