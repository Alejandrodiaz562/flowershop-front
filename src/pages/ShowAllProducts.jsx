import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import RenderProduct from "../components/catalog/RenderProduct";

const ShowAllProducts = ({type}) => {

    const { slug } = useParams();
    const { products } = useProducts()

    let filteredData = []

    console.log(products)

    if (type === 'categorias') {
        filteredData = products.filter(el => el.category === slug)
    } else if (type === 'ocasiones') {
        filteredData = products.filter(el => el.occasions.includes(slug))
    } else if (type === 'anchetas') {
        filteredData = products.filter(el => el.category === 'anchetas')
    } else if (type === 'condolencias') {
        filteredData = products.filter(el => el.collection === 'condolencias')
    } 

    return ( 
        <div className={`
            h-auto 
            grid grid-cols-2
            gap-4
            p-2
            lg:grid-cols-4
            lg:py-10 lg:px-20
        `}>
            {filteredData.map((el )=> (
                <RenderProduct product={el}></RenderProduct>
            ))}
            
            
        </div>
     );
}
 
export default ShowAllProducts;