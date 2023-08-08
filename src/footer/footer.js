import "./footer.css"
function Footer(){

    return (
    <div className="main">
        <div className="FHead">
            <img className="Flogo" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomoto-logo" />
            <button className="india"><i className="fa-brands fa-font-awesome"></i>   India </button>
            <button className="india" style={{marginLeft:"25px"}} ><i className="fa-solid fa-globe"></i> English</button>
        
        <div className="fullFoot">
            <div className="insideFull">
                <h4>ABOUT ZOMATO</h4>
                <h5 className="wor">Who We Are</h5>
                <h5 className="wor">Blog</h5>
                <h5 className="wor">Work With Us</h5>
                <h5 className="wor">Investor Relations</h5>
                <h5 className="wor">Report Fraud</h5>
                <h5 className="wor">Contact Us</h5>                
            </div>
            <div className="insideFull">
                <h4>ZOMAVERSE</h4>
                <h5 className="wor">Zomato</h5>
                <h5 className="wor">Blog</h5>
                <h5 className="wor">Blinkit</h5>
                <h5 className="wor">Feeding India</h5>
                <h5 className="wor">Hyperpure</h5>
                <h5 className="wor">Zomaland</h5>                
            </div><div className="insideFull">
                <h4>FOR RESTAURANTS</h4>
                <h5 className="wor">Partner With Us</h5>
                <h5 className="wor">Apps For You</h5>
                <h4>FOR ENTERPRISES</h4>
                <h5 className="wor">Zomato For Enterprise</h5>                
            </div>
            <div className="insideFull">
                <h4>LEARN MORE</h4>
                <h5 className="wor">Privacy</h5>
                <h5 className="wor">Security</h5>
                <h5 className="wor">Terms</h5>
                <h5 className="wor">Sitemap</h5>           
            </div>
            <div className="insideFull">
                <h4 style={{marginLeft:"26px"}}>SOCIAL LINKS</h4>
                <p className="miniIcons"><i className=" fa-brands fa-linkedin"></i></p>
                <h5 className="miniIcons"><i className="fa-brands fa-instagram"></i></h5>
                <h5 className="miniIcons"><i className="fa-brands fa-twitter"></i></h5>
                <h5 className="miniIcons"><i className="fa-brands fa-youtube"></i></h5>
                <h5 className="miniIcons"><i className="fa-brands fa-facebook"></i></h5>           
            </div>
        </div>
        <div className="last">
            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</p>
        </div>
        </div>
    </div>
    
    );
}

export default Footer;