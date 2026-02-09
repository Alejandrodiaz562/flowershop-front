import { createContext, 
    useContext, 
    useEffect, 
    useState } from "react";
import { getProducts } from "../services/products";

// 1️⃣ Crear el contexto
const ProductsContext = createContext();

// 2️⃣ Provider
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadProducts = async () => {
        try {
            const response = await getProducts()
            setProducts(response.data.products)
        } catch (error) {
            console.error('error al obtener los productos:', error)
        } finally {
            setLoading(false)
        }
    }

     // 5️⃣ useEffect inicial
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductsContext.Provider
        value={{products, loading, loadProducts}}
    >
        {children}
    </ProductsContext.Provider>
  )
}

export const useProducts = () => {
    return useContext(ProductsContext);
};
