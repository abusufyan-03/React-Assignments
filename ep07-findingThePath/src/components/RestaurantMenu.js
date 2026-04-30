import { useState, useEffect } from "react";
import { RES_MENU_API } from "../utils/constant";
import { useParams } from "react-router";
import { CDN_SMALL } from "../utils/constant";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState([]);
    const [openResInfo, setOpenResInfo] = useState({});

    const redId = useParams();
    console.log(redId)
    const toggleCategories = (catIndex)=>{
        setOpenResInfo((prev)=>({
            ...prev,
            [catIndex]: !prev[catIndex]
        }))
    }
    useEffect(() => {
        fetchResMenuData();
    }, [])
    const fetchResMenuData = async () => {
        // const data = await fetch(`${RES_MENU_API + 774091}`)

        try {
            const data = await fetch(RES_MENU_API + redId.id);
            console.log('Status', data.status);
            console.log('Headers:', data.headers);
            const json = await data.json();
            console.log('Json Response', json)

            if (!json) {
                console.error('Empty Response recieved')
                return;
            }
            console.log(json)
            setResInfo(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[5].card.card.categories)
            // console.log("ResInfo:", resInfo)
        } catch (error) {
            console.error("Error", error)
        }
    }
    return(

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