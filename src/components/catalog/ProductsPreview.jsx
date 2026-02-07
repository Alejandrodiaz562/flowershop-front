import  RenderProduct from './RenderProduct'
import { Link } from 'react-router-dom';

const ProductsPreview = ({path, product, data}) => {

    const filteredData = 
        data.filter(el =>
            el.occasions.includes(product) || 
            el.category === product || 
            el.flowers.includes(product) || 
            el.collection === product
        )

    return ( 
        <div 
            className={`
                h-auto lg:h-[82vh]
                lg:w-[80%] 
                bg-mybeishe
                p-2
                rounded
                lg:flex lg:flex-col lg:items-center`
            }
        >
            <div
                className={`
                    lg:h-[10%]
                    lg:p-0
                    pl-3`
                }
            >
                <h2 
                    className={`
                        font-oswald
                        tracking-widest
                        text-xl lg:text-4xl
                        lg:mb-2
                        text-myblack`
                    }
                >
                    {product.toUpperCase()}
                </h2>
            </div>

            <div
                className={`
                    h-150 lg:h-full
                    grid grid-cols-2
                    gap-4
                    p-2
                    lg:grid-cols-4
                    lg:w-[95%]`
                }
            >
                {   
                    filteredData.length >= 1 ? (
                        filteredData
                        .slice(0, 4)
                        .map((el, index) => (
                            <RenderProduct
                                key={index}
                                product={el}
                            />
                    ))
                    ) : (
                        <p
                            className={` 
                                absolute
                                text-center
                                mt-10
                                w-[85%]`
                            }
                        >EN EL MOMENTO NO TENEMOS PRODUCTOS PARA MOSTRAR</p>
                    )

                    
                }
            </div>
            
            <div>
                {
                    filteredData.length > 4 && (
                        <div
                            className={`
                                w-full
                                lg:h-full   
                                p-1
                                text-center`
                            }
                        >
                            <button
                                className={`
                                    bg-mybeishe2
                                    text-white
                                    font-oswald
                                    tracking-widest
                                    rounded
                                    p-2`
                                }
                            >
                                <Link
                                    to={path}
                                >
                                    VER TODOS
                                </Link>
                            </button>
                        </div>
                    )
                }
            </div>
        </div>    
    );
}
 
export default ProductsPreview;