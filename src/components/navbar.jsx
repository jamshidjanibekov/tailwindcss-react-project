import {styles} from "../util/style";
import {navigationLinks} from "../util/constants";
import {logo, menu, close} from '../assets'
import {useState} from "react";

const Navbar = () =>{
    const [toggleNav, setToggleNav] = useState(false)
    const [active, setActive] = useState('home')
    const toggleHandler = () => setToggleNav(prev => !prev)
    const activeHandler = id =>setActive(id)
    return (
        <div className={`w-full py-6 ${styles.flexBetween}`}>
            {/*Logo*/}
            <img src={logo} alt="logo" className='w-[100px] h-[45px] cursor-pointer'/>
            {/*navigation link*/}
            <ul className='list-none sm:flex hidden justify-end items-center flex flex-1'>
                {navigationLinks.map((nav, idx) =>(
                    <li key={nav.id}
                        className={`
                            ${idx === navigationLinks.length - 1 ? 'mr-0': 'mr-10'}
                            ${active === nav.id ? 'text-white' : 'text-lightWhite'}
                            font-montserrat font-normal cursor-pointer text-[16px] text-white  hover:text-white transition-all duration-500`}
                        onClick={() =>activeHandler(nav.id)}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>

                    </li>
                ))}
            </ul>
            
            {/* Navigation btn*/}
            <div className={`sm:hidden flex flex-1 justify-end items-center cursor-pointer`}>
                <img className={`w-[30px]   bg-slate-50 `} src={toggleNav ? close : menu} onClick={toggleHandler} alt="nav"/>

                <div className={`${!toggleNav ? 'hidden' : 'flex'} p-6 bg-black-gradient absolute top-20 right-0 left-0 w-full sidebar`}>
                    <ul className='list-none flex  justify-center items-center  flex-1'>
                        {navigationLinks.map((nav, idx) =>(
                            <li
                                key={nav.id}
                                className={`
                                    ${idx === navigationLinks.length - 1 ? 'mr-0': 'mr-10'}
                                    ${active === nav.id ? 'text-white' : 'text-lightWhite'}
                                    font-montserrat font-normal cursor-pointer text-[16px] text-white  hover:text-white transition-all duration-500`}
                                    onClick={() => activeHandler(nav.id)}
                                >
                                {nav.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar