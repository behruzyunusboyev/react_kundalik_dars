import Clock from './projects/clock'
import Counter from './projects/Counter'
import LiveInput from './projects/liveInput'
import './styles/projectlar.css'
// import Products from './projects/products'
function Projectlar(){
    return(
        <div className="main_projects" >
            <Clock />
            <Counter />
            <div className='element3'><LiveInput /></div>
            {/* <Products /> */}
        </div>
    )
}
export default Projectlar