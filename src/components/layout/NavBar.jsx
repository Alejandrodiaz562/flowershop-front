import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars as HamburgerButton, FaTimes as XButton } from "react-icons/fa";
import { HiChevronDown, HiChevronUp  } from "react-icons/hi2";

const NavBar = ({menuItems, mainMenuItems, secondaryMenuItems, occasionsList, categoriesList, flowersList}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [openSubMenu, setOpenSubMenu] = useState(null)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    // SI EL ITEM ACTUAL ES IGUAL AL NUEVO ITEM, OPENSUBMENU SIGUE 
    // SIENDO NULL, SINO SI DETECTA UN NUEVO ITEM DIFERENTE AL ACTUAL 
    // PASA A VALER ESE NUEVO ITEM
    const toggleSubMenu =(menuName) => {
        setOpenSubMenu(prev => 
            prev === menuName ? null : menuName  
        ) 
    }

    const renderSubMenuItems = (menuItem) => {
        let list = []

        if (menuItem === 'categorias'){
                list = categoriesList
            } else if(menuItem === 'ocasiones'){
                list = occasionsList
            } else if (menuItem === 'flores') {
                list = flowersList
            } else return null

            return <ul
                        className={`
                            ${openSubMenu === menuItem 
                                ? subMenuClass 
                                : 'hidden'
                            }`
                        }
                    >
                        {list.map((item)=> (
                            <li
                                key={item}
                                className={subMenuItemsClass}
                            >
                                <Link 
                                    to={`/${menuItem}/${item}`}
                                >
                                    {item.toUpperCase()}
                                </Link>
                            </li>
                        ))}
                    </ul>
    }

    const navClass = (`
        w-full
        h-20 
        flex 
        items-center
        justify-center 
        sticky 
        top-0
        z-[50]
        bg-myblack`
    )

    const hamburguerButtonClass = (` 
        text-3xl 
        text-white
        lg:hidden`
    )

    const menuClass = (`
        h-full lg:h-auto w-full lg:w-[70%]
        px-10 pt-20 pb-10 lg:p-0
        flex flex-col lg:flex-row
        lg: gap-x-4
        lg:justify-center
        fixed lg:static 
        top-0
        overflow-auto lg:overflow-visible
        bg-myblack 
        text-mygold`
    )

    const menuItemsClass = (`
        mb-10 lg:m-0
        text-3xl lg:text-xl
        font-oswald
        tracking-widest
        lg:flex
        lg:items-center`
    )

    const menuOpenClass = (`
        transition-transform
        duration-800 
        ease-in-out`
    )

    const menuCloseClass = (`
        translate-x-full lg:translate-x-0
        transition-transform 
        duration-800 
        ease-in-out`
    )

    const subMenuClass = (`
        pl-10 lg:p-5
        lg:absolute
        lg:top-20
        lg:grid
        lg:grid-cols-2
        lg:gap-x-2
        lg:gap-y-2
        lg:min-w-70
        lg:bg-myblack`
    )

    const subMenuItemsClass = (`
        h-full w-full
        py-2 lg:px-2
        lg:text-center`
    )

    const iconoContainerClass = (`
        w-[80%] lg:w-[20%]
        h-full
        flex flex-row
        items-center
        justify-between lg:justify-center`
    )

    const iconoContainerClass2 = (`
        h-full
        px-4
        flex flex-col
        items-center
        justify-center`
    )

    const sanJudasClass = (`
        font-satisfy 
        text-xl lg:text-2xl
        font-bold 
        text-mygold`
    )

    const floristeriaClass = (`
        font-amatic
        lg:text-xl
        text-white 
        tracking-widest`
    )

    const xBbuttonClass = (`
        text-3xl
        absolute
        right-10
        top-10
        text-white
        lg:hidden`
    )

    const itemMenuBtnClass = (` 
        w-fit
        p-2
        flex
        items-center 
        gap-2`
    )

    return ( 

        <nav className={navClass} >

            <div className={iconoContainerClass}>

                <Link className={iconoContainerClass2} to={'/'}>

                    <h1 className={sanJudasClass}>
                      SAN JUDAS
                    </h1>

                    <span className={floristeriaClass}>
                      FLORISTERIA
                    </span>

                </Link>

                <HamburgerButton 
                    className={hamburguerButtonClass}
                    onClick={toggleMenu}
                >
                </HamburgerButton>

            </div>
                                    
            <ul 
                className={`
                    ${menuClass}
                    ${isOpen 
                        ? menuOpenClass 
                        : menuCloseClass 
                    }`
                }
            >
                
                <XButton   
                    className={xBbuttonClass}
                    onClick={toggleMenu}
                />

                {   
                    menuItems.map((el, index)=> {
                        if(mainMenuItems.includes(el)){
                            return <li key={index} 
                                        className={menuItemsClass}
                                    >
                                        <button 
                                            onClick={() => toggleSubMenu(el)} 
                                            className={itemMenuBtnClass}
                                        >
                                            {el.toUpperCase()}
                                            {openSubMenu === el  
                                                ? <HiChevronUp /> 
                                                : <HiChevronDown />
                                            }
                                        </button>
                                        
                                        {
                                            renderSubMenuItems(el)
                                        }
                                    </li>
                        }

                        if(secondaryMenuItems.includes(el)){
                            return <li key={el} 
                                        className={menuItemsClass}
                                    >
                                        <Link 
                                            to={`/${el}`}
                                            className={`
                                                w-full
                                                p-2
                                                flex
                                                items-center`
                                            }
                                        >
                                            {el.toUpperCase()}

                                        </Link>
                                    </li>
                        }
                    })

                }
            </ul>
        </nav>
    );
}
 
export default NavBar;