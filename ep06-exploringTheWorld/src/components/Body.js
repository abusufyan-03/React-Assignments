import resList from "../utils/resList";
import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [restaurantList, setRestaurantList] = useState([])
    const [searchText, setSearchText] = useState('');

    useEffect(() =>{
    // console.log("useEffect get called!")
    fetchData();
}, []);

const fetchData = async ()=> {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING');

    const json = await data.json();
    console.log(json);

    setRestaurantList(json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    console.log(json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants)
}

/* *Conditional rendering */
// if(restaurantList.length == 0){
//     return(
//         <Shimmer/>
//     )
// }
// console.log("Body called")
    return restaurantList.length==0? <Shimmer/>: (
        <main className="main">
            <section>
                <div className="search-container">
                    <input 
                    className="search-bar"
                    id="search"
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                        console.log(searchText)
                    }}
                    type="text" 
                    placeholder="search..."/>
                    <button className="search-btn btn"
                    onClick={()=>{
                        let searchedRestaurant = restaurantList.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setRestaurantList(searchedRestaurant)

                        console.log(searchText)
                        console.log(searchedRestaurant)
                    }}
                    >Search</button>
                    <button className="filter-btn btn"
                    onClick={()=>{
                        const filterRestaurant = restaurantList.filter((res)=> res.info.avgRating > 4 )
                        setRestaurantList(filterRestaurant);
                        console.log(filterRestaurant)
                        console.log('filter btn clicked')
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