
function Navbar({setPage}){
    return(
        <nav style={{
            display:"flex", justifyContent:"space-around", width:"400px", backgroundColor:"red", height:"60px" ,alignItems:"center",

        }}>
            <button onClick={() => setPage('Home')}>Home</button>
            <button onClick={() => setPage('About')}>Biz Haqimizda</button>
            <button onClick={() => setPage('Kurslar')}>Kurslar</button>
            <button onClick={() => setPage('Aloqa')}>Aloqa</button>
        </nav>
    )
}
export default Navbar;