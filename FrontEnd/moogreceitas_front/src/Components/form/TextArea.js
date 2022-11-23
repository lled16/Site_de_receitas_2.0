import styles from './TextArea.module.css'

function TextArea({type, text, name, placeholder, handleOnChange, value}){
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>


            <textarea
          
            className={styles.textarea}
            rows={5}
            type={type} 
            name={name} 
            placeholder={placeholder} 
            id={name} 
            onChange={handleOnChange} 
            value={value}
            />
           
        </div>
    )
}

export default TextArea