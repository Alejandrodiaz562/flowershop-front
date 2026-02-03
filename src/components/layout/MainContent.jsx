import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'
import ProductsPreview from '../catalog/ProductsPreview';
import SectionContainer from '../ui/SectionContainer'
import { getProducts } from "../../api/products.api";

const MainProducts = () => {

    const { categoryList } = useOutletContext()
    const { occasionList } = useOutletContext()
    const { flowerList } = useOutletContext()
    const { condolenceCategory } = useOutletContext()
    
    const [myData, setMyData] = useState([])

    useEffect(()=> {
        const loadProducts = async () => {
            const response = await getProducts()
            setMyData(response.data.products)
            
        }

        loadProducts()
    }, [] )

    
    

    return ( 
        <div
            className={`
                w-full
                min-h-190 h-auto
                p-3`
            }
        >   
            
            <SectionContainer
                child={
                    categoryList.map((el, index) => (
                        
                        <ProductsPreview
                            key={index}
                            product={el}
                            myData={myData}
                        /> 
                        
                    ))

                    
                }
            />
                
            <SectionContainer
                child={
                    occasionList.map((occasion, index) => (
                        <ProductsPreview
                            key={index}
                            product={occasion}
                            myData={myData}
                        /> 
                    ))
                }
            />

            <SectionContainer
                child={
                    flowerList.map((flower, index) => (
                        <ProductsPreview 
                            key={index}
                            product={flower} 
                            myData={myData}
                        /> 
                    ))
                }
            />

            <SectionContainer
                child={
                    <ProductsPreview
                    
                    product={condolenceCategory} 
                    myData={myData}
                    /> 
                }
            />

        </div>
    );
}
 
export default MainProducts;