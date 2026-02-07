import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'
import ProductsPreview from '../catalog/ProductsPreview';
import SectionContainer from '../ui/SectionContainer'
import { getProducts } from "../../api/products.api";

const MainProducts = () => {

    const { categoriesList } = useOutletContext()
    const { occasionsList } = useOutletContext()
    const { flowersList } = useOutletContext()
    
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
                    categoriesList.map((slug, index) => (
                        <ProductsPreview
                            key={index}
                            path={`/categorias/${slug}`}
                            product={slug}
                            data={myData}
                        /> 
                    )) 
                }
            />
                
            <SectionContainer
                child={
                    occasionsList.map((slug, index) => (
                        <ProductsPreview
                            key={index}
                            path={`/ocasiones/${slug}`}
                            product={slug}
                            data={myData}
                        /> 
                    ))
                }
            />

            <SectionContainer
                child={
                    <ProductsPreview
                        path={`/anchetas`}
                        product={'anchetas'}
                        data={myData}
                    />
                }
            />

            <SectionContainer
                child={
                    flowersList.map((slug, index) => (
                        <ProductsPreview 
                            key={index}
                            path={`/flores/${slug}`}
                            product={slug} 
                            data={myData}
                        /> 
                    ))
                }
            />

            <SectionContainer
                child={
                    <ProductsPreview
                        path={`/condolencias`}
                        product={'condolencias'} 
                        data={myData}
                    /> 
                }
            />

        </div>
    );
}
 
export default MainProducts;