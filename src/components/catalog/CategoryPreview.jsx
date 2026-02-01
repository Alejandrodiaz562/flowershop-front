
import  RenderProduct from './RenderProduct'

const CategoryPreview = ({category, myData}) => {

    
    console.log(myData)
    const filteredData = myData.filter((el)=> el.
    category === category)
    
    console.log('aqui abajo estan mis datos filtrados')
    console.log(filteredData)

    
    return ( 
        <div className={`
            min-h-70 h-auto
            border-3 border-purple-600
            bg-amber-300`}
        >
            <div
                className={`
                    border-3 border-red-600
                    pl-3`
                }
            >
                <h2>{category.toUpperCase()}</h2>
            </div>

            <div
                className={`
                    min-h-65 h-auto
                    border-3 border-white
                    grid grid-cols-2
                    gap-4
                    p-2`
                }
            >
                {   
                
                    filteredData.slice(0, 4).map(el => (
                        <RenderProduct product = {el}></RenderProduct>
                    ))

                    
                }
                
            </div>
            
            <div>
                {
                    filteredData.length > 4 &&(
                        <div
                            className={`
                                border-3 border-blue-500
                                w-full
                                text-center
                                `}
                        >
                            <button>VER TODOS</button>
                        </div>
                    )
                }
            </div>
        </div>    
    );
}
 
export default CategoryPreview;