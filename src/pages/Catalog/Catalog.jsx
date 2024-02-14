import '../../index.css'

import heart from '/public/Catalog/heart.png'
import plus from '/public/Catalog/+.png'
import tow from '/public/Catalog/tow.png'

export default function CatalogPage (){
    return(
        <section className="startCatalog">
         <div className="container">
             <h1 className='catalog_title'>Страница каталога</h1>
             <div className="cContainer">
                 <div className="tow">
                     <img src={tow} alt="" />
                     <h2>Рубашка</h2>
                     <div className="towtow">
                         <p className="price">9999 ₱</p>
                         <div className="nad">
                              <img src={heart} alt="" />
                            <img src={plus} alt="" />
                         </div>
                     </div>
                 </div>
                 <div className="tow">
                     <img src={tow} alt="" />
                     <h2>Рубашка</h2>
                     <div className="towtow">
                         <p className="price">9999 ₱</p>
                         <div className="nad">
                              <img src={heart} alt="" />
                            <img src={plus} alt="" />
                         </div>
                     </div>
                 </div>
                 <div className="tow">
                     <img src={tow} alt="" />
                     <h2>Рубашка</h2>
                     <div className="towtow">
                         <p className="price">9999 ₱</p>
                         <div className="nad">
                              <img src={heart} alt="" />
                            <img src={plus} alt="" />
                         </div>
                     </div>
                 </div>
                 <div className="tow">
                     <img src={tow} alt="" />
                     <h2>Рубашка</h2>
                     <div className="towtow">
                         <p className="price">9999 ₱</p>
                         <div className="nad">
                              <img src={heart} alt="" />
                            <img src={plus} alt="" />
                         </div>
                     </div>
                 </div>
                 <div className="tow">
                     <img src={tow} alt="" />
                     <h2>Рубашка</h2>
                     <div className="towtow">
                         <p className="price">9999 ₱</p>
                         <div className="nad">
                              <img src={heart} alt="" />
                            <img src={plus} alt="" />
                         </div>
                     </div>
                 </div>
                 <div className="tow">
                     <img src={tow} alt="" />
                     <h2>Рубашка</h2>
                     <div className="towtow">
                         <p className="price">9999 ₱</p>
                         <div className="nad">
                              <img src={heart} alt="" />
                            <img src={plus} alt="" />
                         </div>
                     </div>
                 </div>
                 <div className="tow">
                     <img src={tow} alt="" />
                     <h2>Рубашка</h2>
                     <div className="towtow">
                         <p className="price">9999 ₱</p>
                         <div className="nad">
                              <img src={heart} alt="" />
                            <img src={plus} alt="" />
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </section>        
    )
}