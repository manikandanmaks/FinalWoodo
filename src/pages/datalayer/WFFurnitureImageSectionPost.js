import React from 'react'

const VSFooterAddressPost = ({ FurnitureImage }) => {
    const {
        furnitureImage, title, price, description, companyName
    } = FurnitureImage.fields
    return (
        <div className="col-md-3">
            <div className="image_6">
                <img src={furnitureImage.fields.file.url} alt="Furniture" />
                <div className="furniture features">
                    <p className="FurnitureName">{title}</p>
                    <p><span className="pricename">Price : </span><span className="price">${price}</span></p>
                    <span className="company">{companyName} </span> <button variant="primary" type="submit" className="buynow">Buy Now</button>
                </div>
            </div>
        </div>
    )

}
export default VSFooterAddressPost