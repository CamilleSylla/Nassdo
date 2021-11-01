import Button from '../../Usable/Button/Button'
import style from './cards.module.scss'

export default function Cards () {

    const data=[
        {
            title: "Title Here",
            para: "Lorem ipsum some random text.",
            img: "/img/build.svg"
        },
        {
            title: "Title Here",
            para: "Lorem ipsum some random text.",
            img: "/img/build.svg"
        },
        {
            title: "Title Here",
            para: "Lorem ipsum some random text.",
            img: "/img/build.svg"
        },
        {
            title: "Title Here",
            para: "Lorem ipsum some random text.",
            img: "/img/build.svg"
        }
    ]

    const Card = ({data}) => {

        return (
            <div className={style.card}>
                <div className={style.circle_img}>
                    <img src={data.img}/>
                </div>
                <h1> {data.title} </h1>
                <p>{data.para}</p>
                <div className={style.btn}>
                    <Button/>
                </div>
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            {data.map((el, i) => {
                return <Card data={el}/>
            })}
        </section>
    )
}