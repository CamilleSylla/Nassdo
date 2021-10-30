import DescZone from '../../Usable/DescZone/DescZone'
import style from './about.module.scss'
import Illustration from './Illustration/Illustration'

export default function About ()  {

    return (
        <section className={style.wrapper}>
            <DescZone 
            title="A Propos de HDF" 
            intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum orci vitae nisl semper tincidunt. Nunc nibh eros, euismod in est ac, sagittis semper magna. Phasellus at lacus eu elit tempor iaculis vitae vel urna. In luctus posuere odio at convallis. Aenean varius ante eu elit molestie, vitae ornare turpis vestibulum. Sed tempor molestie lorem, non elementum dui vestibulum in. Aenean eget augue leo. In ex nunc, fermentum sed est et, ultrices rhoncus diam."
            link="#"
            btnContent="En savoir plus"
            />
            <Illustration/>
        </section>
    )
}