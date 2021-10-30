import style from './button.module.scss'

export default function Button ({link, content}) {

    return (
        <button className={style.wrapper}>
            {content}
        </button>
    )
}