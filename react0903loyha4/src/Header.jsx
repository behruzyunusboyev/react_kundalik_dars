function Header(){
    const nom='React 0903 Loyha 4';
    return(
        <div style={{width:'100%', backgroundColor:"aqua", boxShadow:'2px 5px 20px red'}}>
            {nom}
            <ul style={{display:'flex', justifyContent:"space-around"}}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Menu</li>
            </ul>
        </div>
    );
}
export default Header;