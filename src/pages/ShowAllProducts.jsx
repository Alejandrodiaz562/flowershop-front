import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import RenderProduct from "../components/catalog/RenderProduct";

const ShowAllProducts = ({type}) => {

    const { slug } = useParams();
    const { products } = useProducts()

    let filteredData = []

    if (type === 'categorias') {
        filteredData = products.filter(el => el.category === slug)
    } else if (type === 'ocasiones') {
        filteredData = products.filter(el => el.ocassions === slug)
    } else if (type === 'flores') {
        filteredData = products.filter(el => el.flowers === slug)
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