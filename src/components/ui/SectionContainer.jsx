const SectionContainer = ({child}) => {
    return ( 
        <div
            className={`
                min-h-[45%] h-auto
                mb-10
                grid 
                gap-y-3`
            }
        >
            {child}
        </div>
     );
}
 
export default SectionContainer;