import { Fragment } from 'react';
import SubscribeForm from './Subscribe-Form';

function FooterSubsribeForm(props){
    return(
        <Fragment>
            <h3 className="f-300 pr-5 mb-3">
                Subscribe to <span className="f-600">Newsletter</span> to stay updated with latest news
            </h3>
            <SubscribeForm></SubscribeForm>
        </Fragment>
    )
}

export default FooterSubsribeForm;