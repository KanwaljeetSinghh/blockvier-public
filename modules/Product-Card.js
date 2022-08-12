import styles from "../modules/css/product.module.css";

export default function ProductCard(){
    return (
        <div className={`${styles["product-slider"]}`}>
            <img src="../public/images/Collectables.png"/>
        </div>
    );
}