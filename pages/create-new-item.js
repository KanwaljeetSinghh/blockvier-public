import { useState,useEffect } from "react";
import SectionHeading from "../modules/Section-Heading";
import styles from '../modules/css/create-new-item.module.css';
import ImageIconaccount from "../icons/Image-icon-account";
import Checkbox from "../modules/Check-Box";
import Plus from "../icons/Plus";
export default function CreateNewItem(){

    const[tab,setTab] = useState(0);

    const setTabOneHandler = () =>{
        setTab(1);
    }
    const setTabZeroHandler = () =>{
        setTab(0);
    }
    return (
        <div className="container mt-5">
            <div className={`col-6 offset-3 mt-4  ${styles["create-item"]}`}>
                {tab==0 && <SectionHeading title="Create" highlighted-title="new item"></SectionHeading>}
                {tab==1 && <SectionHeading title="Create" highlighted-title="a new listing"></SectionHeading>}

                <h5 className={`text-grey f-500 secondary-font ${styles['heading']}`}>Connect with one of our available wallet providers or please create a new one.</h5>
                <h6 className="f-500 text-danger mt-3">*Required fields</h6>
                <div className="bg-smoke rounded p-1 d-flex d-justify-space-between mb-4">
                    <div type="0" className={`d-flex tab ${styles["personal"]} ${styles['active']}`} onClick={setTabZeroHandler}>
                        <div className={`${styles["circle"]}`}></div>
                        <div>
                            <h5 className="f-600 mb-0 secondary-font">Physical product</h5>
                            <h6 className="f-500 mb-0 secondary-font">e.g. Gaming assets, NFT art & NFT music</h6>
                        </div>
                    </div>
                    <div type="1" className={`d-flex tab ${styles["business"]}`} onClick={setTabOneHandler}>
                        <div className={`${styles["circle"]}`}></div>
                        <div>
                            <h5 className="f-600 mb-0 secondary-font">Digital product</h5>
                            <h6 className="f-500 mb-0 secondary-font">e.g. Gaming assets, NFT art & NFT music</h6>
                        </div>
                    </div>
                </div>
                {tab ==0 &&
                <>
                <div className="border-bottom-dashed pb-5 d-flex d-flex-column">
                    <label>Choose Category<span className="text-danger">*</span></label>
                    <select>    
                        <option>Select</option>
                        <option>Select</option>
                        <option>Select</option>
                    </select>  
                    <label>Title of the product<span className="text-danger">*</span></label>
                    <input type="text" placeholder="enter product name"/>
                    <label>Upload files<span className="text-danger">*</span></label>
                    <h6 className="f-500 l-22 text-grey secondary-font mb-0">Accepted formats - Image: JPG, PNG, SVG, GIF ; Video: MP4, WEBM ; Audio: MP3, WAV</h6>
                    <div className={`border-dashed d-flex d-flex-column d-align-center bg-smoke ${styles["upload-section"]}`}>
                        <div className="d-flex gap-8">
                            <ImageIconaccount></ImageIconaccount>
                            <ImageIconaccount></ImageIconaccount>
                            <ImageIconaccount></ImageIconaccount>
                        </div>
                        <h6 className="f-500 text-grey mb-0 mt-3 secondary-font">Drag & drop file</h6>
                        <h6 className="f-500 secondary-font mb-0">or browse media on your device</h6>
                    </div>
                    <label>Description of the product<span className="text-danger">*</span></label>
                    <textarea placeholder="Enter product description" rows="3"></textarea>
                    <label>Enter product location<span className="text-danger">*</span></label>
                    <input type="text" placeholder="enter product location"/>
                    <label>Choose blockchain<span className="text-danger">*</span></label>
                    <select>    
                        <option>Select</option>
                        <option>Select</option>
                        <option>Select</option>
                    </select>  
                </div>
                <div className="mt-5 d-flex d-flex-column">
                    <label >Card graded by<span className="text-danger">*</span></label>
                    <div className={`d-flex d-align-center mt-3 mb-4 ${styles["grade"]}`}>
                        <input type="radio" name="grade"/>
                        <label>None</label>
                        <input type="radio" className="ml-4" name="grade"/>
                        <label>PSA</label>
                        <input type="radio" className="ml-4" name="grade"/>
                        <label>Backett</label>
                        <input type="radio" className="ml-4" name="grade"/>
                        <label>Other</label>
                    </div>
                    <label>Card grade<span className="text-danger">*</span></label>
                    <select>    
                        <option>Select</option>
                        <option>Select</option>
                        <option>Select</option>
                    </select>
                    <label>Card serial no<span className="text-danger">*</span></label>
                    <select>    
                        <option>Select</option>
                        <option>Select</option>
                        <option>Select</option>
                    </select>
                    <label>Year manufactured<span className="text-danger">*</span></label>
                    <input type="number" placeholder="Enter year"/>
                    <button className="btn btn-default-width btn-primary mt-5">Create</button>
                </div>
                </>}
                {tab == 1 &&
                
                <div className=" pb-5 d-flex d-flex-column">
                    <label>Choose Category<span className="text-danger">*</span></label>
                    <select>    
                        <option>Select</option>
                        <option>Select</option>
                        <option>Select</option>
                    </select>  
                    <label>Title of the product<span className="text-danger">*</span></label>
                    <input type="text" placeholder="Enter product name"/>
                    <label>Upload files<span className="text-danger">*</span></label>
                    <h6 className="f-500 l-22 text-grey secondary-font mb-0">Accepted formats - Image: JPG, PNG, SVG, GIF ; Video: MP4, WEBM ; Audio: MP3, WAV</h6>
                    <div className={`border-dashed d-flex d-flex-column d-align-center bg-smoke ${styles["upload-section"]}`}>
                        <div className="d-flex gap-8">
                          <ImageIconaccount></ImageIconaccount>
                          <ImageIconaccount></ImageIconaccount>
                          <ImageIconaccount></ImageIconaccount>
                        </div>
                        <h6 className="f-500 text-grey mb-0 mt-3 secondary-font">Drag & drop file</h6>
                        <h6 className="f-500 secondary-font mb-0">or browse media on your device</h6>
                    </div>
                    <label>Description of the product<span className="text-danger">*</span></label>
                    <textarea placeholder="Enter product description" rows="3"></textarea>
                    <label>Choose blockchain<span className="text-danger">*</span></label>
                    <select>    
                        <option>Select</option>
                        <option>Select</option>
                        <option>Select</option>
                    </select> 
                    <div className="mb-3">
                        <div className="d-flex d-align-center d-justify-space-between">
                            <h5 className="f-600 m-0 secondary-font">Explicit & Sensitive Content</h5>
                            <Checkbox></Checkbox>
                        </div>
                        <h6 className="f-400 m-0 mt-1  secondary-font">Set this item as explicit and sensitive content</h6>
                    </div> 
                    <label>External link</label>
                    <h6 className="f-500 text-grey secondary-font mb-0 mb-1">We will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</h6>
                    <input type="text" placeholder="Enter website link"/>
                    <div className="mb-3 d-flex d-align-center d-justify-space-between">
                        <div className="">
                            <h5 className="f-600 m-0 secondary-font">Properties</h5>
                            <h6 className="f-400 m-0 mt-1  secondary-font">Textual traits that show up as rectangles</h6>
                        </div>
                        <div className="bg-smoke p-2 d-flex d-align-center d-justify-center"><Plus></Plus></div>
                    </div> 
                    <div className="mb-3">
                        <div className="d-flex d-align-center d-justify-space-between">
                            <h5 className="f-600 m-0 secondary-font">Levels</h5>
                            <Checkbox></Checkbox>
                        </div>
                        <h6 className="f-400 m-0 mt-1  secondary-font">Numerical traits that show as a progress bar</h6>
                    </div> 
                    <div className="mb-3">
                        <div className="d-flex d-align-center d-justify-space-between">
                            <h5 className="f-600 m-0 secondary-font">Stats</h5>
                            <Checkbox></Checkbox>
                        </div>
                        <h6 className="f-400 m-0 mt-1  secondary-font">Numerical traits that just show as numbers</h6>
                    </div> 
                    <button className="btn btn-default-width btn-primary mt-5">Create</button>
                </div>
              }
            </div>
        </div>
    );
}