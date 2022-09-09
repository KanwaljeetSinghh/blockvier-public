import styles from '../modules/css/profile.module.css';
import styless from '../modules/css/marketplace.module.css';
import Internet from '../icons/Internet';
import Share from '../icons/Share';
import Upward from '../icons/Upward';
import Etherium from '../icons/Etherium';
import Dot from '../icons/Dot';
import Accordian from '../modules/Accordian';
import DropDown from '../modules/Drop-Down';
import Input from '../modules/Input';
import ArrowRight from '../icons/Arrow-right';
import Transfer from '../icons/Transfer';
import Cart from '../icons/Cart';
import Hand from '../icons/Hand';
import Tag from '../icons/Tag';
import PropertyTable from "../modules/Property-Table";
import CrossWithBg from '../icons/Cross-with-bg';
import CollectableCard from '../modules/Collectable-Card';
import { useState,useRef } from 'react';
export default function ProfileOwned(){
    const[tab,setTab] = useState("Owned");
    const tabRef = useRef();
    const tabHandler = (e) => {
        tabRef.current.querySelectorAll("li").forEach((item) => {
            item.classList.remove(styles.active)
        });
        e.currentTarget.classList.add(styles.active)
        setTab(e.currentTarget.getAttribute("value"))
    }
    return (
        <div className="container pr-2">
            <div className='d-flex d-align-center d-justify-space-between'>
                <div className='d-flex mt-4'>
                    <div className={`mr-2 ${styles["heading-img"]}`}>
                        <img src="images/profile.png"/>
                    </div>
                    <div>
                        <h2 className='f-400 mb-0'>Alexander Payne</h2>
                        <h6 className='f-500 mb-0'>@alexanderpayne</h6>
                    </div>
                </div>
                <div className='d-flex d-align-center gap-3'>
                    <div className={`d-flex d-align-center d-justify-center ${styles["circle"]}`}>
                        <Internet/>
                    </div>
                    <div className={`d-flex d-align-center d-justify-center ${styles["circle"]}`}>
                        <img src="images/insta.png"/>
                    </div>
                    <div className={`d-flex d-align-center d-justify-center ${styles["circle"]}`}>
                        <img src="images/twitter.png"/>
                    </div>
                    <div className={`d-flex d-align-center d-justify-center ${styles["circle"]}`}>
                        <Share/>
                    </div>
                </div>
            </div>
            <div className={`${styles["portfolio"]}`}>
                <div className='border rounded p-3'>
                    <div className='d-flex d-align-center d-justify-space-between'>
                        <h6 className='f-800 text-grey mb-0 secondary-font'>Your Portfolio</h6>
                        <div className='d-flex d-align-center'>
                            <Upward/>
                            <h6 className='f-700 text-success mb-0 secondary-font ml-2'>Your assets grew 24% over 1 year</h6>
                        </div>
                    </div>
                    <div className='d-flex mt-3 d-justify-space-between'>
                        <div>
                            <h6 className='f-700 secondary-font mb-0'>Current Value</h6>
                            <div className="d-flex d-align-center mt-12">
                                <Etherium></Etherium>
                                <h4 className="f-800 text-primary mb-0 m-l-6 m-r-12 secondary-font">0.002</h4>
                                <Dot></Dot>
                                <h6 className="f-600 text-light-grey mb-0 m-l-12 secondary-font">$ 2,388.5</h6>
                            </div> 
                        </div>
                        <div>
                            <h6 className='f-700 secondary-font mb-0'>Amount Invested</h6>
                            <div className="d-flex d-align-center mt-12">
                                <Etherium></Etherium>
                                <h4 className="f-800 text-primary mb-0 m-l-6 m-r-12 secondary-font">0.002</h4>
                                <Dot></Dot>
                                <h6 className="f-600 text-light-grey mb-0 m-l-12 secondary-font">$ 2,388.5</h6>
                            </div> 
                        </div>
                        <div>
                            <h6 className='f-700 secondary-font mb-0'>Current Wallet</h6>
                            <div className="d-flex d-align-center mt-12">
                                <Etherium></Etherium>
                                <h4 className="f-800 text-primary mb-0 m-l-6 m-r-12 secondary-font">0.002</h4>
                                <Dot></Dot>
                                <h6 className="f-600 text-light-grey mb-0 m-l-12 secondary-font">$ 2,388.5</h6>
                            </div> 
                        </div>
                        <div>
                            <h6 className='f-700 secondary-font mb-0'>Bonus Earned</h6>
                            <div className="d-flex d-align-center mt-12">
                                <Etherium></Etherium>
                                <h4 className="f-800 text-primary mb-0 m-l-6 m-r-12 secondary-font">0.002</h4>
                                <Dot></Dot>
                                <h6 className="f-600 text-light-grey mb-0 m-l-12 secondary-font">$ 2,388.5</h6>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className='border rounded p-3'>
                    <h6 className='f-800 text-grey mb-0 secondary-font'>Your Collection</h6>
                    <div className={`rounded border mt-3 ${styles["bar"]}`}>
                        <div className='bg-primary '></div>
                        <div className='bg-success'></div>
                        <div className='bg-danger'></div>
                        <div className='bg-light-grey'></div>
                    </div>
                    <div className='d-flex mt-4 d-justify-space-between '>
                        <div className='d-flex d-align-center'>
                            <div className={`bg-primary ${styles["mini-circle"]}`}></div>
                            <h6 className='f-500 mb-0 ml-1 '>Collectable cards</h6>
                        </div>
                        <div className='d-flex d-align-center'>
                            <div className={`bg-success ${styles["mini-circle"]}`}></div>
                            <h6 className='f-500 mb-0 ml-1 '>Shoes</h6>
                        </div>
                        <div className='d-flex d-align-center'>
                            <div className={`bg-danger ${styles["mini-circle"]}`}></div>
                            <h6 className='f-500 mb-0 ml-1 '>Watches</h6>
                        </div>
                        <div className='d-flex d-align-center'>
                            <div className={`bg-light-grey ${styles["mini-circle"]}`}></div>
                            <h6 className='f-500 mb-0  ml-1'>Others</h6>
                        </div> 
                    </div>
                </div>
            </div>
            <div ref={tabRef} className={`d-flex mt-5 ${styles["profile-tabs"]}`}>
                <li value="Owned" className={`d-flex d-align-center d-justify-center cursor-pointer ${styles["active"]}`}  onClick={tabHandler}>
                    <h5 className='f-600 mb-0'>Owned</h5>
                    <div className={`bg-smoke d-flex d-justify-center d-align-center ${styles["avg-circle"]}`}>
                        <h5 className="f-500 text-primary mb-0">8</h5>
                    </div>
                </li>
                <li value="Created" className={`d-flex d-align-center d-justify-center cursor-pointer `} onClick={tabHandler}>
                    <h5 className='f-600 mb-0'>Created</h5>
                    <div className={`bg-smoke d-flex d-justify-center d-align-center ${styles["avg-circle"]}`}>
                        <h5 className="f-500 text-primary mb-0">8</h5>
                    </div>
                </li>
                <li value="Favorites" className={`d-flex d-align-center d-justify-center cursor-pointer `} onClick={tabHandler}>
                    <h5 className='f-600 mb-0'>Favorites</h5>
                    <div className={`bg-smoke d-flex d-justify-center d-align-center ${styles["avg-circle"]}`}>
                        <h5 className="f-500 text-primary mb-0">8</h5>
                    </div>
                </li>
                <li value="Bids" className={`d-flex d-align-center d-justify-center cursor-pointer `}  onClick={tabHandler}>
                    <h5 className='f-600 mb-0'>Bids</h5>
                    <div className={`bg-smoke d-flex d-justify-center d-align-center ${styles["avg-circle"]}`}>
                        <h5 className="f-500 text-primary mb-0">8</h5>
                    </div>
                </li>
                <li value="Orders" className={`d-flex d-align-center d-justify-center cursor-pointer `}  onClick={tabHandler}>
                    <h5 className='f-600 mb-0'>Orders</h5>
                    <div className={`bg-smoke d-flex d-justify-center d-align-center ${styles["avg-circle"]}`}>
                        <h5 className="f-500 text-primary mb-0">8</h5>
                    </div>
                </li>
                <li value="History" className={`d-flex d-align-center d-justify-center cursor-pointer `}  onClick={tabHandler}>
                    <h5 className='f-600 mb-0'>History</h5>
                    <div className={`bg-smoke d-flex d-justify-center d-align-center ${styles["avg-circle"]}`}>
                        <h5 className="f-500 text-primary mb-0">8</h5>
                    </div>
                </li>
            </div>
            <div className='d-flex'>
                <div className="col-3 pr-2 mt-5">
                    <Accordian title="Categories" >
                        <DropDown title="Category" placeholder="Collectables" labelClass="secondary-font mb-1 text-grey mt-3"></DropDown>
                        <DropDown title="Sub-Category" placeholder="NBA" labelClass="secondary-font mb-1 text-grey mt-3"></DropDown>
                    </Accordian>
                    <Accordian title="Price" classes="mt-3">
                        <DropDown title="Type" placeholder="USD" labelClass="secondary-font mb-1 text-grey mt-3"></DropDown>
                        <div className={`col-12 mt-3 d-flex d-flex-wrap d-justify-space-between ${styless["marketplace__inputs"]}`}>
                            <Input classes={`${styless["marketplace__inputs-filter"]}`} name="Minimum" labelclass="mb-1 font-16 l-22 d-inline secondary-font text-grey f-700" inputClass="border rounded font-19 l-26 text-secondary" type="number" placeholder="0" value="5000"></Input>
                            <Input classes={`${styless["marketplace__inputs-filter"]}`} name="Maximum" labelclass="mb-1 font-16 l-22 d-inline secondary-font text-grey f-700" inputClass="border rounded font-19 l-26 text-secondary" type="number" placeholder="0" value="180000"></Input>
                        </div>
                    </Accordian>
                    <Accordian title="Year" classes="mt-3 "></Accordian>
                    <Accordian title="Order Status" classes="mt-3">
                        <div className={`${styles["accord-tab"]} mt-2`}>
                            <div className='d-flex d-align-center  bg-smoke rounded p-2 mt-1'>
                                <Transfer color="black"></Transfer>
                                <h5 className='f-600 mb-0 ml-1 secondary-font'>In progress</h5>
                            </div>
                            <div className='d-flex d-align-center  bg-smoke rounded p-2 mt-1'>
                                <Cart color="black"></Cart>
                                <h5 className='f-600 mb-0 ml-2 secondary-font'>Delivered</h5>
                            </div>
                            <div className='d-flex d-align-center bg-smoke rounded p-2 mt-1'>
                                <CrossWithBg color="black"></CrossWithBg>
                                <h5 className='f-600 mb-0 ml-2 secondary-font'>Cancelled</h5>
                            </div>
                        </div>
                    </Accordian>
                    <Accordian title="Categories" classes="mt-3">
                        <div className={`${styles["accord-tab"]} mt-2`}>
                            <div className='d-flex d-align-center  bg-smoke rounded p-2 mt-1'>
                                <Transfer color="black"></Transfer>
                                <h5 className='f-600 mb-0 ml-2 secondary-font'>Transfer</h5>
                            </div>
                            <div className='d-flex d-align-center  bg-smoke rounded p-2 mt-1'>
                                <Cart color="black"></Cart>
                                <h5 className='f-600 mb-0 ml-2 secondary-font'>Sale</h5>
                            </div>
                            <div className='d-flex d-align-center  bg-smoke rounded p-2 mt-1'>
                                <Hand color="black"></Hand>
                                <h5 className='f-600 mb-0 ml-2 secondary-font'>Bid</h5>
                            </div>
                            <div className='d-flex d-align-center  bg-smoke rounded p-2 mt-1'>
                                <Tag color="black"></Tag>
                                <h5 className='f-600 mb-0 ml-2 secondary-font'>List</h5>
                            </div>
                        </div>
                    </Accordian>
                    <Accordian title="Year Ordered" classes="mt-3"></Accordian>
                    <Accordian title="Year History" classes="mt-3"></Accordian>
                    <Accordian title="Graded" classes="mt-3"></Accordian>
                </div>
                
                <div className='col-9 mt-5 ml-5 d-flex d-flex-column gap-3'>
                    {tab == "Owned" && <div className={`pl-3 pr-1 ${styles["data-cards"]}`}>
                        <CollectableCard src="/images/Collectable.png"></CollectableCard>
                        <CollectableCard src="/images/Collectable.png"></CollectableCard>
                        <CollectableCard src="/images/Collectable.png"></CollectableCard>
                        <CollectableCard src="/images/Collectable.png"></CollectableCard>
                        <CollectableCard src="/images/Collectable.png"></CollectableCard>
                        <CollectableCard src="/images/Collectable.png"></CollectableCard>
                    </div>}
                    {tab == "Created" && <div className={`pl-3 pr-1 ${styles["data-cards"]}`}>
                        <CollectableCard src="/images/Collectable.png"></CollectableCard>
                        <CollectableCard src="/images/Collectable.png"></CollectableCard>
                        <CollectableCard src="/images/Collectable.png"></CollectableCard>
                        
                    </div>}  
                    {tab == "Favorites" && <div className={`pl-3 pr-1 ${styles["data-cards"]}`}>
                        <CollectableCard src="/images/Collectable.png"></CollectableCard>
                        <CollectableCard src="/images/Collectable.png"></CollectableCard>
                        <CollectableCard src="/images/Collectable.png"></CollectableCard>
                        <CollectableCard src="/images/Collectable.png"></CollectableCard>
                        <CollectableCard src="/images/Collectable.png"></CollectableCard>
                        <CollectableCard src="/images/Collectable.png"></CollectableCard>
                    </div>} 
                    {tab == "Bids" && <div className={`pl-3 pr-1 ${styles["data-cards"]}`}>
                        <CollectableCard src="/images/Collectable.png"></CollectableCard>
                        <CollectableCard src="/images/Collectable.png"></CollectableCard>
                        
                    </div>} 
                    {tab == "Orders" && 
                    <>
                        <div className={`p-20 border rounded-20 ${styles["orders"]}`}>
                            <div className={`bg-smoke ${styles["order-img"]}`}>
                                <img src='images/Collectable.png'/>
                            </div>
                            <div className=''>
                                <h5 className='f-600 secondary-font mb-0'>2019-20 Panini Prizm Luka Samanic</h5>
                                <div className='d-flex d-align-center mt-1'>
                                    <div className={` ${styles["profile"]} `}>
                                        <img src="images/profile.png"/>
                                    </div>
                                    <h6 className='f-500 mb-0 ml-1 secondary-font'>undertakermayonnaise</h6>
                                </div>
                                <h6 className='f-500 text-grey secondary-font mt-20 mb-0'>Order placed on Thu, Apr 20 at 5:39 PM</h6>
                                <h5 className='f-400 text-grey secondary-font mt-1 mb-0'>Delivery expected between <b className=' f-700'>Mon, May 9 and Thu, Jun 9</b></h5>
                                <div className='d-flex mt-20'>
                                    <button className='btn btn-default-width btn-primary'>Track package</button>
                                    <button className='btn btn-default-width btn-secondary ml-3'>Cancel order</button>
                                </div>
                            </div>
                            <div className='d-flex d-flex-column d-align-end'>
                                <h6 className='f-700 text-grey secondary-font mb-0'>Total</h6>
                                <div className="d-flex d-align-center mt-1">
                                    <Etherium></Etherium>
                                    <h4 className="f-800 text-primary mb-0 m-l-6 secondary-font">0.002</h4>
                                </div>
                                <h6 className="f-600 text-light-grey mb-0 mt-1 secondary-font">$ 2,388.5</h6>
                                <h6 className='f-500 text-grey secondary-font'>Order ID: #92837465019289</h6>
                                <div className='d-flex d-align-center mt-5'>
                                    <h5 className='f-600 secondary-font mr-2 mb-0'>View detail</h5>
                                    <ArrowRight color="black"></ArrowRight>
                                </div>
                            </div>
                        </div>
                        <div className={`p-20 border rounded-20 ${styles["orders"]}`}>
                        <div className={`bg-smoke ${styles["order-img"]}`}>
                            <img src='images/Collectable.png'/>
                        </div>
                        <div className=''>
                            <h5 className='f-600 secondary-font mb-0'>2019-20 Panini Prizm Luka Samanic</h5>
                            <div className='d-flex d-align-center mt-1'>
                                <div className={` ${styles["profile"]} `}>
                                    <img src="images/profile.png"/>
                                </div>
                                <h6 className='f-500 mb-0 ml-1 secondary-font'>undertakermayonnaise</h6>
                            </div>
                            <h6 className='f-500 text-grey secondary-font mt-20 mb-0'>Order placed on Thu, Apr 20 at 5:39 PM</h6>
                            <h5 className='f-400 text-success secondary-font mt-1 mb-0'>Delivered on Thu, Jun 9</h5>
                            <div className='d-flex mt-20'>
                                <button className='btn btn-default-width btn-primary'>Track package</button>
                                <button className='btn btn-default-width btn-secondary ml-3'>Cancel order</button>
                            </div>
                        </div>
                        <div className='d-flex d-flex-column d-align-end'>
                            <h6 className='f-700 text-grey secondary-font mb-0'>Total</h6>
                            <div className="d-flex d-align-center mt-1">
                                <Etherium></Etherium>
                                <h4 className="f-800 text-primary mb-0 m-l-6 secondary-font">0.002</h4>
                            </div>
                            <h6 className="f-600 text-light-grey mb-0 mt-1 secondary-font">$ 2,388.5</h6>
                            <h6 className='f-500 text-grey secondary-font'>Order ID: #92837465019289</h6>
                            <div className='d-flex d-align-center mt-5'>
                                <h5 className='f-600 secondary-font mr-2 mb-0'>View detail</h5>
                                <ArrowRight color="black"></ArrowRight>
                            </div>
                        </div>
                        </div>
                    </>}
                    {tab == "History" && 
                    <div className='ml-5'>
                        <PropertyTable type="2"></PropertyTable>
                    </div>}
                    
                </div>              
            </div>
        </div>
    );
}