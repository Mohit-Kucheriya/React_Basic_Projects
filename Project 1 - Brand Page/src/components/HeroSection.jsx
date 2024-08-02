export default function HeroSection() {
    return (
        <main className="hero-section container">
            <div className="hero-content ">
                <h1>your feet deserve bettter</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci praesentium porro, est commodi asperiores officiis.</p>

                <div className="hero-btn">
                    <button id="shop-now">Shop Now</button>
                    <button id="category">Category</button>
                </div>

                <div className="hero-shop">
                    <p>Availabe at</p>

                    <div className="hero-social-logo">
                        <img src="/images/amazon.png" alt="amazon" id="amazon" />
                        <img src="/images/flipkart.png" alt="flipkart" id="flipkart" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/2.png" alt="1" />

            </div>
        </main>
    );
}