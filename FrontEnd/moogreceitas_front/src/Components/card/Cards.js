
import styles from './cards.module.css'
import {MdOutlineTimer} from 'react-icons/md'
import {BiDish} from 'react-icons/bi'
// import { BsPencilSquare, BsFillTrashFill } from 'react-icons'
// import { BsFillPencilFill, BsTrashFill } from "react-icons/bs";

function Cards({ id, name, PORCOES, TMP_PREPARO, img }) {



    return (
        
        <div className={styles.space}>
            <div className={styles.card}>
                <div>
                    <img src={img} alt="img" className={styles.imgReceita}/>
                </div>
                <div className={styles.linha}>
                    <h4>{name}</h4>
                </div>
                <div className={styles.linha}>
                    <p><MdOutlineTimer className={styles.timer}/> </p>
                    <p> {TMP_PREPARO} Minutos</p>
                </div>
                <div className={styles.linha}>
                    <p className={styles.boldTitulo}><BiDish className={styles.timer}/></p>
                    <p>{PORCOES} Porções</p>
                </div>

            </div>
        </div >
  


    )
}
export default Cards