const RenderProduct = ({product}) => {

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CO').format(price)
    }

    return ( 
        <div
            className={`
                h-70 lg:h-full lg:w-full
                w-full`
            }
        >
            <div
                className={`
                    aspect-square
                    h-[60%] lg:h-[70%]
                    w-full`
                }
            >
                <img 
                    src={product.imagesURLS[0]}
                    className={`
                        w-full h-full
                        rounded
                        object-cover 
                        object-[50%_50%]`
                    } 
                />
            </div>

            <div
                className={`
                    h-[30%] lg:h-[20%]
                    font-oswald
                    tracking-widest
                    px-10
                    lg:text-xl
                    text-myblack
                    flex items-center justify-center
                    text-center`
                }
            >
                {product.name.toUpperCase()}
            </div>
            <div
                className={`
                    h-[10%]
                    lg:text-xl
                    text-center
                    font-oswald
                    tracking-widest
                    text-myblack`
                }
            >
                {<p>COP {formatPrice(product.price)}</p>}
            </div>
        </div>
    );
}
 
export default RenderProduct;