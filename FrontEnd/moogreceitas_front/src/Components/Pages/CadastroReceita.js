import Header from '../Header/Header'
import styles from './CadastroReceita.module.css'
import Submit from '../form/SubmitButton'
import { useState } from 'react'

export default function CadastroReceita() {


    const [name, setName] = useState("");
    const [porcoes, setPorcoes] = useState("");
    const [tmpPreparo, settmpPreparo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [modoPreparo, setmodoPreparo] = useState("");
    const [message, setMessage] = useState("");


    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://localhost:7136/CadastrandoReceita?name=" + name + "&porcoes=" + porcoes + "&tmpPreparo=" 
            + tmpPreparo + "&categoria=" + categoria + "&ingredientes=" + ingredientes + "&modoPreparo=" + modoPreparo , {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                }
                // body: JSON.stringify({
                //     name: name,
                //     porcoes: porcoes,
                //     tmpPreparo: tmpPreparo,
                //     categoria: categoria,
                //     ingredientes: ingredientes,
                //     modoPreparo: modoPreparo
                // }),
            });
            
            if (res.status === 200 ) {


                setMessage("Cadastrada !");
            } else {
                setMessage("Erro ao cadastrar !");
            }
        } catch (err) {
            console.log(err);
        }
    };




    return (
        <>
            <Header
                naoExibePesquisa={true}
            />


            <form onSubmit={handleSubmit} className={styles.form}>

                <div className={styles.secao}>
                    {/* <Input
                        type="text"
                        text="Nome da receita"
                        name="name"
                        placeholder="Digite o nome da receita"
                        onChange={(e) => setName(e.target.value)}
                    /> */}


                    <label>Nome da receita</label>
                    <input
                        className={styles.input}
                        type="text"
                        value={name}
                        placeholder="Digite o nome da receita"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Qtd. Porções</label>
                    <input
                        className={styles.input}
                        type="number"
                        value={porcoes}
                        placeholder="Insira a quantidade de porções"
                        onChange={(e) => setPorcoes(e.target.value)}


                    />
                    <label>Tempo de preparo</label>
                    <input
                        className={styles.input}
                        type="number"
                        value={tmpPreparo}
                        placeholder="Insira o tempo de preparo em minutos"
                        onChange={(e) => settmpPreparo(e.target.value)}


                    />
                    <label>Categoria</label>
                    <select name="categoria"
                        value={categoria}
                        className={styles.input}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="1">Selecione uma categoria</option>
                        <option value="2">Salgada</option>
                        <option value="3">Doce</option>
                        <option value="4">Sobremesa</option>
                        <option value="5">Drinks</option>
                    </select>


                </div>

                <div className={styles.secao}>
                    <label>Ingredientes</label>
                    <textarea
                        className={styles.textarea}
                        type="textarea"
                        value={ingredientes}
                        rows={5}
                        placeholder="Insira os ingredientes"
                        onChange={(e) => setIngredientes(e.target.value)}


                    />
                    <label>Modo de preparo</label>
                    <textarea
                        className={styles.textarea}
                        type='textarea'
                        value={modoPreparo}
                        placeholder="Modo de preparo"
                        rows={5}
                        onChange={(e) => setmodoPreparo(e.target.value)}


                    />
                    <Submit text="Cadastrar Receita" />
                </div>



            </form>
            <div className="message">{message ? <p>{message}</p> : null}</div>

        </>
    )
}

