import styles from './css/crypto-card.module.css';
import CrptoButton from './Crpto-Button';

function CryptoCard(){
    return (
        <div className={`user-select-none d-flex d-flex-column rounded border ${styles["crypto-card"]}`}>
            <div className={`d-flex d-align-center d-justify-space-between`}>
                <div className="d-flex d-flex-wrap">
                    <img src={"images/Etherium-logo.png"} />
                    <span className={`d-flex d-flex-column ${styles["crypto-card-title"]} `}>
                        <h5 className="m-0 secondary-font f-600">Ethereum</h5>
                        <h6 className="m-0 secondary-font text-light-grey f-700">ETH</h6>
                    </span>
                </div>
                <CrptoButton value="Buy"></CrptoButton>
            </div>
        </div>
    )
}

export default CryptoCard;