import SearchBar from "../modules/Search-bar";
import AccordianFaq from "../modules/AccordianFaq";
import List from "../modules/List";
import styles from '../modules/css/settings.module.css';

function Faqs(){
    return(
        <>
        <div className={`container pt-3 d-flex d-flex-wrap d-justify-space-between`}>
            <div className="col-12 pr-2">
                <h1 className="font-40 f-400">FAQs(Frequently Asked Questions)</h1>
            </div>
        </div>
        <div className={`container ${styles["faqs"]}`}>
            <div className="">
                <h3 className="f-600">Buyer FAQs</h3>
                <AccordianFaq title="What are the buyers fess ?" classes=" cursor-pointer">
                    <h6 className="f-400 l-28 m-0 secondary-font mt-1">All bids and auction prices are ONLY in the US Dollar currency, because of the familiarity of that currency’s value, because some buyers prefer to pay by US DOLLARS. During the duration of the auction, the bidders and sellers don’t have to worry about crypto value fluctuations, and focus only on the US DOLLARS equivalent of the car value.
                        $250 increments under $100k, and $500 over $100k bids
                    </h6>
                </AccordianFaq>
                <AccordianFaq title="How do I register to bid?" classes="mt-3 cursor-pointer">
                    <h6 className="f-400 l-28 m-0 secondary-font mt-1">All bids and auction prices are ONLY in the US Dollar currency, because of the familiarity of that currency’s value, because some buyers prefer to pay by US DOLLARS. During the duration of the auction, the bidders and sellers don’t have to worry about crypto value fluctuations, and focus only on the US DOLLARS equivalent of the car value.
                        $250 increments under $100k, and $500 over $100k bids
                    </h6>
                </AccordianFaq>
                <AccordianFaq title="How do I place a bid?" classes="mt-3 cursor-pointer">
                    <h6 className="f-400 l-28 m-0 secondary-font mt-1">All bids and auction prices are ONLY in the US Dollar currency, because of the familiarity of that currency’s value, because some buyers prefer to pay by US DOLLARS. During the duration of the auction, the bidders and sellers don’t have to worry about crypto value fluctuations, and focus only on the US DOLLARS equivalent of the car value.
                        $250 increments under $100k, and $500 over $100k bids
                    </h6>
                </AccordianFaq>
                <AccordianFaq title="What are the bid increments?" classes="mt-3 cursor-pointer">
                    <h6 className="f-400 l-28 m-0 secondary-font mt-1">All bids and auction prices are ONLY in the US Dollar currency, because of the familiarity of that currency’s value, because some buyers prefer to pay by US DOLLARS. During the duration of the auction, the bidders and sellers don’t have to worry about crypto value fluctuations, and focus only on the US DOLLARS equivalent of the car value.
                        $250 increments under $100k, and $500 over $100k bids
                    </h6>
                </AccordianFaq>
                <AccordianFaq title="Can I bid if I live outside of the United States?" classes="mt-3 cursor-pointer">
                    <h6 className="f-400 l-28 m-0 secondary-font mt-1">All bids and auction prices are ONLY in the US Dollar currency, because of the familiarity of that currency’s value, because some buyers prefer to pay by US DOLLARS. During the duration of the auction, the bidders and sellers don’t have to worry about crypto value fluctuations, and focus only on the US DOLLARS equivalent of the car value.
                        $250 increments under $100k, and $500 over $100k bids
                    </h6>
                </AccordianFaq>
                <AccordianFaq title="How do I contact the seller?" classes="mt-3 cursor-pointer">
                    <h6 className="f-400 l-28 m-0 secondary-font mt-1">All bids and auction prices are ONLY in the US Dollar currency, because of the familiarity of that currency’s value, because some buyers prefer to pay by US DOLLARS. During the duration of the auction, the bidders and sellers don’t have to worry about crypto value fluctuations, and focus only on the US DOLLARS equivalent of the car value.
                        $250 increments under $100k, and $500 over $100k bids
                    </h6>
                </AccordianFaq>
                <AccordianFaq title="Will OmniSea automatically bid UP to my maximum bid?" classes="mt-3 cursor-pointer">
                    <h6 className="f-400 l-28 m-0 secondary-font mt-1">All bids and auction prices are ONLY in the US Dollar currency, because of the familiarity of that currency’s value, because some buyers prefer to pay by US DOLLARS. During the duration of the auction, the bidders and sellers don’t have to worry about crypto value fluctuations, and focus only on the US DOLLARS equivalent of the car value.
                        $250 increments under $100k, and $500 over $100k bids
                    </h6>
                </AccordianFaq>
                <AccordianFaq title="What happens when the auction is over? How do I complete the purchase?" classes="mt-3  cursor-pointer">
                    <h6 className="f-400 l-28 m-0 secondary-font mt-1">All bids and auction prices are ONLY in the US Dollar currency, because of the familiarity of that currency’s value, because some buyers prefer to pay by US DOLLARS. During the duration of the auction, the bidders and sellers don’t have to worry about crypto value fluctuations, and focus only on the US DOLLARS equivalent of the car value.
                        $250 increments under $100k, and $500 over $100k bids
                    </h6>
                </AccordianFaq>
            </div>
            <div className="">
                <h3 className="f-600">Seller FAQs</h3>
                <AccordianFaq title="What are the buyers fess ?" classes=" cursor-pointer">
                    <h6 className="f-400 l-28 m-0 secondary-font mt-1">All bids and auction prices are ONLY in the US Dollar currency, because of the familiarity of that currency’s value, because some buyers prefer to pay by US DOLLARS. During the duration of the auction, the bidders and sellers don’t have to worry about crypto value fluctuations, and focus only on the US DOLLARS equivalent of the car value.
                        $250 increments under $100k, and $500 over $100k bids
                    </h6>
                </AccordianFaq>
                <AccordianFaq title="How do I register to bid?" classes="mt-3 cursor-pointer">
                    <h6 className="f-400 l-28 m-0 secondary-font mt-1">All bids and auction prices are ONLY in the US Dollar currency, because of the familiarity of that currency’s value, because some buyers prefer to pay by US DOLLARS. During the duration of the auction, the bidders and sellers don’t have to worry about crypto value fluctuations, and focus only on the US DOLLARS equivalent of the car value.
                        $250 increments under $100k, and $500 over $100k bids
                    </h6>
                </AccordianFaq>
                <AccordianFaq title="How do I place a bid?" classes="mt-3 cursor-pointer">
                    <h6 className="f-400 l-28 m-0 secondary-font mt-1">All bids and auction prices are ONLY in the US Dollar currency, because of the familiarity of that currency’s value, because some buyers prefer to pay by US DOLLARS. During the duration of the auction, the bidders and sellers don’t have to worry about crypto value fluctuations, and focus only on the US DOLLARS equivalent of the car value.
                        $250 increments under $100k, and $500 over $100k bids
                    </h6>
                </AccordianFaq>
                <AccordianFaq title="What are the bid increments?" classes="mt-3 cursor-pointer">
                    <h6 className="f-400 l-28 m-0 secondary-font mt-1">All bids and auction prices are ONLY in the US Dollar currency, because of the familiarity of that currency’s value, because some buyers prefer to pay by US DOLLARS. During the duration of the auction, the bidders and sellers don’t have to worry about crypto value fluctuations, and focus only on the US DOLLARS equivalent of the car value.
                        $250 increments under $100k, and $500 over $100k bids
                    </h6>
                </AccordianFaq>
                <AccordianFaq title="Can I bid if I live outside of the United States?" classes="mt-3 cursor-pointer">
                    <h6 className="f-400 l-28 m-0 secondary-font mt-1">All bids and auction prices are ONLY in the US Dollar currency, because of the familiarity of that currency’s value, because some buyers prefer to pay by US DOLLARS. During the duration of the auction, the bidders and sellers don’t have to worry about crypto value fluctuations, and focus only on the US DOLLARS equivalent of the car value.
                        $250 increments under $100k, and $500 over $100k bids
                    </h6>
                </AccordianFaq>
                <AccordianFaq title="How do I contact the seller?" classes="mt-3 cursor-pointer">
                    <h6 className="f-400 l-28 m-0 secondary-font mt-1">All bids and auction prices are ONLY in the US Dollar currency, because of the familiarity of that currency’s value, because some buyers prefer to pay by US DOLLARS. During the duration of the auction, the bidders and sellers don’t have to worry about crypto value fluctuations, and focus only on the US DOLLARS equivalent of the car value.
                        $250 increments under $100k, and $500 over $100k bids
                    </h6>
                </AccordianFaq>
                <AccordianFaq title="Will OmniSea automatically bid UP to my maximum bid?" classes="mt-3 cursor-pointer">
                    <h6 className="f-400 l-28 m-0 secondary-font mt-1">All bids and auction prices are ONLY in the US Dollar currency, because of the familiarity of that currency’s value, because some buyers prefer to pay by US DOLLARS. During the duration of the auction, the bidders and sellers don’t have to worry about crypto value fluctuations, and focus only on the US DOLLARS equivalent of the car value.
                        $250 increments under $100k, and $500 over $100k bids
                    </h6>
                </AccordianFaq>
                <AccordianFaq title="Do you place a hold on my credit card when I bid?" classes="mt-3  cursor-pointer">
                    <h6 className="f-400 l-28 m-0 secondary-font mt-1">All bids and auction prices are ONLY in the US Dollar currency, because of the familiarity of that currency’s value, because some buyers prefer to pay by US DOLLARS. During the duration of the auction, the bidders and sellers don’t have to worry about crypto value fluctuations, and focus only on the US DOLLARS equivalent of the car value.
                        $250 increments under $100k, and $500 over $100k bids
                    </h6>
                </AccordianFaq>
               
                <AccordianFaq title="How do I make the transaction safer and less stressful?" classes="mt-3  cursor-pointer">
                    <h6 className="f-400 l-28 m-0 secondary-font mt-1">All bids and auction prices are ONLY in the US Dollar currency, because of the familiarity of that currency’s value, because some buyers prefer to pay by US DOLLARS. During the duration of the auction, the bidders and sellers don’t have to worry about crypto value fluctuations, and focus only on the US DOLLARS equivalent of the car value.
                        $250 increments under $100k, and $500 over $100k bids
                    </h6>
                </AccordianFaq>
            </div>
        </div>
        </>
    )
}

export default Faqs;