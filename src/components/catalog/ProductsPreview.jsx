import  RenderProduct from './RenderProduct'

const ProductsPreview = ({product, data}) => {

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
            bg-mybeishe
              p-2
              rounded
              min-h-70 h-auto`
            }
        >
            <div
                className={`
                    pl-3`
                }
            >
                <h2 
                    className={`
                        font-oswald
                        tracking-widest
                        text-xl
                        text-myblack`
                    }
                >
                    {product.toUpperCase()}
                </h2>
            </div>

            <div
                className={`
                    min-h-65 h-auto
                    grid grid-cols-2
                    gap-4
                    p-2`
                }
            >
                {   
                    filteredData
                        .slice(0, 4)
                        .map((el, index) => (
                            <RenderProduct
                                key={index}
                                product={el}
                            />
                    ))
                }
            </div>
            
            <div>
                {
                    filteredData.length > 4 && (
                        <div
                            className={`
                                w-full
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
                                VER TODOS
                            </button>
                        </div>
                    )
                }
            </div>
        </div>    
    );
}
 
export default ProductsPreview;