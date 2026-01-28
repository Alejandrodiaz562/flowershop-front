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
    

    const [data, setData] = useState([])

    const myCategoryList = 
        categoryList.join(', ').split(',')

    const myOccasionList = 
        occasionList.join(', ').split(',')

    const myflowerList = 
        flowerList.join(', ').split(',')

    useEffect(()=> {
        const loadProducts = async () => {
            const response = await getProducts()
            setData(response.data.products)
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
                    myCategoryList.map(category => (
                        <CategoryPreview 
                            product={category} data={data}
                        /> 
                    ))
                }
            />

            <SectionContainer
                child={
                    myOccasionList.map(occasion => (
                        <CategoryTile 
                            product={occasion} data={data}
                        /> 
                    ))
                }
            />

            <SectionContainer
                child={
                    myflowerList.map(flower => (
                        <CategoryTile 
                            product={flower} data={data}
                        /> 
                    ))
                }
            />

            <SectionContainer
                child={
                    <CategoryTile 
                        product={condolenceCategory} data={data}
                    /> 
                }
            />

        </div>
    );
}
 
export default MainProducts;