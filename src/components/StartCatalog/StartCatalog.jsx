import heart from '/public/Catalog/heart.png'
import plus from '/public/Catalog/+.png'
import tow from '/public/Catalog/tow.png'
import Card from '../Card/Card'

import {catalog} from '../../pages/data.js'

import {Link} from 'react-router-dom'

export default function Header() {
 return(
     <section className="startCatalog">
         <div className="container">
             <div className="sContainer">
                 {catalog.map((card) =>{
                     return(
                         <Card name={card.name} price={card.price}/>
                     )
                 })}
                 
                 <Card name="Футболка" price="5000"/>
                 <Card name="Свитер" price="Бесценно"/>
             </div>
         </div>
     </section>
 )
}