const CategoryTile = ({product, data}) => {
    return ( 
        <div
            className={
                `min-w-[40%] max-w-[45%] w-auto
                min-h-20 h-25
                border border-black`
            }
        >
            <h2>{product}</h2>
        </div>
    );
}
 
export default CategoryTile ;