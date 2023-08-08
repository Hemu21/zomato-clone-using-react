import './header.css';
function Header(){
    return (
    <header>
        <div className="headerLogo">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" width="126px" height="27px" alt="zomatoLogo" />
        </div>
        <div className='searchContent'>
            <i className="fa-solid fa-location-dot location"></i>
            <select>
                <option>Hydrabad</option>
                <option>Andhra Pradesh</option>
                <option>Tamil Nadu</option>
                <option>Kerala</option>
            </select>
            <h1 className='pipe'>|</h1>
            <i className="fa-solid fa-magnifying-glass glass"></i>
            <input className='search' type='text' placeholder='Search for restaurant, cuisine or a dish' />
        </div>
        <div className="buttonsBox">
            <button className='buttons'>Log in</button>
            <button className='buttons'>Sign Up</button>
        </div>
    </header>
    );
}

export default Header;