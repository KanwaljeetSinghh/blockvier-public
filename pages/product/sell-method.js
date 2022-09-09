import SectionHeading from "../../modules/Section-Heading";
import styles from '../../modules/css/create-account.module.css';
import Checkbox from "../../modules/Check-Box";
import RedInstructPlain from "../../icons/Red-Instruct-Plain";
import { useState,useEffect,useRef } from "react";
import Etherium from "../../icons/Etherium";
import Dot from "../../icons/Dot";
export default function SellMethod(){
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
            <SectionHeading title="Select" highlighted-title="sell method"></SectionHeading>
            <div className="d-flex">
                <div className="col-6 mr-80">
                    <div ref={tabRef} className="bg-smoke rounded p-1 d-flex d-justify-space-between mb-4">
                        <div value="personal" className={`d-flex tab ${styles["personal"]} ${styles['active']}`} onClick={tabHandler}>
                            <div className={`${styles["circle"]}`}></div>
                            <div>
                                <h5 className="f-600 mb-0 secondary-font">Set price</h5>
                                <h6 className="f-500 mb-0 secondary-font">Sell at a fixed price or declining price</h6>
                            </div>
                        </div>
                        <div value="business" className={`d-flex tab ${styles["business"]}`} onClick={tabHandler}>
                            <div className={`${styles["circle"]}`}></div>
                            <div>
                                <h5 className="f-600 mb-0 secondary-font">Highest Bid</h5>
                                <h6 className="f-500 mb-0 secondary-font">auction to higher bidder</h6>
                            </div>
                        </div>
                    </div>
                    {tab == "personal" &&
                    <>
                        <div className={`mt-4 ${styles["price-module"]}`}>
                                <div className="">
                                    <h5 className="f-600 m-0 secondary-font">Properties</h5>    
                                    <h6 className="f-500 m-0 mt-1 secondary-font">Adding an ending price will allow this listing to expire, or for the price to be reduced until a buyer is found.</h6>
                                </div>
                                <div className="d-flex d-flex-column d-align-end ">
                                    <div className={`d-flex d-align-center bg-smoke border rounded-20 m-0 p-0 ${styles["sell-method"]}`}>
                                        <select>
                                            <option>USD</option>
                                            <option>ETH</option>
                                        </select>
                                        <input type="text" placeholder='0.004'></input>
                                    </div>
                                    <div className="d-flex d-align-center mt-12">
                                        <RedInstructPlain></RedInstructPlain>
                                        <span className="font-13 text-danger f-600 l-18 m-l-6 secondary-font">Minimum price is ETH 0.04 or $500 for this category</span>
                                    </div>
                                </div>
                        </div>
                        <div className={`mt-5 ${styles["price-module"]}`}>
                            <div className="">
                                <h5 className="f-600 m-0 secondary-font">Include ending price</h5>    
                                <h6 className="f-500 m-0 mt-1 secondary-font">Adding an ending price will allow this listing to expire, or for the price to be reduced until a buyer is found.</h6>
                            </div>
                            <div className="d-flex d-justify-end"><Checkbox></Checkbox></div>
                            
                        </div>
                        <div className={`mt-5 ${styles["price-module"]}`}>
                            <div className="">
                                <h5 className="f-600 m-0 secondary-font">Schedule for a future time</h5>    
                                <h6 className="f-500 m-0 mt-1 secondary-font">You can schedule this listing to only be buyable at a future date</h6>
                            </div>
                            <div className="d-flex d-justify-end"><Checkbox></Checkbox></div>
                        </div>
                        <div className={`mt-5 ${styles["price-module"]}`}>
                            <div className="">
                                <h5 className="f-600 m-0 secondary-font">Bundle with other items</h5>    
                                <h6 className="f-500 m-0 mt-1 secondary-font">This item will list with other items, all items will be included in this price</h6>
                            </div>
                            <div className="d-flex d-justify-end"><Checkbox></Checkbox></div>
                        </div>
                        <div className={`mt-5 ${styles["price-module"]}`}>
                            <div className="">
                                <h5 className="f-600 m-0 secondary-font">Reserve for specific buyer</h5>    
                                <h6 className="f-500 m-0 mt-1 secondary-font">Only buyer with matching hash code will be able to buy</h6>
                            </div>
                            <div className="d-flex d-justify-end"><Checkbox></Checkbox></div>
                        </div>
                    </>}
                    {tab == "business" &&
                    <>
                        <div className={`mt-4 ${styles["price-module"]}`}>
                            <div className="">
                                <h5 className="f-600 m-0 secondary-font">Minimum Bid</h5>    
                                <h6 className="f-500 m-0 mt-1 secondary-font">Set your starting bid price</h6>
                            </div>
                            <div className="d-flex d-flex-column d-align-end ">
                                <div className={`d-flex d-align-center bg-smoke  rounded-20 m-0 p-0 ${styles["sell-method"]}`}>
                                    <select>
                                        <option>USD</option>
                                        <option>ETH</option>
                                    </select>
                                    <input type="text" placeholder='0.004'></input>
                                </div>
                                <div className="d-flex d-align-center mt-12">
                                    <RedInstructPlain></RedInstructPlain>
                                    <span className="font-13 text-danger f-600 l-18 m-l-6 secondary-font">Minimum price is ETH 0.04 or $500 for this category</span>
                                </div>
                            </div>
                        </div>
                        <div className={`mt-4 ${styles["price-module"]}`}>
                            <div className="">
                                <h5 className="f-600 m-0 secondary-font">Reserve price</h5>    
                                <h6 className="f-500 m-0 mt-1 secondary-font">Create a hidden limit by setting a reserve price.</h6>
                            </div>
                            <div className="d-flex d-flex-column d-align-end ">
                                <div className={`d-flex d-align-center bg-smoke  rounded-20 m-0 p-0 ${styles["sell-method"]}`}>
                                    <select>
                                        <option>USD</option>
                                        <option>ETH</option>
                                    </select>
                                    <input type="text" placeholder='0.004'></input>
                                </div>
                                
                            </div>
                        </div>
                        <div className={`mt-4 ${styles["price-module"]}`}>
                            <div className="">
                                <h5 className="f-600 m-0 secondary-font">Expiration date</h5>    
                                <h6 className="f-500 m-0 mt-1 secondary-font">Your auction will automatically end at this time and the highest bidder will win. No need to cancel it!</h6>
                            </div>
                            <div className="d-flex  d-justify-end">
                                <div className={` ${styles["expiry-date"]}`}>
                                    <select>
                                        <option>in 5 days</option>
                                        <option>in 10 days</option>
                                    </select>
                                </div>
                                <div className={` ${styles["expiry-date"]} m-l-12`}>
                                    <select>
                                        <option>in 5 days</option>
                                        <option>in 10 days</option>
                                    </select>
                                </div>
                                
                            </div>
                        </div>
                    </>}
                </div>
                <div className={`${styles["summary"]} border rounded-20 p-5`}>
                    <div className="border-bottom pb-4">
                        <h3 className="f-600 mb-0">Summary</h3>
                        <h3 className="f-300 mt-4 mb-0">Fees</h3>
                        <div className="d-flex d-align-center d-justify-space-between mt-2">
                            <h6 className="f-700 mb-0 text-grey secondary-font">To Current</h6>
                            <h6 className="f-500 mb-0 text-grey secondary-font">5%</h6>
                        </div>
                        <div className="d-flex d-align-center d-justify-space-between mt-12">
                            <h6 className="f-700 mb-0 text-grey secondary-font">Total</h6>
                            <h6 className="f-500 mb-0 text-grey secondary-font">5%</h6>
                        </div>
                        <h6 className="f-700 secondary-font mb-0 text-grey pr-3 mt-2 l-22">
                            Listing is free! At the time of the sale, the following fees will be deducted.
                            <span className="text-primary"> Learn More</span>
                        </h6>
                    </div>
                    <h3 className="f-600 mb-0 mt-4">Final Price</h3>
                    <div className="d-flex d-align-center mt-12">
                        <Etherium></Etherium>
                        <h2 className="f-800 text-primary secondary-font mb-0 m-l-6 m-r-12">0.002</h2>
                        <Dot></Dot>
                        <h4 className="f-600 text-light-grey secondary-font mb-0 m-l-12">$ 2,388.5</h4>
                    </div>
                    <button className="btn btn-extra btn-primary mt-5">Post your listing</button>
                </div>
            </div>
        </div>
    );
}