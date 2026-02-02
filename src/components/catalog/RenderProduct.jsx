const RenderProduct = ({product}) => {
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
                    text-sm
                    flex items-center
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
                    h-[10%]`
                }
            >
                {`COP $${product.price}`}
            </div>
        </div>
    );
}
 
export default RenderProduct;