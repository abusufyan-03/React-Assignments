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
                    <RestaurantCards resData={resList[0]}/>
                    <RestaurantCards resData={resList[1]}/>
                    <RestaurantCards resData={resList[2]}/>
                    <RestaurantCards resData={resList[3]}/>
                    <RestaurantCards resData={resList[4]}/>
                    <RestaurantCards resData={resList[5]}/>
                    <RestaurantCards resData={resList[6]}/>
                    <RestaurantCards resData={resList[7]}/>
                    <RestaurantCards resData={resList[8]}/>
                    <RestaurantCards resData={resList[9]}/>
                </div>
            </section>
        </main>
    )
}

export default Body;