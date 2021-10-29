import gsap from 'gsap'
import { useContext, useEffect, useRef } from 'react'
import { MenuContext } from '../../../../../context/MenuContext'
import style from './hamburger.module.scss'

export default function Hamburger () {
    const [menu, setMenu] = useContext(MenuContext)
    const boxAnim = useRef()
    const top = useRef()
    const mid = useRef()
    const bot = useRef()
    const hambergerBarsAnimArray = [top.current, mid.current, bot.current]
    useEffect(()=>{
        
        if (menu === true) {
            gsap.to(boxAnim.current,1, {
                borderColor: "#202B30",
            })
            gsap.to(top.current, 1, {
                width: "80%",
                rotate: "45deg",
            })
            gsap.to(bot.current, 1, {
                width: "80%",
                rotate: "-45deg",
                
            })
            gsap.to(mid.current, .5, {
                opacity: 0
            })
        } else {
            gsap.to(boxAnim.current,1, {
                borderColor: "#FFFFFF"
            })
            gsap.to(top.current, 1, {
                width: "33%",
                rotate: "0deg"
            })
            gsap.to(bot.current, 1, {
                width: "80%",
                rotate: "0deg"
            })
            gsap.to(mid.current, .5, {
                opacity: 1
            })
        }
    }, [menu])
    return (
        <div ref={boxAnim} className={style.wrapper} onClick={() => setMenu(!menu)}>
            <div ref={top} className={style.top}></div>
            <div ref={mid} className={style.mid}></div>
            <div ref={bot} className={style.bot}></div>
        </div>
    )
}