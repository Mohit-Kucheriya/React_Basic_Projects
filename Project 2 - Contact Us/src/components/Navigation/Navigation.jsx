import styles from "./Navigation.module.css"
function Navigation() {
    console.log(styles)
    return (
        <nav className={`${styles.navigation} container`}>
            <div className={`${styles.logo}`}>
                <img src="/images/logo.svg" alt="" />
            </div>
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">feature</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </nav>

    )
}

export default Navigation