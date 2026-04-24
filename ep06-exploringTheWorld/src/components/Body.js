import resList from "../utils/resList";
import RestaurantCards from "./RestaurantCards";
import { useState } from "react";
const Body = () => {
    const [restaurantList, setRestaurantList] = useState(resList)
    return(
        <main className="main">
            <section>
                <div className="search-container">
                    <input className="search-bar" type="search" placeholder="search..."/>
                    <button className="search-btn btn">Search</button>
                    <button className="filter-btn btn"
                    onClick={()=>{
                        const filterRestaurant = restaurantList.filter((res)=> res.data.avgRating > 4 )
                        setRestaurantList(filterRestaurant);
                    }}
                    
                    >Top Rated Restaurant</button>
                </div>
                <div className="restaurant-container">
                    {restaurantList.map((restaurant, index)=><RestaurantCards key={restaurant.data.id} resData={restaurant}/>)}
                </div>
            </section>
        </main>
    )
}

export default Body;