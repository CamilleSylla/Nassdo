import style from './grid.module.scss'

export default function Grid () {
    const strength = [
        {
            title: "Lorem Ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim vel est sed sodales. Phasellus suscipit nibh sem, ut lobortis erat congue ac."
        },
        {
            title: "Lorem Ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim vel est sed sodales. Phasellus suscipit nibh sem, ut lobortis erat congue ac."
        },
        {
            title: "Lorem Ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim vel est sed sodales. Phasellus suscipit nibh sem, ut lobortis erat congue ac."
        },
        {
            title: "Lorem Ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim vel est sed sodales. Phasellus suscipit nibh sem, ut lobortis erat congue ac."
        }
    ]

    return (
        <div className={style.wrapper}>
            {strength.map((el, i) => {
                return (
                    <article className={style.card}>
                        <h1>{el.title}</h1>
                        <p>{el.desc}</p>
                        </article>
                )
            })}
        </div>
    )
}