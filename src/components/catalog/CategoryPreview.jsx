
import  RenderProduct from './RenderProduct'

const CategoryPreview = ({category, myData}) => {

    
    console.log(myData)
    const filteredData = myData.filter((el)=> el.
    category === category)
    
    console.log('aqui abajo estan mis datos filtrados')
    console.log(filteredData)

    
    return ( 
        <div className={`
            bg-mybeishe
            p-2
            rounded
            min-h-70 h-auto`}
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
                    {category.toUpperCase()}
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
                        .map(el => (
                            <RenderProduct 
                                product = {el}
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
                                rounded
                                p-2`}
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
 
export default CategoryPreview;