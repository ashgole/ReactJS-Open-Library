import Button from "../button/button";

function Hero() {
    return (
        <div className="hero">
            <div className="hero__container container">
                <div className="hero__text">
                    <h2 className="hero__title">
                        Endless entertainment and knoledge
                    </h2>

                    <div className="hero__subtitle">
                        Read or listen anytime, anywhere.
                    </div>

                    <Button href="#" className="hero__btn btn btn--large btn--white">
                        Read free for 30 days
                    </Button>
                    <div className="hero__under-btn under-btn">
                        Only ₹299/month after. Cancel anytime.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;