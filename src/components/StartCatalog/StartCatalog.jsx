import heart from '/public/Catalog/heart.png'
import plus from '/public/Catalog/+.png'
import tow from '/public/Catalog/tow.png'


import {Link} from 'react-router-dom'

export default function Header() {
 return(
     <section className="startCatalog">
         <div className="container">
             <div className="sContainer">
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