const RenderProduct = ({product}) => {

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CO').format(price)
    }

    return ( 
        <div
            className={`
                h-60
                w-full`
            }
        >
            <div
                className={`
                    h-[60%]`
                }
            >
                <img 
                    src={product.imagesURLS[0]}
                    className={`
                        w-full h-full
                        rounded
                        object-cover 
                        object-[50%_60%]`
                    } 
                />
            </div>

            <div
                className={`
                    font-oswald
                    tracking-widest
                    text-myblack
                    flex items-center justify-center
                    text-center
                    h-[30%]`
                }
            >
                {product.name.toUpperCase()}
            </div>
            <div
                className={`
                    text-sm
                    text-center
                    font-oswald
                    tracking-widest
                    text-myblack
                    h-[10%]`
                }
            >
                {<p>COP {formatPrice(product.price)}</p>}
            </div>
        </div>
    );
}
 
export default RenderProduct;