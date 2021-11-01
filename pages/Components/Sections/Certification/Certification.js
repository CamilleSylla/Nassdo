import DescZone from '../../Usable/DescZone/DescZone'
import style from './certification.module.scss'

export default function Certification () {

    return (
        <section className={style.wrapper}>
            <div className={style.round_gradient}/>
            <div className={style.round_gradient}/>
            <div className={style.round_gradient}/>
            <div className={style.round_gradient}/>
            <div className={style.gradient}>
                <DescZone
                title="Nos derniers travaux"
                intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                btnContent="Nous connaître"
                />
            </div>
        </section>
    )
}