

const CategoryPreview = ({product, data}) => {

    
    return ( 
        <div className={`
            min-h-70 h-auto
            border-3 border-black
            bg-amber-300`}
        >
            <div
                className={`
                    border-3 border-red-600
                    pl-3`
                }
            >
                <h2>{product.toUpperCase()}</h2>
            </div>

            <div
                className={`
                    min-h-65 h-auto
                    border-3 border-pink-600`
                }
            >
                {
                    data.map(el=>(
                        <h2>{el.name}</h2>
                    ))
                }
            </div>

        </div>    
    );
}
 
export default CategoryPreview;