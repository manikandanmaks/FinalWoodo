import React from 'react'

const VSFooterAddressPost = ({ Furniture }) => {
    const {
        title,description
    } = Furniture.fields
    return (
        <div className="container">
			<h1 className="about_taital">Our <span style={{backgroundColor: "#fee421", color: "#fff",padding: "0px 5px"}}>Funitures</span></h1>
			<p className="market_text">{description}</p>
		</div>
    )

}
export default VSFooterAddressPost