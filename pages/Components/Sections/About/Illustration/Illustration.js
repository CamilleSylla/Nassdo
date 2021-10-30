import style from './illustration.module.scss'

export default function Illustration () {

    return (
        <div className={style.wrapper}>
            <img src="/img/energy.jpg" className={style.main}/>
            <img src="/img/energy.jpg" className={style.second}/>
        </div>
    )
}