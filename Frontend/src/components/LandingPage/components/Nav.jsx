import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
           <p class="font-palanquin text-4xl capitalize font-bold lg:max-w-lg text-coral-red">NGOConnect</p>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {
                        navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className='font-montserrat leading-normal text-[15px] text-slate-gray hover:text-coral-red transition-all'
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className="hidden max-lg:block">
                    <img
                        src={hamburger}
                        alt="Hamburger"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Nav;