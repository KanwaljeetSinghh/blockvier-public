import GradienButton from "./Gradient-Button";

function SellingCard(props){
    return (
        <div className="rounded border odd-padding">
            <button className="badge-success"> Step 1 </button>
            <h4 className="mt-2 secondary-font f-600">Set up your account</h4>
            <h5 className="secondary-font f-400 text-grey m-0">Once you’ve set up your wallet of choice, connect it to OmniSea by clicking the wallet icon in the top right corner.</h5>
        </div>
    )
}

export default SellingCard;