import DescZone from '../../Usable/DescZone/DescZone'
import style from './certification.module.scss'

export default function Certification () {

    return (
        <section className={style.wrapper}>
            <div className={style.gradient}>
                <DescZone
                title="Partenaires et certifications"
                para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                btnContent="Nous connaître"
                />
            </div>
        </section>
    )
}