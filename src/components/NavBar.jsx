import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars as HamburgerButton, FaTimes as XButton } from "react-icons/fa";
import { HiChevronDown, HiChevronUp  } from "react-icons/hi2";

const NavBar = ({items, occasions, categories, flowers}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [openSubMenu, setOpenSubMenu] = useState(null)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    // 
    const toggleSubMenu =(menuName) => {
        setOpenSubMenu(prev => prev === menuName ? null : menuName  )
        
    }

    const navClass = (`
        bg-myblack 
        w-full
        h-20 sm:h-25
        flex 
        items-center
        justify-center 
        sticky 
        top-0 
        z-[50]`
    )

    const hamburguerButtonClass = (`
        sm:hidden 
        text-3xl 
        text-white`
    )

    const menuClass = (`
        bg-myblack
        text-mygold
        w-full sm:w-130
        h-screen sm:h-full
        p-10 sm:p-0
        flex
        flex-col sm:flex-row
        sm:justify-between
        fixed sm:static
        top-0`
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

    const renderSubMenuItems = (menuItem, matchLabel, subMenuItems) => {
        if (menuItem === matchLabel) {
            return (
                <ul 
                    //
                    className={`
                    ${openSubMenu === menuItem ? 'grid' : 'hidden'}
                    pl-10 sm:p-5
                    mt-10 sm:m-0
                    sm:absolute
                    sm:top-30
                    sm:grid-cols-2
                    sm:gap-x-2
                    sm:gap-y-2
                    sm:min-w-70
                    sm:bg-myblack` 
                    }
                >
                {subMenuItems.map((item)=> (
                    <li 
                        key={item} 
                        className={` 
                            h-full 
                            sm:w-full
                            py-1 sm:p-2
                            mb-2 sm:m-0`
                        }
                    >
                        <Link
                            to={`/${menuItem}/${item}`}
                        >
                            {item.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
            )
        }
    }

    return ( 
        <nav 
            className={navClass}
        >   
            <div className={`
                    flex-1
                    max-w-[80%] sm:max-w-[30%]
                    h-full
                    flex flex-row
                    items-center
                    justify-between sm:justify-start`
                }
            >
                <div 
                    className={`
                        flex flex-col
                        items-center
                        justify-center
                        h-full
                        px-4`
                    }
                >
                    <h1 className={`
                            font-satisfy 
                            text-2xl
                            font-bold 
                            text-mygold`
                        }
                    >
                      SAN JUDAS
                    </h1>
                    <span 
                        className={`
                            font-amatic
                            text-xl
                            text-white 
                            tracking-widest`
                        }
                    >
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
                
                <XButton className={`
                    text-3xl
                    absolute
                    right-10
                    top-10
                    text-white
                    sm:hidden`
                    }
                    onClick={toggleMenu}
                />
                {
                    items.map((el) => (
                        <li 
                            key={el} 
                            className={`
                                sm:flex
                                sm:items-center
                                my-10 sm:m-0
                                text-5xl sm:text-4xl
                                font-bold
                                font-amatic`
                            }
                        >
                            <button 
                                onClick={() => toggleSubMenu(el)} 
                                className={`
                                    flex
                                    items-center 
                                    gap-3
                                    w-fit`
                                }
                            >
                                {el.toUpperCase()}
                                {openSubMenu === el  //
                                    ? <HiChevronUp className="text-xl"/> 
                                    : <HiChevronDown className="text-xl"/>
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
                        {
                            renderSubMenuItems(
                                el, 
                                'flores', 
                                flowers
                            )
                        }
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}
 
export default NavBar;