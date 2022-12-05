
import styles from './cards.module.css'
import {MdOutlineTimer} from 'react-icons/md'
import {BiDish} from 'react-icons/bi'
import useStorage from '../Utils/useStorage'
import { Link } from "react-router-dom";
// import { BsPencilSquare, BsFillTrashFill } from 'react-icons'
// import { BsFillPencilFill, BsTrashFill } from "react-icons/bs";

function Cards({ id, name, porcoes, tmp_preparo, img, categoria, ingredientes, modo_preparo }) {

    const [token, setToken] = useStorage('token')

    return (
        
      <Link to="/receita" className={styles.link} 
      state={{ from: {id, name, porcoes, tmp_preparo, img, categoria, ingredientes, modo_preparo } }}>
        
            <div className={styles.card}>
                <div>
                    <img src={img} alt="img" className={styles.imgReceita}/>
                </div>
                <div className={styles.linha}>
                    <h4>{name}</h4>
                </div>
                <div className={styles.linha}>
                    <p><MdOutlineTimer className={styles.timer}/> </p>
                    <p> {tmp_preparo} Minutos</p>
                </div>
                <div className={styles.linha}>
                    <p className={styles.boldTitulo}><BiDish className={styles.timer}/></p>
                    <p>{porcoes} Porções</p>
                </div>
               

            </div>
            </Link>
         
  
  


    )
}
export default Cards