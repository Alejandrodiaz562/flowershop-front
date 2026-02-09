import { useProducts } 
    from '../../context/ProductsContext';
import { useOutletContext } from 'react-router-dom'
import ProductsPreview from '../catalog/ProductsPreview';
import SectionContainer from '../ui/SectionContainer'


const MainProducts = () => {

    const { categoriesList, 
        occasionsList,
        flowersList
     } = useOutletContext()
    
    const { products, loading } = useProducts();
   
    if (loading) return <p>Cargando productos...</p>;
    
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
                            data={products}
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
                            data={products}
                        /> 
                    ))
                }
            />

            <SectionContainer
                child={
                    <ProductsPreview
                        path={`/anchetas`}
                        product={'anchetas'}
                        data={products}
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
                            data={products}
                        /> 
                    ))
                }
            />

            <SectionContainer
                child={
                    <ProductsPreview
                        path={`/condolencias`}
                        product={'condolencias'} 
                        data={products}
                    /> 
                }
            />

        </div>
    );
}
 
export default MainProducts;