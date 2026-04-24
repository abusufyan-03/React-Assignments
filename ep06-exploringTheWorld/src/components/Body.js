import resList from "../utils/resList";
import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
const Body = () => {
    const [restaurantList, setRestaurantList] = useState([])

    useEffect(() =>{
    // console.log("useEffect get called!")
    fetchData();
}, []);

const fetchData = async ()=> {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING');

    const json = await data.json();
    console.log(json);

    setRestaurantList(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    console.log(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants)
}

// console.log("Body called")
    return(
        <main className="main">
            <section>
                <div className="search-container">
                    <input className="search-bar" type="search" placeholder="search..."/>
                    <button className="search-btn btn">Search</button>
                    <button className="filter-btn btn"
                    onClick={()=>{
                        const filterRestaurant = restaurantList.filter((res)=> res.info.avgRating > 4 )
                        setRestaurantList(filterRestaurant);
                        console.log(filterRestaurant)
                    }}
                    
                    >Top Rated Restaurant</button>
                </div>
                <div className="restaurant-container">
                    {restaurantList.map((restaurant, index)=><RestaurantCards key={index} resData={restaurant}/>)}
                </div>
            </section>
        </main>
    )
}

export default Body;