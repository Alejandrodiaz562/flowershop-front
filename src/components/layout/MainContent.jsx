import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'
import CategoryPreview from '../catalog/CategoryPreview'
import CategoryTile from '../catalog/CategoryTile ';
import SectionContainer from '../ui/SectionContainer';
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
                p-3
              bg-blue-500`
            }
        >   
            
            <SectionContainer
                child={
                    categoryList.map((el, index) => (
                        
                        <CategoryPreview
                            key={index}
                            category={el}
                            myData={myData}
                        /> 
                        
                    ))
                }
            />
                <h2>{console.log(myData)}</h2>
            <SectionContainer
                child={
                    occasionList.map(occasion => (
                        <CategoryTile 
                            product={occasion} data={myData}
                        /> 
                    ))
                }
            />

            <SectionContainer
                child={
                    flowerList.map(flower => (
                        <CategoryTile 
                            product={flower} data={myData}
                        /> 
                    ))
                }
            />

            <SectionContainer
                child={
                    <CategoryTile 
                        product={condolenceCategory} data={myData}
                    /> 
                }
            />

        </div>
    );
}
 
export default MainProducts;