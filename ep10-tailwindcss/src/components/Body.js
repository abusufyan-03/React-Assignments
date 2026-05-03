import resList from "../utils/resList";
import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { RES_API } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filterRestaurant, setFilterRestaurant] = useState([]);

    useEffect(() => {
        // console.log("useEffect get called!")
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_API);

        const json = await data.json();
        console.log(json);

        setRestaurantList(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilterRestaurant(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        console.log(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    /* *Conditional rendering */
    // if(restaurantList.length == 0){
    //     return(
    //         <Shimmer/>
    //     )
    // }
    // console.log("Body called")

    const handleSearch = () => {
        let searchedRestaurant = restaurantList.filter((res) => {
            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setFilterRestaurant(searchedRestaurant)
    }
    const onlineStatus = useOnlineStatus();
    // console.log("online status:", onlineStatus)

    if(onlineStatus == false) return <h1>Look like you're offline</h1>

    return restaurantList.length == 0 ? <Shimmer /> : (
        <main className="main">
            <section>
                <div className="search-container">
                    <input
                        className="search-bar"
                        id="search"
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            console.log(searchText)
                        }}
                         onKeyPress={(e)=>{
                            if(e.key === 'Enter'){
                                handleSearch();
                            }
                        }}
                        type="text"
                        placeholder="search..." />
                    <button className="search-btn btn"
                    onClick={()=>{
                        handleSearch();
                    }}
                    >Search</button>
                    <button className="filter-btn btn"
                        onClick={() => {
                            const filterRestaurant = restaurantList.filter((res) => res.info.avgRating > 4.5)
                            setFilterRestaurant(filterRestaurant);
                        }}

                    >Top Rated Restaurant</button>
                </div>
                <div className="restaurant-container">
                    {filterRestaurant.map((restaurant, index) => <Link key={restaurant.info.id}   to={`restaurants/${restaurant.info.id}`}><RestaurantCards resData={restaurant} /></Link> )}
                </div>
            </section>
        </main>
    )
}

export default Body;