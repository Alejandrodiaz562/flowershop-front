import {Outlet} from 'react-router-dom' 
import NavBar from './NavBar'
import Footer from './Footer'

const MainLayout = () => {

    const items1 = ['ocasiones', 'categorias']

    const items2 = ['condolencias', 'rosas', 'girasoles']

    const occasions = ['amor', 'cumpleaños', 'aniversario', 'nacimiento', 'grados', 'primera comunion', 'matrimonio']

    const categories = ['ramilletes', 'ramos', 'cajas', 'anchetas']
  
    return ( 
        <div>
            <NavBar items1={items1} items2={items2} occasions={occasions} categories={categories}></NavBar>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
     );
}
 
export default MainLayout;