import styles from './Input.module.css'

function Input({type, text, name, placeholder, handleOnChange, value}){
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>


            <input
            className={styles.input}
            type={type} 
            name={name} 
            placeholder={placeholder} 
            // id={name} 
            
            value={value}
            />
           
        </div>
    )
}

export default Input