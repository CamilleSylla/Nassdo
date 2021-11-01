import style from './opinion.module.scss'

export default function Opinion () {
    const data = [
        {
        name: "Name Here",
        city: "City Here",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim vel est sed sodales. Phasellus suscipit nibh sem, ut lobortis erat congue ac. Sed sagittis blandit ligula ac bibendum. Aliquam ac velit neque. Donec tempor, orci in vehicula dictum, sapien elit vehicula mauris, vel volutpat lacus ipsum ac sem. Donec iaculis dictum neque quis lobortis. Curabitur ultrices nibh eros, eget tristique nisi convallis vel. Nam dui elit, aliquet at velit sed, hendrerit varius enim."
    },
        {
        name: "Name Here",
        city: "City Here",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim vel est sed sodales. Phasellus suscipit nibh sem, ut lobortis erat congue ac. Sed sagittis blandit ligula ac bibendum. Aliquam ac velit neque. Donec tempor, orci in vehicula dictum, sapien elit vehicula mauris, vel volutpat lacus ipsum ac sem. Donec iaculis dictum neque quis lobortis. Curabitur ultrices nibh eros, eget tristique nisi convallis vel. Nam dui elit, aliquet at velit sed, hendrerit varius enim."
    },
]

    const Card = ({data, key}) => {
        console.log(data);
        return (
            <article key={key}>
                <div>
                <h1>{data.name}</h1>
                <h2> {data.city} </h2>
                <p> {data.para} </p>
                    </div>
                
            </article>
        )
    }

    return (
        <section className={style.wrapper}>
            {data.map((el, i) => {
                return <Card data={el} key={i}/>
            })}
        </section>
    )
}