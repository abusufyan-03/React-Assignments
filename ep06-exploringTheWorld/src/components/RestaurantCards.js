import "../style.css"
import {CDN_URL}  from "../utils/constant.js"
const RestaurantCards = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info.sla
    return (
        <div className="res-card">
            <div className="res-media">
                <img className="res-img" src={CDN_URL + cloudinaryImageId}/>
                {/* <div className="dumyImg"></div> */}
            </div>
            <div className="res-info">
                <p className="res-name">{name}</p>
                <p className="res-cuisine">{cuisines.join(', ')}</p>
                <p className="res-rating">{avgRating}</p>
                <p className="res-price">{costForTwo}</p>
                <p className="res-deliveryTime">{deliveryTime} Min</p>
            </div>
        </div>
    )
}

export default RestaurantCards;