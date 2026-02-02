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
                    ${product.name.split(" ").length > 2 && 'text-sm'}
                    font-oswald
                    tracking-widest
                    text-myblack
                    flex flex-col items-center justify-center
                    h-[30%]`
                }
            >
                {product.name.toUpperCase().split(" ").map((el, i)=> (
                    <p key={i}>
                        {el}
                  </p>
                ))}
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