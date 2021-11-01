import Button from '../../Button/Button'
import style from './head.module.scss'

export default function Head () {

    return (
        <div className={style.wrapper}>
            <article className={style.container}>
                <div>
                <h1>N'importe quand, de tout temps, n'importe quand dans le temps</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <Button content="Nous contacter"/>
            </article>
        </div>
    )
}