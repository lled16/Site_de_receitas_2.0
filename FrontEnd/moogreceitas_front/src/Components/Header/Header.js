import styles from './Header.module.css'
import imgMoog from '../../imgs/cutlery.png'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CDropdown, CDropdownToggle, CDropdownItem, CDropdownMenu } from '@coreui/react';
import { ImMenu } from 'react-icons/im'
import { Link } from "react-router-dom";
import useStorage from '../Utils/useStorage'
import { BiUserCircle } from 'react-icons/bi'

export default function Header({ naoExibePesquisa }) {
    const [token, setToken] = useStorage('token')
    return (
        <div className={styles.header}>

            <div>
                <Link to="/home">  <img src={imgMoog} alt="moog" className={styles.logoMoog} /></Link>

            </div>

            <div className={styles.pesquisa}>
                {!naoExibePesquisa &&
                    <input type="text" className={styles.inputSearch} placeholder='Pesquise aqui ...' />
                }
            </div>




            <div className={styles.avatarDrop}>
                <div className={styles.nome}>
                    {token &&
                    <Link to="/perfil" className={styles.perfil}>
                        <label className={styles.nameLog}> <BiUserCircle className={styles.avatar} /> Olá, Milene !</label>
                    </Link>
                    }
                </div>
                
                <div className={styles.select}>
                    <CDropdown >
                        <CDropdownToggle className={styles.dropdwon}>    <ImMenu />    </CDropdownToggle>
                        <CDropdownMenu className={styles.itemDrop}>
                            <Link to="/" className={styles.link}> <CDropdownItem className={styles.teste}>Início</CDropdownItem></Link>
                            {!token &&
                                <Link to="/login" className={styles.link}><CDropdownItem className={styles.teste}> Login</CDropdownItem></Link>
                            }
                            <Link to="/home" className={styles.link}><CDropdownItem className={styles.teste}> Receitas</CDropdownItem></Link>
                            {token &&
                                <Link to="/cadastroreceitas" className={styles.link}> <CDropdownItem className={styles.teste}> Cadastro de Receitas</CDropdownItem></Link>
                            }
                            <div class="dropdown-divider"> </div>
                            <Link to="/receitasdoces" className={styles.link}><CDropdownItem className={styles.teste}> Receitas doces</CDropdownItem></Link>
                            <Link to="/receitasSalgadas" className={styles.link}><CDropdownItem className={styles.teste}> Receitas Salgadas</CDropdownItem></Link>
                            <Link to="/drinks" className={styles.link}><CDropdownItem className={styles.teste}> Drinks </CDropdownItem></Link>

                        </CDropdownMenu>
                    </CDropdown>
                </div>
            </div>
        </div>

    )
}