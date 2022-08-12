import Header from "../modules/Header";
import OSfooter from "../modules/Footer";
import { Fragment } from 'react';
function base(props){
    return (
        <Fragment>
            <Header></Header>
            <main>
                {props.children}
            </main>
            <OSfooter></OSfooter>
        </Fragment>
    )
}

export default base;