import { Fragment } from 'react';

function BannerTitle(props){
    return (
        <Fragment>
            <h1 className='text-gradient'>Your <i>Omni</i> way to Buy & Sell your Valuable assets </h1>
            <p className='mt-5 mb-5 f-400'>A new way to unlock the true value and increase the liquidity of the real-world luxury assets through blockchain technology.</p>
            <a className='btn btn-primary btn-default-width mr-2'> Explore </a>
            <a className='btn btn-secondary btn-default-width'> Add Collectible </a>
        </Fragment>
    )
}

export default BannerTitle;