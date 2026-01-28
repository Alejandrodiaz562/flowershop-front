const SectionContainer = ({child}) => {
    return ( 
        <div
            className={`
                min-h-[45%] h-auto
                mb-3
                border-4 border-green-800`
            }
        >
            {child}
        </div>
     );
}
 
export default SectionContainer;