import Button from '../../Usable/Button/Button'
import style  from './content.module.scss'


export default function Content () {

    return (
         <div className={style.wrapper}>
             <h1>Le confort chez vous en respectant notre planet</h1>
             <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
             <Button link="#" content="Nos services"/>
         </div>
    )
}