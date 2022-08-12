import styles from './css/category-card.module.css';

function CategoryCard(props){
    return(
        <div className={`d-flex d-row d-align-center rounded ${styles["card"]}`}>
            <img src={"/images/product-image.png"} alt="Product Image" />
            <div className='ml-2'>
                <h4 className='secondary-font f-600 mb-1'>Motors</h4>
                <h6 className='secondary-font m-0 f-400 text-grey'>NFL, NBA, MBL, NHL, Pokemon & more</h6>
            </div>
        </div>
    )
}

export default CategoryCard;