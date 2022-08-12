import Banner from '../modules/Banner';
import Categories from '../modules/Categories';
import SellingSteps from '../modules/Selling-Steps';
import Collectables from '../modules/Collectables';
import CryptoExchange from '../modules/Crypto-Exchange';

import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Banner></Banner>
      <Collectables headStart="Latest Verified Collectibles in " headEnd="last 7 days"></Collectables>
      <Categories headStart="Latest events in " headEnd="last 7 days"></Categories>
      <SellingSteps></SellingSteps>
      <CryptoExchange></CryptoExchange>
      
    </Fragment>
  )
}
