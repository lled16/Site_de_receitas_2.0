import Header from '../Header/Header'
import styles from './CadastroReceita.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/SubmitButton'
import TextArea from '../form/TextArea'

export default function CadastroReceita() {

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


            <form className={styles.form}>
                <div className={styles.secao}>
                    <Input
                        type="text"
                        text="Nome da receita"
                        name="name"
                        placeholder="Insira um nome para a receita"

                    />
                    <Input
                        type="number"
                        text="QTD. Porções"
                        name="name"
                        placeholder="Insira a quantidade de porções"

                    />
                    <Input
                        type="number"
                        text="Tempo de preparo"
                        name="name"
                        placeholder="Insira o tempo de preparo em minutos"

                    />

                    <Select
                        name="category_id"
                        text="Selecione a categoria"
                        options={options}
                        value={options.value}

                    />


                </div>

                <div className={styles.secao}>
                    <TextArea
                        className={styles.textarea}
                        type="textarea"
                        text="Ingredientes"
                        name="name"
                        placeholder="Insira os ingredientes"

                    />
                    <TextArea

                        type='textarea'
                        text="Modo de preparo"
                        name="name"
                        placeholder="Modo de preparo"

                    />

                </div>


            </form>
            <div className={styles.botaoCadastrar}>
                <Submit text="Cadastrar Receita" />
            </div>
        </>
    )
}

