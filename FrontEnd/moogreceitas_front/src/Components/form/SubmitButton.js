import styles from './Submit.module.css'

function Submit({text}){
    return (
        <div className={styles.button}>
           <button type="submit" className={styles.btn}>{text}</button>
        </div>
    )
}

export default Submit