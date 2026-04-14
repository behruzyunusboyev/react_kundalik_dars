import '../pages/styles/homrpage.css'
import rasm1 from '../pages/homepage_img.jpg'
function Homepage() {
    return(
        <div className='homepage'>
            <img src={rasm1} alt="Rasm" className='rasm1' />
            <div className="matn">
            <h1>Men Behruz Yunusboyev</h1>
            <p>Yoshim 16 da va hozirda Yangibozor tumanida Alxorazmiy loyhasida o'qiman
            Men 1 yarm yildan beri IT sohasini organib kelaman. hozirda frotend developeriman.
            bu kungacha bir nechta kichik  loyhalar ishlaganman. bulardan birini projects bolimida korishingiz mumkin.
            </p>
            </div>
        </div>
    )
}
export default Homepage