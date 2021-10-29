import gsap from 'gsap'
import { useContext, useEffect, useRef } from 'react'
import { MenuContext } from '../../../../context/MenuContext'
import style from './menu.module.scss'

export default function Menu () {
    const [menu, setMenu] = useContext(MenuContext)
    const menuWrapper = useRef()
    const links = ["Accueil", "Services", "A Propos", "Travaux", "Contact"]

    useEffect(()=>{
        if (menu === true) {
            gsap.to(menuWrapper.current, {
                top: 0
            })
        } else {
            gsap.to(menuWrapper.current, {
                top: "-100vh"
            })
        }
    }, [menu])

    return (
        <div ref={menuWrapper} className={style.wrapper}>
            <ul>
                {links.map((el, i) => {
                    return <li><p>{el}</p></li>
                })}
            </ul>
        </div>
    )
}