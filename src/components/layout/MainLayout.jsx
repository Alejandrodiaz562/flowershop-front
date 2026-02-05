import {Outlet} from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

const MainLayout = () => {

    const menuItems = ['categorias', 'ocasiones', 'anchetas', 'flores', 'condolencias']

    const mainMenuItems 
        = ['categorias', 'ocasiones', 'flores']

    const secondaryMenuItems  
        = ['anchetas', 'condolencias']

    const occasionsList  
        = ['amor', 'cumpleaños', 'aniversario', 'nacimiento', 'grados', 'primera comunion', 'matrimonio']

    const categoriesList  
        = ['bouquets', 'arreglos']

    const flowersList  
        = ['girasoles', 'rosas', 'lirios', 'gerberas', 'claveles', 'orquideas']

    const condolenceCategory  = 'condolencias'
  
    return ( 
        <div>
            <NavBar
                menuItems={menuItems}
                mainMenuItems={mainMenuItems} 
                secondaryMenuItems={secondaryMenuItems} 
                occasionsList={occasionsList} 
                categoriesList={categoriesList}
                flowersList={flowersList}
            >
            </NavBar>
            <div>
                <Outlet 
                    context={{categoriesList, 
                        occasionsList, 
                        flowersList, 
                        condolenceCategory
                    }} 
                />
            </div>
            <Footer/>
        </div>
     );
}
 
export default MainLayout;