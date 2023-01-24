import { useLocation } from 'react-router-dom'
import Header from '../Header/Header';
import styles from './Receita.module.css'
import useStorage from '../Utils/useStorage'
import { Link } from "react-router-dom";

export default function Receita({ idReceita }) {
    const [token, setToken] = useStorage('token')
    const location = useLocation()
    const { from } = location.state
    var id = from.id;
    var nome = from.name;
    var porcoes = from.porcoes;
    var tmp_preparo = from.tmp_preparo;
    var categoria = from.categoria;
    var ingredientes = from.ingredientes;
    var modo_preparo = from.modo_preparo;
    var img = from.img;
    console.log(from);


    let deletaReceita = async (e) => {

        e.preventDefault();

        try {
            console.log(img)


            let res = await fetch("https://localhost:7136/CadastrandoReceita/DeletaReceita?id=" + id, {
                method: "DELETE",

            });

            if (res.status === 200) {

                window.location.href = "/home";
            } else {
                console.log("nao deu");
            }
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
            <Header naoExibePesquisa={true} />

            <div className={styles.container}>
                <h1 className={styles.tituloReceita}>{nome}</h1>

                <div className={styles.receita}>


                    <div className={styles.leftInfo}>
                        <img src={img} className={styles.imgRec} />
                        <h4>Porções</h4><p> {porcoes}</p>
                        <h4 className={styles.tmpPreparo}> Tempo de Preparo </h4><p> {tmp_preparo}</p>
                        <h4>Categoria</h4> <p>{categoria}</p>
                    </div>

                    <div className={styles.rightInfo}>
                        <h4>INGREDIENTES</h4>
                        <textarea readOnly="true" className={styles.textAreaModo} value={ingredientes}> </textarea>
                        <h4>MODO DE PREPARO</h4>
                        <textarea readOnly className={styles.textAreaModo} value={modo_preparo}> </textarea>
                    </div>
                </div>
                <div>
                    {token &&
                        <div className={styles.divRowButton}>
                            <div className={styles.divButton}>
                                <button className={styles.buttonAcoesDeletar} onClick={deletaReceita}>Excluir</button>
                            </div>
                            <div className={styles.divButton} >
                                <Link to="/editaReceita" className={styles.linkEditar}
                                    state={{ from: { id, nome, porcoes, tmp_preparo, img, categoria, ingredientes, modo_preparo } }}>

                                    <button className={styles.buttonAcoesEditar}>Editar</button>

                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}