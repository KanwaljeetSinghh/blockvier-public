import BannerTitle from "./Banner-Title";
import BannerSlider from "./Banner-Slider";
function Banner(){
    return (
        <div className="container-large d-flex d-wrap pt-5 d-justify-space-between">
            <div className="col-4 offset-1">
                <BannerTitle></BannerTitle>
            </div>
            <div className="col-6">
                <BannerSlider></BannerSlider>
            </div>
        </div>
    )
}

export default Banner;