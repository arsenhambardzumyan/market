const SubScribe = () => {
    return (
        <div className="section-subscribe">
            <div className="uk-container">
                <div className="subscribe-box">
                    <div className="uk-grid uk-flex-middle uk-child-width-1-2@m" data-uk-grid>
                        <div>
                            <div className="section-title"><span>Latest news and deals directly to your inbox</span>
                                <div className="uk-h2">Subscribe for updated</div>
                            </div>
                        </div>
                        <div>
                            <div className="subscribe-box__form">
                                <form action="#!">
                                    <div className="uk-flex uk-flex-middle">
                                        <input className="uk-input" type="email" name="email" placeholder="Email Address ...." />
                                        <button className="uk-button uk-button-danger" type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubScribe;