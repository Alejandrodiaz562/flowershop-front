import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars as HamburgerButton, FaTimes as XButton } from "react-icons/fa";
import { HiChevronDown, HiChevronUp  } from "react-icons/hi2";

const NavBar = ({items1, items2, occasions, categories}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [openSubMenu, setOpenSubMenu] = useState(null)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    // SI EL ITEM ACTUAL ES IGUAL AL NUEVO ITEM, OPENSUBMENU SIGUE 
    // SIENDO NULL, SINO SI DETECTA UN NUEVO ITEM DIFERENTE AL ACTUAL 
    // PASA A VALER ESE NUEVO ITEM
    const toggleSubMenu =(menuName) => {
        setOpenSubMenu(prev => prev === menuName ? null : menuName  ) 
    }

    const renderSubMenuItems = (menuItem, matchLabel, subMenuItems) => {
        if (menuItem === matchLabel) {
            return (
                <ul
                    className={`
                        ${openSubMenu === matchLabel ? subMenuClass : 'hidden'}
                    `}
                >
                    {subMenuItems.map((item)=> (
                        <li
                            key={item}
                            className={subMenuItemsClass}
                        >
                            <Link to={`/${menuItem}/${item}`}>
                                {item.toUpperCase()}
                            </Link>
                        </li>
                    ))}
                </ul>
            )
        }
    }

    const navClass = (`
        w-full
        h-20 sm:h-25
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
        sm:hidden`
    )

    const menuClass = (`
        h-full sm:h-auto w-full sm:w-[70%]
        px-10 pt-20 pb-10 sm:p-0
        flex flex-col sm:flex-row
        sm: gap-x-4
        sm:justify-center
        fixed sm:static 
        top-0
        overflow-auto sm:overflow-visible
        bg-myblack 
        text-mygold`
    )

    const menuItemsClass = (`
        mb-10 sm:m-0
        text-3xl sm:text-xl
        font-playfair-display
        sm:flex
        sm:items-center`
    )

    const menuOpenClass = (`
        transition-transform
        duration-800 
        ease-in-out`
    )

    const menuCloseClass = (`
        translate-x-full sm:translate-x-0
        transition-transform 
        duration-800 
        ease-in-out`
    )

    const subMenuClass = (`
        pl-10 sm:p-5
        sm:absolute
        sm:top-20
        sm:grid
        sm:grid-cols-2
        sm:gap-x-2
        sm:gap-y-2
        sm:min-w-70
        sm:bg-myblack`
    )

    const subMenuItemsClass = (`
        h-full w-full
        py-2 sm:px-2
        sm:text-center`
    )

    const iconoContainerClass = (`
        w-[80%] sm:w-[20%]
        h-full
        flex flex-row
        items-center
        justify-between sm:justify-center`
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
        text-xl sm:text-2xl
        font-bold 
        text-mygold`
    )

    const floristeriaClass = (`
        font-amatic
        sm:text-xl
        text-white 
        tracking-widest`
    )

    const xBbuttonClass = (`
        text-3xl
        absolute
        right-10
        top-10
        text-white
        sm:hidden`
    )

    const itemMenuBtnClass = (` 
        w-full
        p-2
        flex
        items-center 
        gap-2`
    )

    return ( 

        <nav className={navClass} >

            <div className={iconoContainerClass}>

                <div className={iconoContainerClass2}>

                    <h1 className={sanJudasClass}>
                      SAN JUDAS
                    </h1>

                    <span className={floristeriaClass}>
                      FLORISTERIA
                    </span>

                </div>

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
                    items1.map((el) => (
                        <li 
                            key={el} 
                            className={menuItemsClass}
                        >
                            <button 
                                onClick={() => toggleSubMenu(el)} 
                                className={itemMenuBtnClass}
                            >
                                {el.toUpperCase()}
                                {openSubMenu === el  //
                                    ? <HiChevronUp /> 
                                    : <HiChevronDown />
                                }
                            </button>
                            {
                                renderSubMenuItems(
                                    el, 
                                    'ocasiones', 
                                    occasions
                                )
                            }
                                
                            {
                            renderSubMenuItems(
                                el, 
                                'categorias', 
                                categories
                            )
                            }
                        
                        </li>
                    ))
                }
                {
                    items2.map((el) => (
                        <li 
                            key={el} 
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
                    ))
                }
            </ul>
        </nav>
    );
}
 
export default NavBar;