export default function ErrorPage(){
    return (
        <div className="container d-flex d-align-center d-flex-column">
            <img src="images/error.png" className="mt-284"/>
            <h2 className="f-600 l-40 text-light-grey mt-5">Page not found</h2>
            <button className="btn mt-3 btn-modal btn-primary">Back to Home</button>
        </div>
    );
}