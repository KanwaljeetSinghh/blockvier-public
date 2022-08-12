import FooterSubsribeForm from './Footer-Subscribe-Section';
import BrandLogo from './Logo';
import FooterCopyrights from './Footer-Copyright';
import FooterMenuBar from './Footer-Menu-Bar';
import styles from './css/footer.module.css';

function OSfooter(props){
    return(
        <footer className={`${styles["footer"]} `}>
            <div className="container d-flex d-flex-wrap">
                <div className="col-4 pr-5">
                    <FooterSubsribeForm></FooterSubsribeForm>
                    <div className='mt-5 pt-5'>
                        <span className='mt-4 d-block'>&nbsp;</span>
                        <BrandLogo></BrandLogo>
                    </div>
                    
                    <FooterCopyrights></FooterCopyrights>
                </div>
                <div className="col-8">
                    <FooterMenuBar></FooterMenuBar>
                </div>
            </div>
        </footer>
    )
}

export default OSfooter;