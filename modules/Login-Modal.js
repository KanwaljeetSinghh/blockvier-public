import ModalBig from "./ModalBig";
import styles from "../modules/css/modal.module.css";
import Facebook from "../icons/facebook";
import Google from "../icons/Google";
export default function LoginModal(){
    return (
        <ModalBig modal="modal-big">
            <div className="d-flex d-flex-column secondary-font">
                <div className="d-flex d-align-center">
                    <h2 className="f-600 ">Welcome back</h2>
                </div>
                <label>Email or Username</label>
                <input type="text" placeholder="Enter your email or username"/>
                <label>Password</label>
                <input type="password" placeholder="Enter your password"/>
                <h6 className="f-700 mb-0  text-primary d-flex d-justify-end">Forgot password?</h6>
                <button className="btn btn-default-width btn-primary mt-4">Login</button>
                               
                <div className="d-flex d-align-center mt-5" >
                    <div className={`${styles["border-line"]}`}></div>
                    <span className={`d-flex d-justify-center ${styles["span-content"]}`}>OR</span>
                    <div className={`${styles["border-line"]}`}></div>
                </div>
                <div className="d-flex d-align-center mt-5 d-justify-space-between " >
                    <div className="d-flex d-align-center bg-primary rounded " style={{background:"#1877F2",padding:"14px 55px 14px 17.5px"}}>
                        <Facebook></Facebook>
                        <h5 className="f-600 mb-0 ml-2 text-white secondary-font">Login with Facebook</h5>
                    </div>
                    <div className="d-flex bg-primary d-align-center rounded p-2" style={{background:"#FF3D00",padding:"14px 55px 14px 17.5px"}}>
                        <Google></Google>
                        <h5 className="f-600 mb-0 ml-2 text-white secondary-font">Login with Google</h5>
                    </div>
                </div>
                <h5 className="f-600 text-grey mt-3 secondary-font">Didn't have an account,yet?<span className="text-primary">Create account</span></h5>
            </div>
        </ModalBig>
    );
}