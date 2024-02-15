import heart from '/public/Catalog/heart.png'
import plus from '/public/Catalog/+.png'
import tow from '/public/Catalog/tow.png'



export default function Card({name,price}){
    return(

        <div className="tow">
            <img src={tow} alt="" />
            <h2>{name}</h2>
            <div className="towtow">
                <p className="price">{price} ₱</p>
                <div className="nad">
                    <img src={heart} alt="" />
                <img src={plus} alt="" />
                </div>
            </div>
        </div>
    )
}