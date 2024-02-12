import headerLogo from '/public/Banner/banner.png'
import logo from '/public/Header/logo-b.png'

export default function Banner(){
    return(
        <section className="banner">
            <div className="container">
                <div className="banner-content">
                    <img src={logo} alt="" />
                    <h1>БРЕНД ОДЕЖДЫ</h1>
                    <button className="banner-btn">ПЕРЕЙТИ В КАТЕГОРИИ</button>
                </div>
            </div>
        </section>
    )
}