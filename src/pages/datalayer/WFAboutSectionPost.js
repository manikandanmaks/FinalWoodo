const WFAboutSectionPost = ({ About }) => {
    const {
        title, marketText, description, aboutImage
    } = About.fields
    return (
        <div className="container">
            <h1 className="about_taital">About <span style={{backgroundColor: "#fee421", color: "#fff", padding: "0px 5px"}}>Us</span></h1>
            <p className="market_text">{marketText}</p>
            <div className="about_bg">
                <div className="row">
                    <div className="col-md-8">
                        <p className="about_long_text">{description}</p>
                        <button className="about_bt">ABOUT MORE</button>
                    </div>
                    <div className="col-md-4">
                        <div className="table_img"><img src={aboutImage.fields.file.url} alt="table"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WFAboutSectionPost;