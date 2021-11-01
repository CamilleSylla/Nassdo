import Content from './Content/Content'
import style from './footer.module.scss'
import Head from './Head/Head'

export default function Footer () {

    return (
        <footer className={style.footer}>
            <Head/>
            <Content/>
        </footer>
    )
}