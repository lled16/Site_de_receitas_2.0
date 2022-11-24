import Header from '../Header/Header'
import styles from './CadastroReceita.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/SubmitButton'
import TextArea from '../form/TextArea'

import { useState } from 'react'

export default function CadastroReceita() {
 

    const [name, setName] = useState("");
    const [porcoes, setPorcoes] = useState("");
    const [tmpPreparo, settmpPreparo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [modoPreparo, setmodoPreparo] = useState("");
    const [message, setMessage] = useState("");

    // setName("teste");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://localhost:7136/CadastrandoReceita/", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
              name: name,
              porcoes: porcoes,
              tmpPreparo: tmpPreparo,
              categoria: categoria,
              ingredientes: ingredientes,
              modoPreparo:modoPreparo
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
           

            setMessage("Cadastrada !");
          } else {
            setMessage("Erro ao cadastrar !");
          }
        } catch (err) {
          console.log(err);
        }
      };



      console.log('teste',name)



    const options = [
        { name: "Salgada", key: 1, value: "Salgada" },
        { name: "Doce", key: 2, value: "Doce" },
        { name: "Sobremesa", key: 3, value: "Sobremesa" }
    ]
    return (
        <>
            <Header
                naoExibePesquisa={true}
            />


            <form  onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.secao}>
                    <Input
                        type="text"
                        text="Nome da receita"
                        name="name"
                        placeholder="Insira um nome para a receita"
                        onChange={(e) => setName(e.target.value)}
                      

                    />
                    <Input
                        type="number"
                        text="QTD. Porções"
                        name="name"
                        placeholder="Insira a quantidade de porções"
                        onChange={(e) => setPorcoes(e.target.value)}
                       

                    />
                    <Input
                        type="number"
                        text="Tempo de preparo"
                        name="name"
                        placeholder="Insira o tempo de preparo em minutos"
                        onChange={(e) => settmpPreparo(e.target.value)}
                       

                    />

                    <Select
                        name="category_id"
                        text="Selecione a categoria"
                        options={options}
                        // value={options.value}
                        onChange={(e) => setCategoria(e.target.value)}
                       

                    />


                </div>

                <div className={styles.secao}>
                    <TextArea
                        className={styles.textarea}
                        type="textarea"
                        text="Ingredientes"
                        name="name"
                        placeholder="Insira os ingredientes"
                        onChange={(e) => setIngredientes(e.target.value)}
                     

                    />
                    <TextArea

                        type='textarea'
                        text="Modo de preparo"
                        name="name"
                        placeholder="Modo de preparo"
                        onChange={(e) => setmodoPreparo(e.target.value)}
                       

                    />
                           <Submit text="Cadastrar Receita" />
                </div>
             

         
            </form>
            <div className="message">{message ? <p>{message}</p> : null}</div>

        </>
    )
}

