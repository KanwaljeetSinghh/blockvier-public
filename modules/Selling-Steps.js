import SectionHeading from "./Section-Heading";
import styles from './css/category-card.module.css';
import SellingCard from "./Selling-Card";

function SellingSteps(props){
    return(
        <div className="section">
            <div className="container">
                <SectionHeading title="How to" highlighted-title="Create & Sell your products?"></SectionHeading>
            
                <div className={` d-grid ${styles["cards"]}`}>
                    <SellingCard></SellingCard>
                    <SellingCard></SellingCard>
                    <SellingCard></SellingCard>
                    <SellingCard></SellingCard>
                </div>
            </div>
        </div>
    )
}

export default SellingSteps;