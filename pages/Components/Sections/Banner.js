import style from './banner.module.scss'
import Content from './Content/Content'

export default function Banner () {

    return (
        <section className={style.wrapper}>
            <Content/>
            <img className={style.image} src="/img/hdfhome.jpg"/>
            <div className={style.filter}/>
        </section>
    )
}