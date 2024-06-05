import './Mainbody.css';

const Mainbody = () => {
    return (
        <div className="main-body">
            <div className="text">
                <h2 className="title">YOUR FEET</h2>
                <h2 className="title">DESERVE</h2>
                <h2 className="title">THE BEST</h2>
                <p className="tagline">
                    OUR FEET DESERVE THE BEST AND WE'RE HERE TO
                    HELP YOU WITH OUR SHOES.YOUR FEET DESERVE
                    HE BEST AND WE'RE HERE TO HELP YOU WITH OUR
                    SHOES.
                </p>
                <button className="shop-now">Shop Now</button>
                <button className="know-more">Know More</button>
            </div>
            <div className="photo"><img src="./../../../public/images/shoe_image.png" alt="shoe" className='shoe-image'/></div>
        </div>
    )
}

export default Mainbody;