import styles from "./Button.module.css"
function Button(props) {
    console.log(props)
    return (
        <button className={props.isOutline ? styles.secondaryBtn : styles.primaryBtn}>
            {props.icon}
            {props.text}
        </button>
    )
}

export default Button