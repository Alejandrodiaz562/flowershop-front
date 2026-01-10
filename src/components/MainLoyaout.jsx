import {Outlet} from 'react-router-dom' 
import NavBar from './NavBar'
import Footer from './Footer'

const MainLayout = () => {

    const items = ['ocasiones', 'categorias', 'flores']

    const occasions = ['amor', 'cumpleaños', 'aniversarios', 'nacimiento', 'condolencias', 'mejorate Pronto', 'grados', 'primera comunion', 'matrimonio']

    const categories = ['ramilletes', 'ramos', 'cajas', 'anchetas']

    const flowers = ['rosas', 'girasoles', 'claveles', 'lirios']
    
  
    return ( 
        <div>
            <NavBar items={items} occasions={occasions} categories={categories} flowers={flowers}></NavBar>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
     );
}
 
export default MainLayout;