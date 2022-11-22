import Header from '../Header/Header'
import styles from './CadastroReceita.module.css'

export default function CadastroReceita() {
    return (
        <>
            <Header
                naoExibePesquisa={true}
            />
            <div className={styles.form}>

                <form>
                    <div className={styles.div}>
                        <h3>Nome da receita</h3>
                    </div>
                    <div className={styles.div}>
                        <input type='text' className={styles.input}></input>
                    </div>
                </form>
            </div>
        </>
    )
}

