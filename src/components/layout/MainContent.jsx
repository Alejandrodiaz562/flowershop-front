import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'
import ProductsPreview from '../catalog/ProductsPreview';
import SectionContainer from '../ui/SectionContainer'
import { getProducts } from "../../api/products.api";

const MainProducts = () => {

    const { categoriesList } = useOutletContext()
    const { occasionsList } = useOutletContext()
    const { flowersList } = useOutletContext()
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
                    categoriesList.map((category, index) => (
                        <ProductsPreview
                            key={index}
                            product={category}
                            data={myData}
                        /> 
                    )) 
                }
            />
                
            <SectionContainer
                child={
                    occasionsList.map((occasion, index) => (
                        <ProductsPreview
                            key={index}
                            product={occasion}
                            data={myData}
                        /> 
                    ))
                }
            />

            <SectionContainer
                child={
                    <ProductsPreview
                        product={'anchetas'}
                        data={myData}
                    />
                }
            />

            <SectionContainer
                child={
                    flowersList.map((flower, index) => (
                        <ProductsPreview 
                            key={index}
                            product={flower} 
                            data={myData}
                        /> 
                    ))
                }
            />

            <SectionContainer
                child={
                    <ProductsPreview
                        product={condolenceCategory} 
                        data={myData}
                    /> 
                }
            />

        </div>
    );
}
 
export default MainProducts;