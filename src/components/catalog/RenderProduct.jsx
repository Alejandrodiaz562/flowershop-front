const RenderProduct = ({product}) => {
    return ( 
        <div
            className={`
                h-60
                w-full                           border-3 border-black
                `
            }
        >
            <div
                className={`
                    h-[60%]
                    border border-white
                    `
                }
            >
                <img 
                src={product.imagesURLS[0]}
                className={`
                    w-full h-full object-cover object-[50%_60%]
                    `} 
                />
            </div>

            <div
                className={`
                    text-sm
                    flex items-center
                    text-center
                    border border-white
                    h-[30%]
                    `}
            >
                {product.name.toUpperCase()}
            </div>
            <div
                className={`
                    text-sm
                    text-center
                    border border-white
                    h-[10%]
                    `
                }
            >
                {`COP $${product.price}`}
            </div>
        </div>
    );
}
 
export default RenderProduct;