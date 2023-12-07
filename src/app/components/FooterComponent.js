function FooterComponent(){
    return (
        <>
            <footer>
                <div className="footer-first-content-div">
                    <div>
                        <label className="footer-point-font">16</label>
                        <label>DAYS</label>
                    </div>
                    <div>You can return for free</div> 
                </div>
                <div className="footer-first-content-div">
                    <div>
                        <label className="footer-point-font">4-5</label>
                        <label>DAYS</label>
                    </div>
                    <div>The maximum delivery time</div> 
                </div>
                <div className="footer-search-content-div">
                    <div className="footer-search-box">
                        <input type="text" />
                        <img src="/logo/search-icon.png"/>
                    </div>
                </div>
                <div className="footer-ins-logo-div">
                    <img src="/logo/twitter.png" />
                    <img src="/logo/linkedin-big-logo.png" />
                    <img src="/logo/instagram.png" />
                </div>
            </footer>
        </>
    )
}

export default FooterComponent;