import heart from '/public/Catalog/heart.png'
import plus from '/public/Catalog/+.png'
import tow from '/public/Catalog/tow.png'


import { Link } from 'react-router-dom'

export default function Card({name,price,id}){
    return(
        <div className="tow">
            <img src={tow} alt="" />
            <h2>{name}</h2>
            <div className="towtow">
                <p className="price">{price} ₱</p>
                <div className="nad">
                    <Link to={`/catalog/${id}`}>Подробнее</Link>
                    <img src={heart} alt="" />
                    <img src={plus} alt="" />
                </div>
            </div>
        </div>
    )
}