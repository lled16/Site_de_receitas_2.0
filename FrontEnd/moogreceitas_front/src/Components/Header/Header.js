import styles from './Header.module.css'
import imgMoog from '../../imgs/cutlery.png'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CDropdown, CDropdownToggle, CDropdownItem, CDropdownMenu } from '@coreui/react';
import { ImMenu } from 'react-icons/im'
import { Link } from "react-router-dom";

export default function Header({ naoExibePesquisa }) {
    return (




        <div className={styles.header}>
            <Link to="/home">  <img src={imgMoog} alt="moog" className={styles.logoMoog} /></Link>


            {!naoExibePesquisa ?
                <input type="text" className={styles.inputSearch} placeholder='Pesquise aqui ...' />
                :
                <h1>Cadastro de Receitas</h1>
            }


            <CDropdown >
                <CDropdownToggle className={styles.dropdwon}>    <ImMenu />    </CDropdownToggle>
                <CDropdownMenu className={styles.itemDrop}>
                    <CDropdownItem ><Link to="/" className={styles.link}> Página Inicial</Link></CDropdownItem>
                    <CDropdownItem ><Link to="/cadastroreceitas" className={styles.link}> Cadastro de Receitas</Link></CDropdownItem>
                    <div class="dropdown-divider"> </div>
                    <CDropdownItem ><Link to="/receitasdoces" className={styles.link}> Receitas doces</Link></CDropdownItem>

                </CDropdownMenu>
            </CDropdown>
        </div>
    )
}