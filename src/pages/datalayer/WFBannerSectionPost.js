import React from 'react'
import linr from '../../images/linr-icon.png';
import img2 from '../../images/img-2.png';
import img1 from '../../images/img-1.png';


const WFBannerSectionPost = ({ Banner }) => {
    const {
        orderId, furnitureYear, trendsText, furnitureText, description
    } = Banner.fields
    return (
        <div className="each-slide">
            <div className="carousel-item active">
                <div className="row">
                    <div className="col-sm-1">
                        <p className="number_tetx">02/3</p>
                        <div className="line"><img src={linr} alt="linr" /></div>
                        <p className="number_tetx">02/3</p>
                        {/* <div className="left_img"><img src={img2} alt="table" /></div> */}
                    </div>
                    <div className="col-sm-5">
                        <h1 className="furniture_text">{furnitureYear}</h1>
                        <h1 className="trends_text">{trendsText}</h1>
                        <h1 className="furniture_text">{furnitureText}</h1>
                        <p className="lorem_text">{description} </p>
                        <button className="more_bt">MORE INFO</button>
                        <button className="furniture_bt">FURNITURE</button>
                    </div>
                    <div className="col-sm-6">
                        <div><img src={img1} alt="table" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WFBannerSectionPost