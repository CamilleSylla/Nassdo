import Button from '../Button/Button'
import style from './desczone.module.scss'

export default function DescZone ({title, intro, para, link, btnContent, color, right}) {

    return (
        <article style={{color: `${color ? color : "black"}`, right: `${right ? right : "20%"}`}} className={style.wrapper}>
            <h1>
                {title}
            </h1>
            <h2>
                {intro}
            </h2>
            <p>
                {para}
            </p>
            <Button link={link} content={btnContent}/>

        </article>
    )
} 