import headerLogo from '/public/Header/logo.png'
import ch from '/public/Header/ch.png'
import ic1 from '/public/Header/ic1.png'
import ic2 from '/public/Header/ic2.png'
import ic3 from '/public/Header/ic3.png'
export default function Header() {
 return(
     <header>
         <div className="container">
            <div className="h-main">
                <div className="h-content">
                    <img src={headerLogo} className="headerLogo" />
                    <nav className="header_nav">
                        <img src={ch} className="headerLogo" />
                        <a href="">ГЛАВНАЯ</a>
                        <a href="">КАТАЛОГ</a>
                        <img src={ch} className="headerLogo" />
                        <a href="">ИНФОРМАЦИЯ</a>
                    </nav>
                </div>
                <div className="h-icons">
                    <a href=""><img src={ic1} className="headerLogo" /></a>
                    <a href=""><img src={ic2} className="headerLogo" /></a>
                    <a href=""><img src={ic3} className="headerLogo" /></a>
                </div>
            </div>
         </div> 
     </header>
 )
}