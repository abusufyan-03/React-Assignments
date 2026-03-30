import resList from '../utils/resList.js'
import RestaurantCards from './RestaurantCards.js'
const Body = () => {
    return (
        <main className="main">
            <section>
                <div className="search-container">
                    <input className="search-bar" type="text" placeholder="search..." />
                    <button className="search-btn">Search</button>
                </div>
                <div className="restaurant-container">
                    {resList.map((restaurant)=><RestaurantCards key={restaurant.data.id} resData={restaurant}/>)}
                </div>
            </section>
        </main>
    )
}

export default Body;