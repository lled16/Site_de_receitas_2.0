import Header from '../Header/Header'
import styles from '../Pages/Principal.module.css'
import ramo1 from '../../imgs/ramo-folhas.png'
import ramo2 from '../../imgs/ramo-folhas-2.png'


export default function Principal() {





    return (
        <>
            <Header
                naoExibePesquisa={true}
            />

            <div className={styles.containerPrincipal}>
                <div className={styles.elemento1}>
                    <img src={ramo1} alt="ramo1" className={styles.ramo1} />
                </div>


                <div className={styles.elemento2}>
                    <h1>RECEITAS <br /></h1>
                    <h1>DA <br /></h1>
                    <h1>MOOG <br /></h1>
                </div>

                <div className={styles.elemento3}>
                    <img src={ramo2} alt="ramo2" className={styles.ramo2} />
                </div>
            </div>

        </>
    )
}