import Header from '../Header/Header'
import { useState, useEffect } from "react"
import Cards from '../card/Cards'
import styles from '../card/cards.module.css'

export default function Home() {


    const [receitas, setReceitas] = useState([])

    useEffect(() => {
        setTimeout(
            () => {
                fetch('https://localhost:7136/CadastrandoReceita', {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    },
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setReceitas(data)

                    })
                    .catch((err) => console.log(err))
            }, 300)


    }, [])




    return (
        <>
            <Header
                naoExibePesquisa={false}
            />
            <div className={styles.titulo}>
                <h1> Receitas da MOOG </h1>
            </div>
            <div className={styles.cards}>

                {receitas.length > 0 &&
                    receitas.map((receita) => (
                        <Cards

                            name={receita.nome}
                            TMP_PREPARO={receita.tmP_PREPARO}
                            PORCOES={receita.porcoes}

                        />
                    ))}
            </div>
        </>
    )
}