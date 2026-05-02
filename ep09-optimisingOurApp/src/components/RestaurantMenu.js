import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import { useParams } from "react-router";
import { CDN_SMALL } from "../utils/constant";
import useRestaurantMenuData from "../utils/useRestaurantMenuData"
import { useState } from "react";
const RestaurantMenu = () => {
    const [openResInfo, setOpenResInfo] = useState({});

    const resId = useParams();
    // console.log(resId)
    const toggleCategories = (catIndex)=>{
        setOpenResInfo((prev)=>({
            ...prev,
            [catIndex]: !prev[catIndex]
        }))
    }
    
    const resInfo = useRestaurantMenuData(resId);
    // console.log("resInfo", resInfo)


    return resInfo.length===0? <RestaurantMenuShimmer/>: (
        <>
            <div className="menu-card">

                {resInfo.map((categories, catIndex) => (
                    <div className="categoroy-section" key={catIndex}>
                        <div className={`category-header ${openResInfo[catIndex]? "active": ''}`}  onClick={()=>toggleCategories(catIndex)}>
                            <h2 className={`item-title ${openResInfo[catIndex]? "active": ''} `}>{categories.title} </h2><span className="open-icon">{openResInfo[catIndex]? "▲" : "▼"}</span>
                        </div>
                        <div className={`item-list ${openResInfo[catIndex]? "active": ''}`}>
                            {categories.itemCards?.map((item, itemIndex) => (
                                <div key={itemIndex} className={`item-card`}>
                                    <div className="item-info" key={itemIndex}>
                                        <div className="name-price">
                                            <h3 className="item-name">{item.card.info.name}</h3>
                                            <span className="item-price">{`₹${item.card.info.defaultPrice/100}`}</span>
                                        </div>
                                        <p className="item-description">{item.card.info.description}</p>
                                    </div>
                                    <div className="item-image-container">
                                        <img className="item-image" src={`${CDN_SMALL}/${item.card.info.imageId}`} />
                                        <button className="add-btn">Add +</button>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default RestaurantMenu;