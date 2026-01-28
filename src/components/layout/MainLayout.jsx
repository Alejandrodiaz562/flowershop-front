import {Outlet} from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

const MainLayout = () => {

    const mainMenuItems 
        = ['categorias', 'ocasiones']

    const secondaryMenuItems  
        = ['rosas', 'girasoles', 'condolencias']

    const occasionList  
        = ['amor', 'cumpleaños', 'aniversario', 'nacimiento', 'grados', 'primera comunion', 'matrimonio']

    const categoryList  
        = ['ramilletes', 'ramos', 'cajas', 'anchetas']

    const flowerList  
        = ['girasoles', 'rosas']

    const condolenceCategory  = 'condolencias'
  
    return ( 
        <div>
            <NavBar 
                mainMenuItems={mainMenuItems} 
                secondaryMenuItems={secondaryMenuItems} occasionList={occasionList} 
                categoryList={categoryList}>
            </NavBar>
            <div>
                <Outlet 
                context={{categoryList, 
                        occasionList, 
                        flowerList, 
                        condolenceCategory
                    }} 
                />
            </div>
            <Footer/>
        </div>
     );
}
 
export default MainLayout;