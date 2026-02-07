const SectionContainer = ({child}) => {
    return ( 
        <div
            className={`
                min-h-[45%] h-auto
                lg:flex lg:flex-col lg:items-center
                mb-15
                grid 
                gap-y-5`
            }
        >
            {child}
        </div>
     );
}
 
export default SectionContainer;