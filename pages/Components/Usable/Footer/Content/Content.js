import style from './content.module.scss'

export default function Content () {
    const links = ["Accueil", "Services", "A Propos", "Travaux", "Contact"]

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <img src='/img/HDF.svg'/>
                <nav>
                    <ul>
                        {links.map((el, i) => {
                            return <li>{el}</li>
                        })}
                    </ul>

                </nav>
            </div>
            <div className={style.bottom}>
                        <div className={style.legal}>HDF | mentions légales</div>
                        <div>Social</div>
            </div>
        </div>
    )
}