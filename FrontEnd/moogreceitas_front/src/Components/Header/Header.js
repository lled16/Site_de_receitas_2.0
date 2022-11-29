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
                <div className={styles.tituloPagina}><h1 >Cadastro de Receitas</h1></div>
            }


            <CDropdown >
                <CDropdownToggle className={styles.dropdwon}>    <ImMenu />    </CDropdownToggle>
                <CDropdownMenu className={styles.itemDrop}>
                    <Link to="/" className={styles.link}> <CDropdownItem >Início</CDropdownItem></Link>
                    <Link to="/home" className={styles.link}><CDropdownItem > Receitas</CDropdownItem></Link>
                    <Link to="/cadastroreceitas" className={styles.link}> <CDropdownItem > Cadastro de Receitas</CDropdownItem></Link>
                    <div class="dropdown-divider"> </div>
                    <Link to="/receitasdoces" className={styles.link}><CDropdownItem > Receitas doces</CDropdownItem></Link>

                </CDropdownMenu>
            </CDropdown>
        </div>
    )
}