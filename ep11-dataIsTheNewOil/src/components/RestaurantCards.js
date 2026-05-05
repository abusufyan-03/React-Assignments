// import "../style.css"
import {CDN_URL}  from "../utils/constant.js"
const RestaurantCards = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info.sla
    return (
        <div className="res-card bg-slate-50 rounded-lg shadow-lg border">
            <div className="res-media">
                <img className="res-img w-full h-40 object-cover rounded-t-lg" src={CDN_URL + cloudinaryImageId}/>
                {/* <div className="dumyImg"></div> */}
            </div>
            <div className="res-info px-4 text-sm pb-4">
                <p className="res-name text-xl font-semibold mt-2">{name}</p>
                <p className="res-cuisine mb-3">{cuisines.join(', ')}</p>
                <p className="res-rating">{avgRating}</p>
                <p className="res-price">{costForTwo}</p>
                <p className="res-deliveryTime">{deliveryTime} Min</p>
            </div>
        </div>
    )
}

export default RestaurantCards;