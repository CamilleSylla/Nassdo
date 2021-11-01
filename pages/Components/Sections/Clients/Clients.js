import DescZone from '../../Usable/DescZone/DescZone'
import style from './clients.module.scss'
import Opinion from './Opinion/Opinion'

export default function Clients () {

    return (
        <section className={style.wrapper}>
            <DescZone
            title="L'avis de nos clients"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            btnContent="Nous contacter"
            />
            <Opinion/>
        </section>
    )
}