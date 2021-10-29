import Hamburger from './Hamburger/Hamburger'
import style from './navbar.module.scss'

export default function NavBar () {
    

    return (
        <nav className={style.nav}>
            <img className={style.logo} src="/img/HDF.svg"/>
            <Hamburger/>
        </nav>
    )
}