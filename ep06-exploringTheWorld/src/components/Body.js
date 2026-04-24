import resList from "../utils/resList";
import RestaurantCards from "./RestaurantCards";
const Body = () => {
    return(
        <main className="main">
            <section>
                <div className="search-container">
                    <input className="search-bar" type="search" placeholder="search..."/>
                    <button className="search-btn btn">Search</button>
                    <button className="filter-btn btn">Top Rated Restaurant</button>
                </div>
                <div className="restaurant-container">
                    {resList.map((restaurant, index)=><RestaurantCards key={restaurant.data.id} resData={restaurant}/>)}
                </div>
            </section>
        </main>
    )
}

export default Body;