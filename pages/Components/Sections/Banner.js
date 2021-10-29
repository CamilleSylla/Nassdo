import style from './banner.module.scss'

export default function Banner () {

    return (
        <section className={style.wrapper}>
            <h1>Construisez votre avenir</h1>
            <img className={style.image} src="/img/hdfhome.jpg"/>
        </section>
    )
}