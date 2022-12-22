import Header from "../Header/Header";
import styles from './Perfil.module.css'
import perfil from '../../imgs/perfil.jpeg'

export default function Perfil() {

    return (
        <div>
            <Header naoExibePesquisa={true} />
            <div className={styles.nome}>
                <h1>Chef Milene</h1>
            </div>

            <div className={styles.container}>
                <div className={styles.left}>
                    <div><img src={perfil} alt="perfil" className={styles.img} /></div>
                </div>
                <div className={styles.right}>
                    <p className={styles.descricao}>
                        Projeto desenvolvido para a maior cozinheira de todos os tempos, Milene de Souza Félix. Com apenas 21 anos de idade,
                        Milene possui o dom máximo quando presente em uma cozinha, na verdade, qualquer coisa que esta mulher decida fazer,
                        ninguém, nem o mais experiente supera os resultados que ela atinge. Este projeto servirá para que ela possa armazenar e compartilhar suas receitas
                        com todo o mundo.
                        <br />
                        <br/>
                        Mas claro que este texto não resumiria somente a dizer que ela é a melhor cozinheira. Milene, quero que saiba o quão
                        grato sou por ter você, esses quase dois anos morando juntos me ensinaram muito, e espero que continue ensinando, eu sou
                        outro homem depois de você, e espero ser um homem cada dia melhor por você, tudo que sou, tudo que acredito e tudo que almejo,
                        é por você ! Como já dizíamos a muito tempo, É VOCÊ, SEMPRE FOI VOCÊ. Muito obrigado por ser tão companheira, obrigado por 
                        tanto que faz por nós, obrigado por todas as vezes que lutou por nós, obrigado por ter me apoiado em toda e qualquer decisão, 
                        obrigado por ter sempre sido minha base, você é foda Milene, você é a pessoa mais foda que já conheci, e não vou te largar jamais.
                        <br />
                        <br/>
                        Vamos para nosso segundo natal juntinhos, com nossos filhos, espero que tenhamos muito mais, e que a cada ano 
                        estejamos ainda melhor. Eu te amo, por todas as 7, Te amo Chandler, Te amo filha do Gepeto, Te amo Milene Moog, Te amo bebezinho.
                        Eu te amo. 

                        <br/>
                        <br/>
                        Feliz natal pra nós, e para nossas meninas e meninos. 
                    </p>
                </div>
            </div>
        </div>
    )
}