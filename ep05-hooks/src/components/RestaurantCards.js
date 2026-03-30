import { CDN_URL } from '../utils/constant.js'
const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, cloudinaryImageId, costForTwoString, slaString, avgRating } = resData?.data
    return (
        <>
        <div className="res-card">
            <div className="res-media">
                <img src={CDN_URL + cloudinaryImageId} />
            </div>
            <div className="res-info">
            <p className="res-name">{name}</p>
            <p className="cuisine">{cuisines.join(', ')}</p>
            <p className="res-rating">{avgRating}</p>
            <p className="res-price">{costForTwoString}</p>
            <p className="deliveryTime">{slaString}</p>
        </div>
        </div>
        </>
    )
}

export default RestaurantCard;