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
        h-[15vh]
        flex 
        items-center
        justify-center sm:justify-evenly
        sticky 
        top-0 
        z-[50]`
    )

    const hamburguerButtonClass = (`
        sm:hidden 
        relative
        left-20
        text-3xl 
        text-white`
    )

    const menuClass = (`
        bg-myblack
        text-mygold
        w-full sm:w-fit

        h-screen sm:h-[12vh]

        flex
        flex-col sm:flex-row

        fixed sm:static
        top-0

        pt-25 sm:pt-0`
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
                    w-fit 
                    pl-10

                    sm:absolute
                    sm:mt-10
                    sm:grid-cols-2
                    sm:gap-x-5
                    sm:gap-y-3
                    sm:p-5
                    sm:bg-myblack` 
                    }
                >
                {subMenuItems.map((item)=> (
                    <li 
                        key={item} 
                        className={`
                            w-full
                            h-full 
                            py-1`
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
            <div 
                className={`
                    text-center`
                }
            >
                <h1 className={`
                        font-satisfy 
                        text-3xl
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

            <button 
                className={hamburguerButtonClass}
                onClick={toggleMenu}
            >
                <HamburgerButton/>
            </button>

            <ul 
                className={`
                    ${menuClass}
                    ${isOpen 
                        ? menuOpenClass 
                        : menuCloseClass 
                    }`
                }
            >
                <button 
                    className={`
                        text-3xl
                        absolute
                        right-10
                        top-9
                        text-white
                        sm:hidden`
                    }
                    onClick={toggleMenu}      
                >
                    <XButton/>
                </button>

                {
                    items.map((el) => (
                        <li 
                            key={el} 
                            className={`
                                my-4
                                ml-7
                                text-3xl sm:text-2xl
                                font-satisfy`
                            }
                        >
                            <button 
                                onClick={() => toggleSubMenu(el)} 
                                className={`
                                    flex
                                    items-center 
                                    gap-3
                                    mb-4
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