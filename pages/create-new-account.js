import SectionHeading from "../modules/Section-Heading";
import styles from '../modules/css/create-account.module.css';
import ImageIconaccount from "../icons/Image-icon-account";
import Facebook from "../icons/facebook";
import Google from "../icons/Google";
import { useState,useEffect,useRef } from "react";


export default function CreateNewAccount(){
    
    const tabRef = useRef();
    const[tab,setTab] = useState("personal");
    const tabHandler = (e) => {
        tabRef.current.querySelectorAll("div").forEach((item) => {
            item.classList.remove(styles.active)
        });
        e.currentTarget.classList.add(styles.active)
        setTab(e.currentTarget.getAttribute("value"))
    }
    return (
        <div className="container">
            <div className={`col-6 offset-3 d-flex d-flex-column ${styles["create-account"]}`}>
                <SectionHeading title="Create" highlighted-title="new account"></SectionHeading>
                <h6 className="f-500 l-22 text-danger secondary-font">*Required fields</h6>
                <h4 className="f-600 l-32 mb-0 mb-3 secondary-font">Type of account<span className="text-danger">*</span></h4>
                <div ref={tabRef} className="bg-smoke rounded p-1 d-flex d-justify-space-between mb-4">
                    <div value="personal" className={`d-flex tab ${styles["personal"]} ${styles['active']}`} onClick={tabHandler}>
                        <div className={`${styles["circle"]}`}></div>
                        <div>
                            <h5 className="f-600 mb-0 secondary-font">Personal Details</h5>
                            <h6 className="f-500 mb-0 secondary-font">Individual account</h6>
                        </div>
                    </div>
                    <div value="business" className={`d-flex tab ${styles["business"]}`} onClick={tabHandler}>
                        <div className={`${styles["circle"]}`}></div>
                        <div>
                            <h5 className="f-600 mb-0 secondary-font">Business</h5>
                            <h6 className="f-500 mb-0 secondary-font">Organization account</h6>
                        </div>
                    </div>
                </div>
                {tab == "personal" && 
                <>
                    <label>Name<span className="text-danger">*</span></label>
                    <input type="text" placeholder="Alexander Payne"/>
                    <label>Email<span className="text-danger">*</span></label>
                    <input type="email" placeholder="Alien21@gmail.com"/>
                    <label>Password<span className="text-danger">*</span></label>
                    <input type="password" placeholder="Enter your password"/>
                    <label>Re-enter Password<span className="text-danger">*</span></label>
                    <input type="password" placeholder="Re-enter your password"/>
                    <label>Phone number<span className="text-danger">*</span></label>
                    <div className={`d-flex d-align-center bg-smoke rounded pl-2 ${styles["phone"]}`}>
                        <span className="f-500 font-18 l-25  secondary-font border-right pr-2">+91</span>
                        <input type="number" placeholder="Enter your number"/>
                    </div>
                    <label>Upload verification<span className="text-danger">*</span></label>
                    <h6 className="f-500 l-22 text-grey secondary-font mb-0">Accepted formats - Image: JPG, PNG, SVG, GIF ; Video: MP4, WEBM ; Audio: MP3, WAV</h6>
                    <div className={`border-dashed d-flex d-flex-column d-align-center bg-smoke ${styles["upload-section"]}`}>
                        <ImageIconaccount></ImageIconaccount>
                        <h6 className="f-500 text-grey mb-0 mt-3 secondary-font">Drag & drop file</h6>
                        <h6 className="f-500 secondary-font mb-0">or browse media on your device</h6>
                    </div>
                    <div className="d-flex d-align-center">
                        <input type="checkbox"/>
                        <h6 className="f-700 text-grey secondary-font m-0 m-l-12">By signing up you agree to our <span className="text-secondary">Terms of Service</span> and <span className="text-secondary">Privacy Policy</span>.</h6>
                    </div>
                    <button className="btn btn-default-width btn-primary mt-3">Signup</button>
                    <div className="d-flex d-align-center mt-5" >
                        <div className={`${styles["border-line"]}`}></div>
                        <span className={`d-flex d-justify-center secondary-font ${styles["span-content"]}`}>OR</span>
                        <div className={`${styles["border-line"]}`}></div>
                    </div>
                    <div className="d-flex d-align-center mt-5 d-justify-space-between " >
                        <div className="d-flex d-align-center bg-primary rounded " style={{background:"#1877F2",padding:"16.5px 155px 16.5px 17.5px"}}>
                            <Facebook></Facebook>
                            <h5 className="f-600 mb-0 ml-2 text-white secondary-font">Signup with Facebook</h5>
                        </div>
                        <div className="d-flex bg-primary d-align-center rounded p-2" style={{background:"#FF3D00",padding:"16.5px 155px 16.5px 17.5px"}}>
                            <Google></Google>
                            <h5 className="f-600 mb-0 ml-2 text-white secondary-font">Signup with Google</h5>
                        </div>
                    </div>
                    <h5 className="f-600 text-grey mt-3 secondary-font">Already have an account?<span className="text-primary">Login here</span></h5>
                </>}
                {tab == "business" &&
                <>
                <label>Legal Company Name<span className="text-danger">*</span></label>
                <input type="text" placeholder="Alexander Payne"/>
                <label>Email<span className="text-danger">*</span></label>
                <input type="email" placeholder="Alien21@gmail.com"/>
                <label>Password<span className="text-danger">*</span></label>
                <input type="password" placeholder="Enter your password"/>
                <label>Re-enter Password<span className="text-danger">*</span></label>
                <input type="password" placeholder="Re-enter your password"/>
                <label>Phone number<span className="text-danger">*</span></label>
                <div className={`d-flex d-align-center bg-smoke rounded pl-2 ${styles["phone"]}`}>
                    <span className="f-500 font-18 l-25  secondary-font border-right pr-2">+91</span>
                    <input type="number" placeholder="Enter your number"/>
                </div>
                <label>Upload verification<span className="text-danger">*</span></label>
                <h6 className="f-500 l-22 text-grey secondary-font mb-0">Accepted formats - Image: JPG, PNG, SVG, GIF ; Video: MP4, WEBM ; Audio: MP3, WAV</h6>
                <div className={`border-dashed d-flex d-flex-column d-align-center bg-smoke ${styles["upload-section"]}`}>
                    <ImageIconaccount></ImageIconaccount>
                    <h6 className="f-500 text-grey mb-0 mt-3 secondary-font">Drag & drop file</h6>
                    <h6 className="f-500 secondary-font mb-0">or browse media on your device</h6>
                </div>
                <div className="d-flex d-align-center">
                    <input type="checkbox"/>
                    <h6 className="f-700 text-grey secondary-font m-0 m-l-12">By signing up you agree to our <span className="text-secondary">Terms of Service</span> and <span className="text-secondary">Privacy Policy</span>.</h6>
                </div>
                <button className="btn btn-default-width btn-primary mt-3">Signup</button>
                <div className="d-flex d-align-center mt-5" >
                    <div className={`${styles["border-line"]}`}></div>
                    <span className={`d-flex d-justify-center secondary-font ${styles["span-content"]}`}>OR</span>
                    <div className={`${styles["border-line"]}`}></div>
                </div>
                <div className="d-flex d-align-center mt-5 d-justify-space-between " >
                    <div className="d-flex d-align-center bg-primary rounded " style={{background:"#1877F2",padding:"16.5px 155px 16.5px 17.5px"}}>
                        <Facebook></Facebook>
                        <h5 className="f-600 mb-0 ml-2 text-white secondary-font">Signup with Facebook</h5>
                    </div>
                    <div className="d-flex bg-primary d-align-center rounded p-2" style={{background:"#FF3D00",padding:"16.5px 155px 16.5px 17.5px"}}>
                        <Google></Google>
                        <h5 className="f-600 mb-0 ml-2 text-white secondary-font">Signup with Google</h5>
                    </div>
                </div>
                <h5 className="f-600 text-grey mt-3 secondary-font">Already have an account?<span className="text-primary">Login here</span></h5>
            </>}
            </div>
        </div>
    );
}