import DescZone from '../../Usable/DescZone/DescZone'
import Grid from './Grid/Grid'
import style from './strength.module.scss'

export default function Strength () {

    return (
        <section className={style.wrapper}>
            <div className={style.filter}>
                <Grid/>
                <DescZone
                title="Nos points fort"
                color="white"
                right="60%"
                link="#"
                btnContent="Nos domaines"
                />
            </div>
        </section>
    )
}