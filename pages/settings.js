import { useState,useRef } from "react";
import Setting from "../icons/Setting";
import Checkbox from "../modules/Check-Box";
import styles from '../modules/css/settings.module.css';
import Person from "../icons/person";
import ImageIcon from "../icons/Image-icon";
function Settings(){
    
    const tabRef = useRef();
    const[tab,setTab] = useState("account");
    const tabHandler = (e) => {
        tabRef.current.querySelectorAll("div").forEach((item) => {
            item.classList.remove(styles.active)
        });
        e.currentTarget.classList.add(styles.active)
        setTab(e.currentTarget.getAttribute("value"))
    }
    return(
        
    <form>
        <div className={`container pt-3 d-flex d-flex-wrap secondary-font`}>
            <div className="col-12 pr-2 d-flex d-align-center d-justify-space-between">
                <h1 className="font-40 f-400">Settings</h1>
                <a className="btn-big d-flex d-align-center d-justify-center rounded">Save Changes</a>
            </div>
            <div ref={tabRef} className="col-3 ">
                <div className={`d-flex d-align-center ${styles["tab"]} ${styles["active"]}`} value="account" onClick={tabHandler}>
                    <Setting color="#9D9D9D"></Setting>
                    <h6 className="ml-2 mb-0 text-light-grey cursor-pointer">Account</h6>
                </div>
                <div className={`d-flex d-align-center  ${styles["tab"]}`} value="notification" onClick={tabHandler}>
                    <Setting color="#9D9D9D"></Setting>
                    <h6 className="ml-2 mb-0 text-light-grey cursor-pointer">Notification</h6>
                </div>
            </div>
            
            {tab == "account" &&
                
                <div className="col-8 ml-5 d-flex ">
                    <div className="col-7 d-flex d-flex-column">
                        <div className={` d-flex d-flex-column ${styles["personal-details"]}`}>
                            <h6 className="f-500 l-22 text-danger">*Required fields</h6>
                            <h4 className="f-600 l-32 mb-0 mb-3">Personal details</h4>
                            <label>Username<span className="text-danger">*</span></label>
                            <input type="text" placeholder="Alexanderpayne"/>
                            <label>Name<span className="text-danger">*</span></label>
                            <input type="text" placeholder="Alexander Payne"/>
                            <label>Email<span className="text-danger">*</span></label>
                            <input type="email" placeholder="Alien21@gmail.com"/>
                            <label>Wallet address/Domain<span className="text-danger">*</span></label>
                            <input type="text" placeholder="cyi48a7j46e23vefg31s2p8r2m46e23vefg31"/>
                            <label>Bio</label>
                            <textarea type="text" placeholder="I am a 3D artist and an NFT enthusiast."/>        
                        </div>
                        <div className={` d-flex d-flex-column pt-4 ${styles["social-links"]}`}>
                            <h4 className="f-600 l-32 mb-0 mb-3">External Links</h4>
                            <label>Domain</label>
                            <input type="text" placeholder="Enter URL"/>
                            <label>Instagram</label>
                            <input type="text" placeholder="www.instagram.com/alien21"/>
                            <label>Facebook</label>
                            <input type="text" placeholder="Enter facebook link"/>
                            <label>Twitter</label>
                            <input type="text" placeholder="Enter twitter link"/>
                        </div>
                    </div>
                    <div className="col-4 offset-1 d-flex d-flex-column mt-5 ">
                        <h4 className="f-600 l-32 mb-0 mb-1 secondary-font mb-0">Profile picture</h4>
                        <h6 className="f-500 l-22 text-light-grey mb-0 secondary-font ">Accepted formats: PNG, JPG, SVG, GIF</h6>
                        <h6 className="f-500 l-22 text-light-grey mb-0 secondary-font m-t-4">Recommended Image size: 400x400px</h6>
                        <div className={`d-flex d-align-center d-justify-center file-upload ${styles["profile-picture"]}`} >
                            <Person></Person>
                            <input type="file" name="file" id="file-input" className={`${styles["visuallyhidden"]}`}/>
                        </div>
                        <h4 className="f-600 l-32 mb-0 mb-1 secondary-font mt-5">Profile canvas</h4>
                        <h6 className="f-500 l-22 text-light-grey mb-0 secondary-font">Accepted formats: PNG, JPG, SVG, GIF</h6>
                        <h6 className="f-500 l-22 text-light-grey mb-0 secondary-font m-t-4">Recommended Image size: 1920x400px</h6>
                        <div className={`d-flex d-align-center d-justify-center file-upload ${styles["profile-canvas"]}`}>
                            <ImageIcon></ImageIcon>
                            <input type="file" name="file" id="file-input" className={`${styles["visuallyhidden"]}`}/>
                        </div>
                    </div>
                    
                </div>
                
            }
            {tab == "notification" &&
                <div className="col-6 ml-5 ">
                    <h6 className="f-400 secondary-font">Select which notifications you would like to receive</h6>
                    <div className="mt-4">
                        <div className="d-flex d-align-center d-justify-space-between">
                            <h5 className="f-600 m-0 secondary-font">Item Sold</h5>
                            <Checkbox></Checkbox>
                        </div>
                        <h6 className="f-400 m-0 mt-1 secondary-font">When someone purchased one of your items</h6>
                    </div>
                    <div className="mt-4">
                        <div className="d-flex d-align-center d-justify-space-between">
                            <h5 className="f-600 m-0 secondary-font">Bid Activity</h5>
                            <Checkbox></Checkbox>
                        </div>
                        <h6 className="f-400 m-0 mt-1 secondary-font">When someone bids on one of your items</h6>
                    </div>
                    <div className="mt-4">
                        <div className="d-flex d-align-center d-justify-space-between">
                            <h5 className="f-600 m-0 secondary-font">Price Change</h5>
                            <Checkbox></Checkbox>
                        </div>
                        <h6 className="f-400 m-0 mt-1 secondary-font">When an item you made an offer on changes in price</h6>
                    </div>
                    <div className="mt-4">
                        <div className="d-flex d-align-center d-justify-space-between">
                            <h5 className="f-600 m-0 secondary-font">Auction Expiration</h5>
                            <Checkbox></Checkbox>
                        </div>
                        <h6 className="f-400 m-0 mt-1 secondary-font">When a auction you created ends</h6>
                    </div>
                    <div className="mt-4">
                        <div className="d-flex d-align-center d-justify-space-between">
                            <h5 className="f-600 m-0 secondary-font">Outbid</h5>
                            <Checkbox></Checkbox>
                        </div>
                        <h6 className="f-400 m-0 mt-1 secondary-font">When an offer you placed is exceeded by another user</h6>
                    </div>
                    <div className="mt-4">
                        <div className="d-flex d-align-center d-justify-space-between">
                            <h5 className="f-600 m-0 secondary-font">Auction Expiration</h5>
                            <Checkbox></Checkbox>
                        </div>
                        <h6 className="f-400 m-0 mt-1 secondary-font">When a auction you created ends</h6>
                    </div>
                    <div className="mt-4">
                        <div className="d-flex d-align-center d-justify-space-between">
                            <h5 className="f-600 m-0 secondary-font">Successful Purchase</h5>
                            <Checkbox></Checkbox>
                        </div>
                        <h6 className="f-400 m-0 mt-1 secondary-font">When you successfully buy an item</h6>
                    </div>
                    <div className="mt-4">
                        <div className="d-flex d-align-center d-justify-space-between">
                            <h5 className="f-600 m-0 secondary-font">OmniSea Newsletter</h5>
                            <Checkbox></Checkbox>
                        </div>
                        <h6 className="f-400 m-0 mt-1 secondary-font">Occasional updates</h6>
                    </div>
                </div>
            }
            
        </div></form>
    );
}
export default Settings;