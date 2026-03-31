import resList from '../utils/resList.js'
import RestaurantCards from './RestaurantCards.js'
import { useState } from 'react';
const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    return (
        <main className="main">
            <section>
                <div className="search-container">
                    <input className="search-bar" type="text" placeholder="search..." />
                    <button className="search-btn">Search</button>
                    <button className='filter-btn' 
                    onClick={()=>{
                         /* Filter logic */
                         const filterRestaurant = listOfRestaurant.filter((res)=> res.data.avgRating>4)
                         setListOfRestaurant(filterRestaurant);
                    }}>
                    Top rated Restaurant</button>
                </div>
                <div className="restaurant-container">
                    {listOfRestaurant.map((restaurant)=><RestaurantCards key={restaurant.data.id} resData={restaurant}/>)}
                </div>
            </section>
        </main>
    )
}

export default Body;