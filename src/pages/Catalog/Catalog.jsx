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
                {catalog.map((card,index) =>{
                     return(
                         <Card key={index} {...card}/>
                     )
                 })}
             </div>
         </div>
     </section>        
    )
}