import styles from "../modules/css/table.module.css";
import Transfer from "../icons/Transfer";
import Cart from "../icons/Cart";
import Hand from "../icons/Hand";
import Tag from "../icons/Tag";
import Tools from "../icons/Tools";
function PropertyTable(props){
    if(props.type==0){
    return (
        <div className="d-flex d-flex-wrap border rounded-8">
            <div className={`col-12 d-flex d-align-center secondary-font d-justify-space-between ${styles["table-default-row"]}`}>
                <div className={`col-6 ${styles["table-column"]} font-19 l-28 f-600 `}>League</div>
                <div className={`col-6 ${styles["table-column"]}`}>NBA</div>
            </div>
            <div className={`col-12 d-flex d-align-center secondary-font d-justify-space-between ${styles["table-default-row"]}`}>
                <div className={`col-6 ${styles["table-column"]} font-19 l-28 f-600 `}>League</div>
                <div className={`col-6 ${styles["table-column"]}`}>NBA</div>
            </div>
            <div className={`col-12 d-flex d-align-center secondary-font d-justify-space-between ${styles["table-default-row"]}`}>
                <div className={`col-6 ${styles["table-column"]} font-19 l-28 f-600 `}>League</div>
                <div className={`col-6 ${styles["table-column"]}`}>NBA</div>
            </div>
            <div className={`col-12 d-flex d-align-center secondary-font d-justify-space-between ${styles["table-default-row"]}`}>
                <div className={`col-6 ${styles["table-column"]} font-19 l-28 f-600 `}>League</div>
                <div className={`col-6 ${styles["table-column"]}`}>NBA</div>
            </div>
            <div className={`col-12 d-flex d-align-center secondary-font d-justify-space-between ${styles["table-default-row"]}`}>
                <div className={`col-6 ${styles["table-column"]} font-19 l-28 f-600 `}>League</div>
                <div className={`col-6 ${styles["table-column"]}`}>NBA</div>
            </div>
            <div className={`col-12 d-flex d-align-center secondary-font d-justify-space-between ${styles["table-default-row"]}`}>
                <div className={`col-6 ${styles["table-column"]} font-19 l-28 f-600 `}>League</div>
                <div className={`col-6 ${styles["table-column"]}`}>NBA</div>
            </div>
        </div>
    )}
    if(props.type==1){
        return (
            <div className="d-flex d-flex-wrap ">
                <div className={`col-12   secondary-font  bg-gradient ${styles["digital-table"]} ${styles["table-default-row"]} `}>
                    <div className={` ${styles["table-column"]} font-19 l-28 f-600 `}>Event</div>
                    <div className={` ${styles["digital-table-column"]} font-19 l-28 f-600 `}>Unit-Price</div>
                    <div className={` ${styles["digital-table-column"]} font-19 l-28 f-600`}>From</div>
                    <div className={` ${styles["digital-table-column"]} font-19 l-28 f-600`}>To</div>
                    <div className={` ${styles["digital-table-column"]} font-19 l-28 f-600`}>Date</div>
                    <div className={` ${styles["digital-table-column"]} font-19 l-28 f-600`}>Transaction-Id</div>
                </div>
                <div className={`col-12 ${styles["digital-table"]} secondary-font  ${styles["table-default-row"]}`}>
                    <div className={`${styles["table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        <Transfer color="black"></Transfer>
                        <span className="ml-1">Transfer</span>
                    </div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400 `}>-</div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        <div className={`${styles["profile"]}`}>
                            <img src="images/user-profile.png"></img>
                        </div>
                        <span className="m-l-6">Funk you</span>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        <div className={`${styles["profile"]}`}>
                            <img src="images/user-profile.png"></img>
                        </div>
                        <span className="m-l-6">JackDorsey</span>
                    </div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400`}>2 days ago</div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400`}>qd7dxcvxwc7g9afcfda45f5d6a9n0...</div>
                </div>
                <div className={`col-12 ${styles["digital-table"]} secondary-font bg-smoke ${styles["table-default-row"]}`}>
                    <div className={`${styles["table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        <Cart color="black"></Cart>
                        <span className="ml-1">Sale</span>
                    </div>
                    <div className={`${styles["digital-table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        <div className={`${styles["profile"]} `}>
                            <img src="images/Etherium.png"></img>
                        </div>
                        <h5 className="l-28 f-800 m-0 text-primary">0.003</h5>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        <div className={`${styles["profile"]}`}>
                            <img src="images/user-profile.png"></img>
                        </div>
                        <span className="m-l-6">Funk you</span>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        <div className={`${styles["profile"]}`}>
                            <img src="images/user-profile.png"></img>
                        </div>
                        <span className="m-l-6">JackDorsey</span>
                    </div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400`}>5 days ago</div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400`}>qd7dxcvxwc7g9afcfda45f5d6a9n0...</div>
                </div>
                <div className={`col-12 ${styles["digital-table"]} secondary-font  ${styles["table-default-row"]}`}>
                    <div className={`${styles["table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        <Hand color="black"></Hand>
                        <span className="ml-1">Bid</span>
                    </div>
                    <div className={`${styles["digital-table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        <div className={`${styles["profile"]} `}>
                            <img src="images/Etherium.png"></img>
                        </div>
                        <h5 className="l-28 f-800 m-0 text-primary">0.003</h5>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        <div className={`${styles["profile"]}`}>
                            <img src="images/user-profile.png"></img>
                        </div>
                        <span className="m-l-6">Funk you</span>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        -<div className={`${styles["profile"]}`}>
                            <img src=""></img>
                        </div>
                        <span className="m-l-6"></span>
                    </div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400`}>2 weeks ago</div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400`}>-</div>
                </div>
                <div className={`col-12 ${styles["digital-table"]} secondary-font bg-smoke ${styles["table-default-row"]}`}>
                    <div className={`${styles["table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        <Tag color="black"></Tag>
                        <span className="ml-1">List</span>
                    </div>
                    <div className={`${styles["digital-table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        <div className={`${styles["profile"]} `}>
                            <img src="images/Etherium.png"></img>
                        </div>
                        <h5 className="l-28 f-800 m-0 text-primary">0.003</h5>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        <div className={`${styles["profile"]}`}>
                            <img src="images/user-profile.png"></img>
                        </div>
                        <span className="m-l-6">Funk you</span>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        -<div className={`${styles["profile"]}`}>
                            <img src=""></img>
                        </div>
                        <span className="m-l-6"></span>
                    </div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400`}>4 weeks ago</div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400`}>-</div>
                </div>
                <div className={`col-12 ${styles["digital-table"]} secondary-font  ${styles["table-default-row"]}`}>
                    <div className={`${styles["table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        <Tools color="black"></Tools>
                        <span className="ml-1">Minted</span>
                    </div>
                    <div className={`${styles["digital-table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        -<div className={`${styles["profile"]} `}>
                            <img src=""></img>
                        </div>
                        <h5 className="l-28 f-800 m-0 text-primary"></h5>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        -<div className={`${styles["profile"]}`}>
                            <img src=""></img>
                        </div>
                        <span className="m-l-6"></span>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        <div className={`${styles["profile"]}`}>
                            <img src="images/user-profile.png"></img>
                        </div>
                        <span className="m-l-6">Jack Dorsey</span>
                    </div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400`}>4 weeks ago</div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400`}>0x908595fafcfda4571414beesfdb...</div>
                </div>
            </div>
        );
    }
    if(props.type==2){
        return (
            <div className="d-flex d-flex-wrap border rounded">
                <div className={`col-12   secondary-font  bg-gradient ${styles["digital-table-2"]} ${styles["table-default-row"]} `}>
                    <div className={` ${styles["table-column"]} font-19 l-28 f-600 `}>Event</div>
                    <div className={` ${styles["digital-table-column"]} font-19 l-28 f-600 `}>Unit-Price</div>
                    <div className={` ${styles["digital-table-column"]} font-19 l-28 f-600`}>From</div>
                    <div className={` ${styles["digital-table-column"]} font-19 l-28 f-600`}>To</div>
                    <div className={` ${styles["digital-table-column"]} font-19 l-28 f-600`}>Date</div>
                    <div className={` ${styles["digital-table-column"]} font-19 l-28 f-600`}></div>
                </div>
                <div className={`col-12 ${styles["digital-table-2"]} secondary-font  ${styles["table-default-row"]}`}>
                    <div className={`${styles["table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        <Transfer color="black"></Transfer>
                        <span className="ml-1">Transfer</span>
                    </div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400 `}>-</div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        <div className={`${styles["profile"]}`}>
                            <img src="images/user-profile.png"></img>
                        </div>
                        <span className="m-l-6">Funk you</span>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        <div className={`${styles["profile"]}`}>
                            <img src="images/user-profile.png"></img>
                        </div>
                        <span className="m-l-6">JackDorsey</span>
                    </div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400`}>2 days ago</div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400 text-primary`}>VIEW DETAILS</div>
                </div>
                <div className={`col-12 ${styles["digital-table-2"]} secondary-font bg-smoke ${styles["table-default-row"]}`}>
                    <div className={`${styles["table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        <Cart color="black"></Cart>
                        <span className="ml-1">Sale</span>
                    </div>
                    <div className={`${styles["digital-table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        <div className={`${styles["profile"]} `}>
                            <img src="images/Etherium.png"></img>
                        </div>
                        <h5 className="l-28 f-800 m-0 text-primary">0.003</h5>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        <div className={`${styles["profile"]}`}>
                            <img src="images/user-profile.png"></img>
                        </div>
                        <span className="m-l-6">Funk you</span>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        <div className={`${styles["profile"]}`}>
                            <img src="images/user-profile.png"></img>
                        </div>
                        <span className="m-l-6">JackDorsey</span>
                    </div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400`}>5 days ago</div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400 text-primary`}>VIEW DETAILS</div>
                </div>
                <div className={`col-12 ${styles["digital-table-2"]} secondary-font  ${styles["table-default-row"]}`}>
                    <div className={`${styles["table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        <Hand color="black"></Hand>
                        <span className="ml-1">Bid</span>
                    </div>
                    <div className={`${styles["digital-table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        <div className={`${styles["profile"]} `}>
                            <img src="images/Etherium.png"></img>
                        </div>
                        <h5 className="l-28 f-800 m-0 text-primary">0.003</h5>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        <div className={`${styles["profile"]}`}>
                            <img src="images/user-profile.png"></img>
                        </div>
                        <span className="m-l-6">Funk you</span>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        -<div className={`${styles["profile"]}`}>
                            <img src=""></img>
                        </div>
                        <span className="m-l-6"></span>
                    </div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400`}>2 weeks ago</div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400 text-primary`}>VIEW DETAILS</div>
                </div>
                <div className={`col-12 ${styles["digital-table-2"]} secondary-font bg-smoke ${styles["table-default-row"]}`}>
                    <div className={`${styles["table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        <Tag color="black"></Tag>
                        <span className="ml-1">List</span>
                    </div>
                    <div className={`${styles["digital-table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        <div className={`${styles["profile"]} `}>
                            <img src="images/Etherium.png"></img>
                        </div>
                        <h5 className="l-28 f-800 m-0 text-primary">0.003</h5>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        <div className={`${styles["profile"]}`}>
                            <img src="images/user-profile.png"></img>
                        </div>
                        <span className="m-l-6">Funk you</span>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        -<div className={`${styles["profile"]}`}>
                            <img src=""></img>
                        </div>
                        <span className="m-l-6"></span>
                    </div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400`}>4 weeks ago</div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400`}>-</div>
                </div>
                <div className={`col-12 ${styles["digital-table-2"]} secondary-font  ${styles["table-default-row"]}`}>
                    <div className={`${styles["table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        <Tools color="black"></Tools>
                        <span className="ml-1">Minted</span>
                    </div>
                    <div className={`${styles["digital-table-column"]} d-flex d-align-center font-19 l-28 f-400 `}>
                        -<div className={`${styles["profile"]} `}>
                            <img src=""></img>
                        </div>
                        <h5 className="l-28 f-800 m-0 text-primary"></h5>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        -<div className={`${styles["profile"]}`}>
                            <img src=""></img>
                        </div>
                        <span className="m-l-6"></span>
                    </div>
                    <div className={`${styles["digital-table-column "]} d-flex d-align-center font-19 l-28 f-400`}>
                        <div className={`${styles["profile"]}`}>
                            <img src="images/user-profile.png"></img>
                        </div>
                        <span className="m-l-6">Jack Dorsey</span>
                    </div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400`}>4 weeks ago</div>
                    <div className={`${styles["digital-table-column"]} font-19 l-28 f-400 text-primary`}>VIEW DETAILS</div>
                </div>
            </div>
        );
    }
}

export default PropertyTable;

