import styles from './css/footer-menu-bar.module.css';
function FooterMenuBar(props){
    return(
        <div className='d-flex d-flex-wrap'>
            <ul className={`col-3 list-style-none `}>
                <li className={` ${styles["level-1"]}`}>
                    <h3 className='mb-0'>Marketplace</h3>
                    <ul className={`list-style-none p-0`}>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Motors</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Watches</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Collectible Cards</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Real Estate</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Gaming</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Art</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Music</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Fashion</a></li>
                    </ul>
                </li>
            </ul>

            <ul className={`col-3 list-style-none `}>
                <li className={` ${styles["level-1"]}`}>
                    <h3 className='mb-0'>My Account</h3>
                    <ul className={`list-style-none p-0`}>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Payment Options</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Bug Report</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Coin Listing</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Resources</a></li>
                    </ul>
                </li>
            </ul>

            <ul className={`col-3 list-style-none `}>
                <li className={` ${styles["level-1"]}`}>
                    <h3 className='mb-0'>Resources</h3>
                    <ul className={`list-style-none p-0`}>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Terms and Conditions</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Privacy Policy</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Contact Us</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Support</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">FAQs</a></li>
                    </ul>
                </li>
            </ul>

            <ul className={`col-3 list-style-none `}>
                <li className={` ${styles["level-1"]}`}>
                    <h3 className='mb-0'>Follow Us on</h3>
                    <ul className={`list-style-none p-0`}>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Meta</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Instagram</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Twitter</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">Reddit</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">YouTube</a></li>
                        <li className='mt-2 f-400'><a className="text-secondary" href="">LinkedIn</a></li>
                    </ul>
                </li>
            </ul>

        </div>
    )
}

export default FooterMenuBar;