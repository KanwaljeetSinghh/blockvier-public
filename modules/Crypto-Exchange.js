import SectionHeading from './Section-Heading';
import CryptoCard from './Crypto-Card';
import ViewTabs from './View-Tabs';
import styles from './css/crypto-card.module.css';

function CryptoExchange(props){
    return(
        <div className='section'>
            <div className='container d-flex d-flex-wrap d-justify-space-between d-align-center'>
                <SectionHeading title="Crypto" highlighted-title="Exchange Mediums"></SectionHeading>
                <ViewTabs></ViewTabs>

                <div className={`col-12 d-grid ${styles["crypto-cards"]}`}>
                    <CryptoCard></CryptoCard>
                    <CryptoCard></CryptoCard>
                    <CryptoCard></CryptoCard>
                    <CryptoCard></CryptoCard>
                </div>
            </div>
        </div>
        
    )
}

export default CryptoExchange;