import '../../index.css'

import heart from '/public/Catalog/heart.png'
import plus from '/public/Catalog/+.png'
import tow from '/public/Catalog/tow.png'
import Card from '../../components/Card/Card'

import {catalog} from '../../pages/data.js'

export default function CatalogPage (){
    return(
        <section className="startCatalog">
         <div className="container">
             <h1 className='catalog_title'>Страница каталога</h1>
             <div className="cContainer">
                {catalog.map((card) =>{
                    return(
                        <Card name={card.name} price={card.price}/>
                    )
                })}
                <Card name="Рубашка" price="1 999"/>
                <Card name="Рубашка тип 2" price="2 999"/>
                <Card name="Рубашка тип 3" price="3 999"/>
                <Card name="Рубашка тип 4" price="4 999"/>
                <Card name="Рубашка тип 5" price="5 999"/>
                <Card name="Рубашка тип 6" price="6 999"/>
                <Card name="Рубашка тип 7" price="7 999"/>
             </div>
         </div>
     </section>        
    )
}