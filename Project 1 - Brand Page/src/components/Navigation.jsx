export default function Navigation() {
    return (
        <nav className="container">
            <div className="logo">
                <img src="/images/nike logo.png" alt="" />
            </div>
            <ul>
                <li>
                    <a href="menu">menu</a>
                </li>
                <li>
                    <a href="location">location</a>
                </li>
                <li>
                    <a href="about">about</a>
                </li>
                <li>
                    <a href="contact">contact</a>
                </li>
            </ul>
            <button>Login</button>
        </nav>
    );
}
