import SectionHeading from "../modules/Section-Heading";
import styles from '../modules/css/connect-wallet.module.css';
import ArrowLeft from "../icons/Arrow-right";
import { useState } from "react";

export default function ConnectWallet(){
    const [buttonValue, setbuttonValue] = useState("")
    const toggleHandler = (e) => {
        e.currentTarget.classList.toggle(styles.active);
        document.getElementById("providers").classList.toggle(styles.active);
    }
    return (
        <div className="container mt-5">
            <div className="col-6 offset-3 mt-3">
                <SectionHeading title="Connect your" highlighted-title="wallet"></SectionHeading>
                <h5 className={`text-grey f-500 secondary-font ${styles['heading']}`}>Connect with one of our available wallet providers or please create a new one.</h5>
                <div className=" border rounded p-20" style={{background:"#F0EFFF"}}>
                    <h3 className="f-600 text-primary">Become Unstoppable</h3>
                    <h5 className="f-500 text-grey secondary-font">Create you custom domain from Unstoppable domains so you never have to remember your complex 16 digits and keep all your crypto in one place.</h5>
                    <div className="d-flex d-align-center d-justify-space-between">
                    <div className={`d-flex d-align-center  ${styles["logo"]}`}>
                            <img src="images/Unstop-domain.png"/>
                            <h5 className="f-600 secondary-font mb-0 ml-2">Unstoppable Domains</h5>
                        </div>
                        <h6 className="f-700 text-primary p-1 pl-2 pr-2 bg-smoke rounded-100 mb-0" style={{background: "rgba(126, 87, 194, 0.12)"}}>New</h6>
                    </div>
                </div>
                <div className={`d-flex d-flex-column ${styles["providers"]}`} id="providers">
                    <h6 className="f-700 text-grey mt-5 secondary-font">Connect your wallet providers</h6>
                    <div className="d-flex d-align-center d-justify-space-between">
                        <div className={`d-flex d-align-center ${styles["logo"]}`}>
                            <img src="images/matemask.png"/>
                            <h5 className="f-600 secondary-font mb-0 ml-2">Metamask</h5>
                        </div>
                        <h6 className="f-700 text-primary p-1 pl-2 pr-2 bg-smoke rounded-100 mb-0" style={{background: "rgba(235, 89, 81, 0.12);"}}>Most popular</h6>
                    </div>
                    <div className={`d-flex d-align-center mt-4 ${styles["logo"]}`}>
                        <img src="images/coinbase.png"/>
                        <h5 className="f-600 secondary-font mb-0 ml-2">CoinBase</h5>
                    </div>
                    <div className={`d-flex d-align-center mt-4 ${styles["logo"]}`}>
                        <img src="images/walletconnect.png"/>
                        <h5 className="f-600 secondary-font mb-0 ml-2">WalletConnect</h5>
                    </div>
                    <div className={`d-flex d-align-center mt-4 ${styles["logo"]}`}>
                        <img src="images/fortmatic.png"/>
                        <h5 className="f-600 secondary-font mb-0 ml-2">Fortmatic</h5>
                    </div>
                    <div className={`d-flex d-align-center mt-4 ${styles["logo"]}`}>
                        <img src="images/phantom.png"/>
                        <h5 className="f-600 secondary-font mb-0 ml-2">Phantom</h5>
                    </div>
                    <div className={`d-flex d-align-center mt-4 ${styles["logo"]}`}>
                        <img src="images/glow.png"/>
                        <h5 className="f-600 secondary-font mb-0 ml-2">Glow</h5>
                    </div>
                    <div className={`d-flex d-align-center mt-4 ${styles["logo"]}`}>
                        <img src="images/portis.png"/>
                        <h5 className="f-600 secondary-font mb-0 ml-2">Portis</h5>
                    </div>
                    <div className={`d-flex d-align-center mt-4 ${styles["logo"]}`}>
                        <img src="images/authereum.png"/>
                        <h5 className="f-600 secondary-font mb-0 ml-2">Authereum</h5>
                    </div>
                    <div className={`d-flex d-align-center mt-4 ${styles["logo"]}`}>
                        <img src="images/torus.png"/>
                        <h5 className="f-600 secondary-font mb-0 ml-2">Torus</h5>
                    </div>
                    <div className={`d-flex d-align-center mt-4 ${styles["logo"]}`}>
                        <img src="images/bitski.png"/>
                        <h5 className="f-600 secondary-font mb-0 ml-2">Bitski</h5>
                    </div>
                    <div className={`d-flex d-align-center mt-4 ${styles["logo"]}`}>
                        <img src="images/dapper.png"/>
                        <h5 className="f-600 secondary-font mb-0 ml-2">Dapper</h5>
                    </div>
                    <div className={`d-flex d-align-center mt-4 ${styles["logo"]}`}>
                        <img src="images/kaikas.png"/>
                        <h5 className="f-600 secondary-font mb-0 ml-2">Kaikas</h5>
                    </div>
                    <div className={`d-flex d-align-center mt-4 ${styles["logo"]}`}>
                        <img src="images/venly.png"/>
                        <h5 className="f-600 secondary-font mb-0 ml-2">Venly</h5>
                    </div>
                    <div className="d-flex d-align-center d-justify-space-between mt-4 ">
                        <div className={`d-flex d-align-center op-04 ${styles["logo"]}`}>
                            <img src="images/trust.png"/>
                            <h5 className="f-600 secondary-font mb-0 ml-2">Trust</h5>
                        </div>
                        <h6 className="f-700 text-light-grey p-1 pl-2 pr-2 bg-smoke rounded-100 mb-0 secondary-font " >Mobile only</h6>
                    </div>
                    <div className="d-flex d-align-center d-justify-space-between mt-4">
                        <div className={`d-flex d-align-center ${styles["logo"]} op-04`}>
                            <img src="images/opera.png"/>
                            <h5 className="f-600 secondary-font mb-0 ml-2">Operatouch</h5>
                        </div>
                        <h6 className="f-700 text-light-grey p-1 pl-2 pr-2 bg-smoke rounded-100 mb-0 secondary-font" >Mobile only</h6>
                    </div>
                    <h6 className="f-700 text-grey mt-5 secondary-font">Purchase using other wallet</h6>
                    <div className={`d-flex d-align-center mt-4 ${styles["logo"]}`}>
                        <img src="images/paypal.png"/>
                        <h5 className="f-600 secondary-font mb-0 ml-2">Paypal</h5>
                    </div>
                    <div className={`d-flex d-align-center mt-4 ${styles["logo"]}`}>
                        <img src="images/stripe.png"/>
                        <h5 className="f-600 secondary-font mb-0 ml-2">Stripe</h5>
                    </div>
                </div>
                <button className={`col-12 btn-default-width cursor-pointer bg-white mt-5 border-black rounded d-flex d-align-center d-justify-center p-2 ${styles["bottom-wrapper"]}`} onClick={event => toggleHandler(event)}>
                    <div className={styles["show-more"]}>
                        <h6 className="f-600 mb-0 secondary-font ">Show less options</h6>
                        <div className="transform-90m ml-2"><ArrowLeft color="black"></ArrowLeft></div>
                    </div>
                    <div className={styles["show-less"]}>
                        <h6 className="f-600 mb-0 secondary-font ">Show more options</h6>
                        <div className="transform-90 ml-2"><ArrowLeft color="black"></ArrowLeft></div>
                    </div>
                </button> 
                
            </div>
        </div>
    )
}      