import Header from '../Header/Header'
import styles from './EditaReceita.module.css'
import Submit from '../form/SubmitButton'
import { useState } from 'react'
import React from 'react';
import { useLocation } from 'react-router-dom'




export default function CadastroReceita() {
    

    const location = useLocation()
    const { from } = location.state
    var id_old = from.id;
    var nome_old = from.nome;
    var porcoes_old = from.porcoes;
    var tmp_preparo_old = from.tmp_preparo;
    var categoria_old = from.categoria;
    var ingredientes_old = from.ingredientes;
    var modo_preparo_old = from.modo_preparo;
    var img_old = from.img;
    console.log({from});

    
    const [name, setName] = useState("");
    const [porcoes, setPorcoes] = useState("");
    const [tmpPreparo, settmpPreparo] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [modoPreparo, setmodoPreparo] = useState("");
    const [message, setMessage] = useState("");
    const [categoria, setCategoria] = useState("");
    const [img, setImg] = useState("");


    const convert2base64 = e => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImg(reader.result.toString());
        };

        reader.readAsDataURL(file);

        console.log(img);
        
    }


    let handleSubmit = async (e) => {

        e.preventDefault();
        setImg(img.toString());


        try {
            console.log(img)


            let res = await fetch("https://localhost:7136/CadastrandoReceita/AtualizaReceita/" , {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                },
                    body: JSON.stringify({
                    ID: id_old,
                    NOME: name,
                    PORCOES: porcoes,
                    TMP_PREPARO: tmpPreparo,
                    CATEGORIA: categoria,
                    INGREDIENTES: ingredientes,
                    MODO_PREPARO: modoPreparo,
                    IMG: img
                }),
            });

            if (res.status === 200) {

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
                        
                        placeholder="Digite o nome da receita"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Qtd. Porções</label>
                    <input
                        className={styles.input}
                        type="number"
                        value={porcoes_old}
                        placeholder="Insira a quantidade de porções"
                        onChange={(e) => setPorcoes(e.target.value)}


                    />
                    <label>Tempo de preparo</label>
                    <input
                        className={styles.input}
                        type="number"
                        value={tmp_preparo_old}
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
                        <option value="4">Drinks</option>
                    </select>


                    <label>Imagem</label>
                    <input
                        class="form-control"
                        className={styles.img}
                        type="file"
                       
                        placeholder="Imagem"
                        onChange={e => convert2base64(e)}


                    />

                

                </div>

                <div className={styles.secao}>
                    <label>Ingredientes</label>
                    <textarea
                        className={styles.textarea}
                        type="textarea"
                        value={ingredientes_old}
                        rows={5}
                        placeholder="Insira os ingredientes"
                        onChange={(e) => setIngredientes(e.target.value)}


                    />
                    <label>Modo de preparo</label>
                    <textarea
                        className={styles.textarea}
                        type='textarea'
                        value={modo_preparo_old}
                        placeholder="Modo de preparo"
                        rows={5}
                        onChange={(e) => setmodoPreparo(e.target.value)}


                    />

                </div>
                <div className={styles.submit}>
                    <Submit text="Cadastrar Receita" />
                </div>
            </form>
            <div className="message">{message ? <p>{message}</p> : null}</div>

        </>
    )
}

