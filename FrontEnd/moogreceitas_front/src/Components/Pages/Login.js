import React, { useState, useContext } from 'react'
import StoreContext from '../Store/Context'
import { useNavigate } from 'react-router-dom'
import Styles from './Login.module.css'
import Header from '../Header/Header'


function initializeState() {
    return { user: '', password: '' }
}


function Logar({ user, password }) {
    if (user === 'admin' && password === 'admin') {
        return { token: '1234' }
    } else {
        return { error: "Usuário ou senha inválidos !" }
    }
}
export default function Login() {
    const [values, setValues] = useState(initializeState);
    const { setToken } = useContext(StoreContext)
    const history = useNavigate();

    function onChange(event) {
        const { value, name } = event.target;
        setValues({
            ...values,
            [name]: value,

        })
    }

    function onSubmit(event) {
        event.preventDefault();
        const { token } = Logar(values);

        if (token) {
            setToken(token)
            window.location.href = "/";

        }
        setValues(initializeState);
    }

    return (
        <div>
              <Header naoExibePesquisa={true}/>
            <h1>Login</h1>

            <form onSubmit={onSubmit} className={Styles.formLogin}>
                <div className={Styles.divCampo}>
                    <label>USUARIO</label>
                    
                </div>
                <div className={Styles.divCampo}>
              
                    <input className={Styles.inputLogin} id="user" type="text" name="user" onChange={onChange} value={values.user} />
                </div>



                <div className={Styles.divCampo}>
                    <label>SENHA</label>
                    
                </div>
                <div className={Styles.divCampo}>
                   
                    <input className={Styles.inputLogin} id="password" type="password" name="password" onChange={onChange} value={values.password} />
                </div>

                <div className={Styles.divCampo}>
                    <button type="submit" className={Styles.buttonLogar}>
                        Entrar
                    </button>
                </div>
            </form>
        </div>

    )
}