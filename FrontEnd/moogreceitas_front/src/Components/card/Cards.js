
import styles from './cards.module.css'
// import { BsPencilSquare, BsFillTrashFill } from 'react-icons'
// import { BsFillPencilFill, BsTrashFill } from "react-icons/bs";

function Cards({ id, name, PORCOES, TMP_PREPARO }) {



    return (


        <div className={styles.card}>
            <div className={styles.linha}>
                <h4>{name}</h4>
            </div>
            <div className={styles.linha}>
                <p className={styles.boldTitulo}>Tempo de Preparo: </p> 
                <p>{TMP_PREPARO} Minutos</p>
            </div>
            <div className={styles.linha}>
            <p className={styles.boldTitulo}>Rendimento:</p>
                <p>{PORCOES} Porções</p>
            </div>




        </div >


    )
}
export default Cards