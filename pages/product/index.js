import { useState } from "react";
import PropertyTable from "../../modules/Property-Table";
import styles from "../../modules/css/product.module.css";
import Collectables from '../../modules/Collectables';
import ProductLocation from "../../icons/product-location";
import Verified from "../../icons/Verified";
import Favorite from "../../icons/Favorite";
import Etherium from "../../icons/Etherium";
import Dot from "../../icons/Dot";
import Truck from "../../icons/Truck";
import Instruct from "../../icons/Instruct";
import Timer from "../../icons/Timer";
import Expand from "../../icons/Expand";
import RedLocation from "../../icons/RedLocation";
import RedInstruct from "../../icons/Red-Instruct";
import ExpandSmall from "../../icons/ExpandSmall";
import FullScreenSlider from "../../modules/Full-Screen-Slider";
import ModalBid from "../../modules/Modal-Bid";


    function ProductDeatil(){
        const[verify,setVerify] = useState(0);
        const[physical,setDigital]=useState(0);
        const[beforeBid,afterBid] = useState(0);
        const[fullScreen,setFullScreen] = useState(false);
        const[modalBid,setModalBid] = useState(false);
        const[modalBidSuccess,setModalBidSuccess] = useState(false);
        const verifyHandler = () =>{
            setVerify(1);
        }
        const digitalHandler = () =>{
            setDigital(1);
        }
        const fullScreenHandler = () =>{
            setFullScreen(prev => !prev);
        }
        const modalBidHandler = () =>{
            setModalBid(prev => !prev);
        }
        const modalBidSuccessHandler = () =>{
            setModalBid(false);
            setModalBidSuccess(prev => !prev);
            afterBid(1);
        }
        function descriptionHandler(){
            console.log(document.getElementsByClassName(styles["description"]))
                document.getElementsByClassName(styles["description"]).classList.toggleClass(styles["active"]);
            }

    return (
        <>
            
                <div tab="1"></div>
                <div tab="2"></div>
                {physical==0 && 
                <>
                    <div className={`container ${styles["product-view"]}`}>
                        <div>
                            <div className={`${styles["product-image"]}`}>
                                <div className={`d-flex d-align-center d-justify-center cursor-pointer ${styles["expand"]}`} onClick={fullScreenHandler}>
                                    <Expand ></Expand>
                                </div>
                                <img src="images/Collectable.png"/>
                            </div>
                            <div className="d-flex d-justify-space-between border rounded-20 p-2 mt-5">
                                <div className="d-flex d-flex-column pt-2 pl-2">
                                    <RedLocation></RedLocation>
                                    <span className="f-600 font-13 l-18 text-grey mt-1">Product Location</span>
                                    <h5 className="f-600 l-28 text-grey mb-0">New York, United States</h5>
                                    <div className={`d-flex d-align-center d-justify-space-between mt-1 ${styles["open-in-map"]}`}>
                                        <span className="f-500 font-13">Open in Maps </span>
                                        <ExpandSmall></ExpandSmall>
                                    </div>
                                </div>
                                <div className="">
                                    <img src="images/map.png"/>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="d-flex d-align-center mb-2">
                                <div className="d-flex d-align-center bg-smoke rounded-100 pt-1 pb-1 pl-2 pr-2">
                                    <ProductLocation></ProductLocation>
                                    <span className="f-700 font-16 l-22 text-grey pl-1">Location</span>
                                </div>
                                <div className="d-flex d-align-center bg-smoke rounded-100 pt-1 pb-1 pl-2 pr-2 ml-2">
                                    <span className="f-700 font-16 l-22 text-grey pl-1">Card Collectables</span>
                                </div>
                                <div className="d-flex d-align-center bg-smoke rounded-100 pt-1 pb-1 pl-2 pr-2 ml-2">
                                    <span className="f-700 font-16 l-22 text-grey pl-1">NBA</span>
                                </div>
                                <div className="d-flex d-align-center bg-smoke rounded-100 pt-1 pb-1 pl-2 pr-2 ml-2">
                                    <span className="f-700 font-16 l-22 text-grey pl-1">PS9</span>
                                </div>
                            </div>
                            <div className="d-flex d-justify-space-between d-align-center">
                                <span className="font-40 f-400 l-56">2019-20 Panini Prizm Luka Samanic</span>
                                <Favorite></Favorite>
                            </div>
                            <div className={`d-flex  ${styles["product-user-profile"]}`}>
                                <h5 className="text-grey f-400">Listed by</h5>
                                <div className={`m-l-12 ${styles["product-user-profile-img"]}`}>
                                    <img src="images/user-profile.png"/>
                                </div>
                                <h5 className="f-600 m-l-6">John Dorsey</h5>
                                <sup className="font-13 f-600 text-grey m-l-4">Verified Reseller <Verified></Verified></sup>
                            </div>
                            <div type="0"></div>
                            <div type="1"></div>
                            {verify==0 &&
                            <>
                                <div className="border p-4 rounded-20 ">
                                    <div className="border-bottom-dashed pb-1">
                                        <h5 className="f-600">Sale ends at <span className="text-primary">April 15, 2022 at 3:30 AM IST</span></h5>
                                        <div className="d-flex pt-1">
                                            <div className="mr-80">
                                                <h4 className="f-800 l-23 mb-0">2</h4>
                                                <h6 className="f-500 l-22 text-grey">Months</h6>
                                            </div>
                                            <div className="mr-80">
                                                <h4 className="f-800 l-23 mb-0">10</h4>
                                                <h6 className="f-500 l-22 text-grey">Days</h6>
                                            </div>
                                            <div className="mr-80">
                                                <h4 className="f-800 l-23 mb-0">12</h4>
                                                <h6 className="f-500 l-22 text-grey">minutes</h6>
                                            </div>
                                            <div className="mr-80">
                                                <h4 className="f-800 l-23 mb-0">56</h4>
                                                <h6 className="f-500 l-22 text-grey">Seconds</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h6 className="f-700 text-grey">Current price</h6>
                                        <div className="d-flex d-align-center">
                                            <Etherium></Etherium>
                                            <h2 className="f-800 text-primary mb-0 m-l-6 m-r-12">0.002</h2>
                                            <Dot></Dot>
                                            <h4 className="f-600 text-light-grey mb-0 m-l-12">$ 2,388.5</h4>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <a className="btn btn-large btn-primary" onClick={verifyHandler}>Buy Now</a>
                                            <a className="btn btn-large btn-secondary ml-3">Make on Offer</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={` rounded-20 mt-5 p-4 ${styles["shipping-detail"]}`}>
                                    <div className="d-flex d-align-center">
                                        <Truck></Truck>
                                        <h5 className="f-700 l-22 mb-0 ml-1 mr-1">Shipping:</h5>
                                        <h6 className="f-500 l-22 text-grey mb-0 mr-1">Charges around USD 49.99 or ETH 0.00021</h6>
                                        <Instruct></Instruct>
                                    </div>
                                    <div className="d-flex d-align-center mt-2">
                                        <Timer></Timer>
                                        <h5 className="f-700 l-22 mb-0 ml-1 mr-1">Delivery:</h5>
                                        <h6 className="f-500 l-22 text-grey mb-0 mr-1">Estimated between Mon, May 9 and Thu, Jun 9</h6>
                                        <Instruct></Instruct>
                                    </div>
                                </div>
                            </>}
                            {verify==1 && 
                                <div className="border p-4 rounded-20 mt-3">
                                    <div className="d-flex">
                                        <RedInstruct></RedInstruct>
                                        <div className=" ml-3">
                                            <h5 className="f-600 l-28 mb-0">This product is yet to be verified</h5>
                                            <h6 className="f-500 l-22 mt-1 text-grey">This product is not verified by the admin, once the product is verified you will be able to set the  price and sell it on this platform</h6>
                                        </div>
                                    </div>
                                </div>                    
                            }
                        </div>
                    </div>
                    <div className={`container border rounded pr-5 pl-5 pt-4 pb-4`}>
                        <h3 className="l-35 f-500">About Product</h3>
                        <h6 className="f-800 l-22">Description</h6>
                        <h5 className={`f-400 l-28 text-grey mb-0 ${styles["description"]}`}>The Axie marketplace has been moved to Ronin, an Ethereum sidechain.<br/>
                            Axies are fierce creatures that love to battle, build, and hunt for treasure! Build up a collection and use them across an ever expanding universe of games!
                            Axies are fierce creatures that love to battle, build, and hunt for treasure! Build up a collection and use them across an ever expanding universe of games!
                            Axies are fierce creatures that love to battle, build, and hunt for treasure! Build up a collection and use them across an ever expanding universe of games!
                        
                        </h5>
                        <h6 className="f-800 l-22 text-primary cursor-pointer" onClick={descriptionHandler}>+ Read more</h6>
                        <h6 className="f-800 l-22 mt-4">Properties</h6>   
                        <div className={`${styles["about__product-table"]}`}>              
                                <PropertyTable type="0"></PropertyTable>              
                                <PropertyTable type="0"></PropertyTable>  
                        </div>
                    
                    </div>
                    <div className={`container mt-5 ${styles["about__product-history"]}`}>
                        <div className=" border rounded pr-5 pl-5 pt-4 pb-4">
                            <div className="d-flex d-justify-space-between d-align-center pt-2">
                                <h3 className="l-35 f-500">Price History</h3>
                                <div className="d-flex d-align-center">
                                    <label>Filter by:</label>
                                    <select>
                                        <option selected>aa</option>
                                        <option>asa</option>
                                        <option>ss</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className=" border rounded pr-5 pl-5 pt-4 pb-4">
                            <h3 className="l-35 f-500">Product Collection Stats</h3>
                            <div className="border rounded p-2">
                                <h5 className="f-400 l-28 text-grey ">All time Avg. Price</h5>
                                <h3 className="f-600 l-40 text-primary ">$ 2,388.5</h3>
                            </div>
                            <div className="border rounded mt-3 p-2">
                                <h5 className="f-400 l-28 text-grey ">Price range(Lifetime)</h5>
                                <h3 className="f-600 l-40 text-danger">$ 2,388.5 <span className="text-grey pl-1 pr-1">- </span><span className="text-success">$ 2,388.5</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <Collectables headStart="Similar" headEnd="Events"></Collectables>
                    </div>
                </>}
               
                {physical==1 && 
                <div className="container">
                    <div className={` ${styles["product-view"]}`}>
                        <div className={`mb-5 ${styles["product-image"]}`}>
                            <div className={`d-flex d-align-center d-justify-center cursor-pointer ${styles["expand"]}`} onClick={fullScreenHandler}>
                                <Expand ></Expand>
                            </div>
                            <img src="images/digital.png"/>
                        </div>
                        <div className="">
                            <div className="d-flex d-align-center mb-2">
                                <div className="d-flex d-align-center bg-smoke rounded-100 pt-1 pb-1 pl-2 pr-2">
                                    <span className="f-700 font-16 l-22 text-grey pl-1">Gaming</span>
                                </div>
                                <div className="d-flex d-align-center bg-smoke rounded-100 pt-1 pb-1 pl-2 pr-2 ml-2">
                                    <span className="f-700 font-16 l-22 text-grey pl-1">Axie Infinity</span>
                                </div>
                                <div className="d-flex d-align-center bg-smoke rounded-100 pt-1 pb-1 pl-2 pr-2 ml-2">
                                    <span className="f-700 font-16 l-22 text-grey pl-1">Character</span>
                                </div>
                                
                            </div>
                            <div className="d-flex d-justify-space-between d-align-center">
                                <span className="font-40 f-400 l-56">Zapi</span>
                                <Favorite></Favorite>
                            </div>
                            <div className={`d-flex d-align-center ${styles["product-user-profile"]}`}>
                                <div className="d-flex d-align-center pr-2 border-right">
                                    <h5 className="text-grey f-400 mb-0">From</h5>
                                    <div className={`m-l-12 ${styles["product-user-profile-img"]}`}>
                                        <img src="images/infinity.png"/>
                                    </div>
                                    <h5 className="f-600 m-l-6 mb-0 m-r-6">Axie Infinity</h5>
                                    <Verified></Verified>
                                </div>
                                <div className={`d-flex d-align-center ml-2 `}>
                                    <h5 className="text-grey f-400 mb-0">Owned by</h5>
                                    <div className={`m-l-12 ${styles["product-user-profile-img"]}`}>
                                        <img src="images/user-profile.png"/>
                                    </div>
                                    <h5 className="f-600 m-l-6 mb-0">Jack Dorsey</h5>
                                </div>
                            </div>
                            <div className="border p-4 rounded-20 mt-5">
                                <h6 className="f-700 text-grey mb-0">Starting bid</h6>
                                <div className="d-flex d-align-center mt-2">
                                    <Etherium></Etherium>
                                    <h2 className="f-800 text-primary mb-0 m-l-6 m-r-12">0.002</h2>
                                    <Dot></Dot>
                                    <h4 className="f-600 text-light-grey mb-0 m-l-12">$ 2,388.5</h4>
                                </div>  
                                <div bid="0"></div>
                                <div bid="1"></div>
                                {beforeBid ==0 &&
                                    <a className="btn btn-extra-large mt-4 btn-primary" onClick={modalBidHandler}>Place Bid</a>  
                                }    
                                {beforeBid ==1 &&
                                    <a className="btn btn-extra-large mt-4 btn-primary" >Bid Placed for ETH 0.004</a>  
                                }      
                            </div>
                        </div>
                    </div>
                    
                    <div className={`container border rounded pr-5 pl-5 pt-4 pb-4 m-0`}>
                        <h3 className="l-35 f-500">About Product</h3>
                        <h6 className="f-800 l-22">Description</h6>
                        <h5 className={`f-400 l-28 text-grey mb-0 ${styles["description"]}`}>TThe Axie marketplace has been moved to Ronin, an Ethereum sidechain.<br></br>
                            Axies are fierce creatures that love to battle, build, and hunt for treasure! Build up a collection and use them across an ever expanding universe of games!

                        </h5>
                        <h6 className="f-800 l-22 text-primary cursor-pointer" onClick={descriptionHandler}>+ Read more</h6>
                        <div className={`d-grid ${styles["properties-levels"]}`}>
                            <div >
                                <h6 className="f-800 l-22 mt-4">PROPERTIES</h6> 
                                <div className={` gap-2 ${styles["digital-properties"]}`}>
                                    <div className="d-flex d-flex-column">
                                        <span className="font-13 f-800 l-18 text-grey">Rarity</span>
                                        <h5 className="f-600 l-28 mb-0">Rare</h5>
                                        <span className="font-13 f-600 l-18 text-grey">2% have this trait</span>
                                    </div>
                                    <div className="d-flex d-flex-column">
                                        <span className="font-13 f-800 l-18 text-success">Move</span>
                                        <h5 className="f-600 l-28 mb-0">Blackmail</h5>
                                        <span className="font-13 f-600 l-18 text-grey">2% have this trait</span>
                                    </div>
                                    <div className="d-flex d-flex-column">
                                        <span className="font-13 f-800 l-18 text-success">Move</span>
                                        <h5 className="f-600 l-28 mb-0">Blackmail</h5>
                                        <span className="font-13 f-600 l-18 text-grey">2% have this trait</span>
                                    </div>
                                    <div className="d-flex d-flex-column">
                                        <span className="font-13 f-800 l-18 text-primary">Move</span>
                                        <h5 className="f-600 l-28 mb-0">Blackmail</h5>
                                        <span className="font-13 f-600 l-18 text-grey">2% have this trait</span>
                                    </div>
                                    <div className="d-flex d-flex-column">
                                        <span className="font-13 f-800 l-18 text-primary">Move</span>
                                        <h5 className="f-600 l-28 mb-0">Blackmail</h5>
                                        <span className="font-13 f-600 l-18 text-grey">2% have this trait</span>
                                    </div>
                                    <div className="d-flex d-flex-column">
                                        <span className="font-13 f-800 l-18 text-danger">Move</span>
                                        <h5 className="f-600 l-28 mb-0">Blackmail</h5>
                                        <span className="font-13 f-600 l-18 text-grey">2% have this trait</span>
                                    </div>
                                </div>
                            </div>  
                            <div className="">
                                <h6 className="f-800 l-22 mt-4">LEVELS</h6> 
                                <div className={` gap-2 ${styles["digital-levels"]}`}>
                                    <div className="d-flex d-flex-column border rounded">
                                        <span className="font-13 f-800 l-18 text-grey">All Parts Total Points</span>
                                        <div className={`mt-1 mb-1 ${styles["progress-bar"]}`} style={{background:"rgba(105, 105, 105, 0.12)"}}></div>
                                        <span className="font-13 f-600 l-18 text-grey">459 of 480</span>
                                    </div>
                                    <div className="d-flex d-flex-column border rounded">
                                        <span className="font-13 f-800 l-18 text-grey">All Parts Total Points</span>
                                        <div className={`mt-1 mb-1 ${styles["progress-bar"]}`} style={{background:"rgba(1, 197, 103, 0.12)"}}></div>
                                        <span className="font-13 f-600 l-18 text-grey">459 of 480</span>
                                    </div>
                                    <div className="d-flex d-flex-column border rounded">
                                        <span className="font-13 f-800 l-18 text-grey">All Parts Total Points</span>
                                        <div className={`mt-1 mb-1 ${styles["progress-bar"]}`} style={{background:"rgba(1, 197, 103, 0.12)"}}></div>
                                        <span className="font-13 f-600 l-18 text-grey">459 of 480</span>
                                    </div>
                                    <div className="d-flex d-flex-column border rounded">
                                        <span className="font-13 f-800 l-18 text-grey">All Parts Total Points</span>
                                        <div className={`mt-1 mb-1 ${styles["progress-bar"]}`} style={{background:" rgba(126, 87, 194, 0.12)"}}></div>
                                        <span className="font-13 f-600 l-18 text-grey">459 of 480</span>
                                    </div>
                                    <div className="d-flex d-flex-column border rounded">
                                        <span className="font-13 f-800 l-18 text-grey">All Parts Total Points</span>
                                        <div className={`mt-1 mb-1 ${styles["progress-bar"]}`} style={{background:"rgba(235, 89, 81, 0.12)"}}></div>
                                        <span className="font-13 f-600 l-18 text-grey">459 of 480</span>
                                    </div>
                                    <div className="d-flex d-flex-column border rounded">
                                        <span className="font-13 f-800 l-18 text-grey">All Parts Total Points</span>
                                        <div className={`mt-1 mb-1 ${styles["progress-bar"]}`} style={{background:"rgba(235, 89, 81, 0.12)"}}></div>
                                        <span className="font-13 f-600 l-18 text-grey">459 of 480</span>
                                    </div>
                                </div>
                            </div>  
                        </div>  
                    </div>
                    <div className={`container mt-5 ${styles["about__product-history"]}`}>
                        <div className=" border rounded pr-5 pl-5 pt-4 pb-4">
                            <div className="d-flex d-justify-space-between d-align-center pt-2">
                                <h3 className="l-35 f-500">Price History</h3>
                                <div className="d-flex d-align-center">
                                    <label>Filter by:</label>
                                    <select>
                                        <option >3 months</option>
                                        <option selected>6 months</option>
                                        <option>12 months</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className=" border rounded pr-5 pl-5 pt-4 pb-4">
                            <h3 className="l-35 f-500">Product Collection Stats</h3>
                            <div className="border rounded p-2">
                                <h5 className="f-400 l-28 text-grey ">All time Avg. Price</h5>
                                <h3 className="f-600 l-40 text-primary ">$ 2,388.5</h3>
                            </div>
                            <div className="border rounded mt-3 p-2">
                                <h5 className="f-400 l-28 text-grey ">Price range(Lifetime)</h5>
                                <h3 className="f-600 l-40 text-danger">$ 2,388.5 <span className="text-grey pl-1 pr-1">- </span><span className="text-success">$ 2,388.5</span></h3>
                            </div>
                        </div>
                    </div>

                    <div className=" border rounded mt-5">
                        <div className={`d-flex d-justify-space-between d-align-center p-5 ${styles["product-activity"]}`}>
                            <h3 className="l-35 f-500">Product Activity</h3>
                            <div className="d-flex d-align-center">
                                <label>Filter by:</label>
                                <select>
                                    <option >3 months</option>
                                    <option selected>6 months</option>
                                    <option>12 months</option>
                                </select>
                            </div>
                        </div>
                        <PropertyTable type="1"></PropertyTable>
                    </div>
                    <Collectables headStart="Similar" headEnd="Events"></Collectables>

                </div>}
            {fullScreen && <FullScreenSlider handler={fullScreenHandler}></FullScreenSlider>}
            {modalBid && <ModalBid type="0" handler={modalBidSuccessHandler}></ModalBid>}
            {modalBidSuccess && <ModalBid type="1" handler={modalBidSuccessHandler}></ModalBid>}
        </>
    )
}

export default ProductDeatil;