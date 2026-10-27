import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';
import logo from '../assets/logo.png';
import { X, Menu, StoreIcon, ChevronUp, ChevronDown } from 'lucide-react';
import bluesky from '../assets/SocialIcons/footer/Bluesky_Icon_Blue.png';
import youtube from '../assets/SocialIcons/navbar/Youtube_Icon_Red.png';
import instagram from '../assets/SocialIcons/navbar/Instagram_Icon_Sunset.png';
import facebook from '../assets/SocialIcons/navbar/Facebook_Icon_NavyBlue_002.png';
import tiktok from '../assets/SocialIcons/navbar/TikTok_Icon_001.png';
// import store from '../assets/SocialIcons/navbar/store.png';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState(new Set());

    const location = useLocation();
    const currentPath = location.pathname;
    const navItems = [
        { id: 'home', name: 'Home', path: '/' },
        {
            id: 'games',
            name: 'Games', 
            path: '/fat-butters',
            submenu: [
                { id: 'fat-butters', name: "Fat Butters' Jetpack Ride", path: '/fat-butters' },
                { id: 'spite-castle', name: 'Spite Castle', path: '/spite-castle' },
                { id: 'catch-night', name: 'Catch of the Night', path: '/catch-night' },
            ],
        },
        {
            id: 'comics',
            name: 'Comics',
            path: '/monster-mall',
            submenu: [
                { id: 'monster-mall', name: 'Monster Mall', path: '/monster-mall' },
                { id: 'bestest-bear', name: 'Bestest Bear', path: '/bestest-bear' },
            ],
        },
        
        { id: 'otherworks', name: 'Other Works', path: '/other-works' },
        { id: 'about', name: 'About Us', path: '/about' },
        { id: 'contact', name: 'Contact Us', path: '/contact' },
    ];


    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
        setOpenSubmenus(new Set());
    }, [location]);

    // Function to toggle submenu
    const toggleSubmenu = (id:string) => {
        const newOpenSubmenus = new Set(openSubmenus)
        if (newOpenSubmenus.has(id)) {
            newOpenSubmenus.delete(id);
        } else {
            newOpenSubmenus.add(id);
        }
        setOpenSubmenus(newOpenSubmenus);
    }

    return (
        <header className='bg-gradient-to-br from-[#5B9DD0] via-[#3A6E9E] to-[#1E3A52] border-b-8 border-gray-300 sticky top-0 z-50 shadow-2xl'>
            <div className='mx-auto container px-4 py-4'>
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className='flex items-center'>
                        <Link to='/' className='hover:scale-110 transition-transform duration-200'>
                            <img src={logo} alt='Simeck Entertainment Logo' className='h-24 inline-block w-auto' />
                        </Link>
                    </div>

                    {/*  Social Media Icons */}
                    <div className='flex items-center space-x-4'>
                        {/* Store button - yellow shopping bag icon */}
                        <a href='http://shop.simeck.com/' target="_blank" rel="noopener noreferrer" className="h-9 w-9 inline-block p-0 text-white rounded-full hover:scale-125 transition-all duration-200">
                            <Button
                                variant="ghost" size="sm" className='bg-yellow-400 hover:bg-yellow-500 text-yellow-900 transition-all duration-200 rounded-full shadow-lg border-2 border-gray-300 '
                            >
                                <StoreIcon className='h-5 w-5' />
                            </Button>
                            {/* <img src={store} alt="Store" className='h-full w-full object-contain' /> */}
                        </a>
                        <a href='https://bsky.app/profile/thesimeckian.bsky.social' target="_blank" rel="noopener noreferrer" className="h-9 w-9 inline-block p-0 text-white rounded-full hover:scale-125 transition-all duration-200">
                            <img src={bluesky} alt="Bluesky" className='h-full w-full object-contain' />
                        </a>
                        <a href='https://www.youtube.com/channel/UCfTUGJu9uG_W4JISLfQlK9Q' target="_blank" rel="noopener noreferrer" className="h-9 w-9 inline-block p-0 text-white rounded-full hover:scale-125 transition-all duration-200">
                            {/* <Button
                                variant="ghost" size="sm" className='bg-red-800 hover:bg-red-900 text-white hover:scale-125 transition-all rounded-full duration-200 shadow-lg border-2 border-gray-300'
                            >
                                <Youtube className='h-5 w-5' />
                            </Button> */}
                            <img src={youtube} alt="Youtube" className='h-full w-full object-contain' />
                        </a>
                        <a href='https://www.instagram.com/thesimeckian/' target="_blank" rel="noopener noreferrer" className="h-9 w-9 inline-block p-0 text-white rounded-full hover:scale-125 transition-all duration-200">
                            {/* <Button 
                                variant="ghost" size="sm" className='bg-orange-800 hover:bg-orange-900 text-white hover:scale-125 transition-all duration-200 rounded-full shadow-lg border-2 border-gray-300 '
                            >
                                <Instagram className='h-5 w-5' />
                            </Button> */}
                            <img src={instagram} alt="Instagram" className='h-full w-full object-contain' />
                        </a>
                        <a href='https://www.facebook.com/simeck.entertainment/' target="_blank" rel="noopener noreferrer" className="h-9 w-9 inline-block p-0 text-white rounded-full hover:scale-125 transition-all duration-200">
                            <img src={facebook} alt="Facebook" className='h-full w-full object-contain' />
                        </a>
                        <a href='https://www.tiktok.com/@thesimeckian' target="_blank" rel="noopener noreferrer" className="h-9 w-9 inline-block p-0 text-white rounded-full hover:scale-125 transition-all duration-200">
                            <img src={tiktok} alt="TikTok" className='h-full w-full object-contain' />
                        </a>
                    </div>

                    {/* Desktop Navigation Menu */}
                    <nav className='hidden lg:flex items-center space-x-6 lg:space-x-2 xl:space-x-6'>
                        {navItems.map((item) => (
                            <div key={item.id} className='relative group'>
                                <Link to={item.path}>
                                    <Button
                                        variant={currentPath === item.path ? 'default' : 'ghost'}
                                        className={`
                                                hover:scale-110 transition-all duration-200 rounded-full border-2 border-white shadow-lg
                                                ${currentPath === item.path
                                                    ? 'bg-gradient-to-r from-cyan-400 to-sky-500 text-white'
                                                    : 'bg-white text-[#1E3A52] hover:bg-gradient-to-r hover:from-[#5B9DD0] hover:to-cyan-400 hover:text-white'
                                                }   
                                                relative font-bold
                                            `}
                                    >
                                        {item.name}
                                    </Button>
                                </Link>

                                {/* Drowdown menu */}
                                {item.submenu && (
                                    <div className='
                                            absolute top-full left-0 mt-2 w-48 bg-gradient-to-br from-white to-cyan-50 rounded-2xl shadow-2xl border-4 border-cyan-200 opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 overflow-hidden'>
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.id}
                                                to={subItem.path}
                                                className='block w-full text-left px-4 py-3 text-purple-800 font-semibold hover:bg-gradient-to-r hover:from-lime-200 hover:to-cyan-200 hover:text-purple-900 first:rounded-t-2xl last:rounded-b-2xl transition-all duration-200 hover:scale-105 transform'
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        
                    </nav>

                    {/* Mobile menu button */}
                    <button                        
                        className="lg:hidden px-4 py-2 rounded-md text-gray-700 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2  focus:ring-blue-500"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ?
                            <X size={28} className='text-blue-400' />
                            : <Menu size={28} className="text-blue-400" />
                        }
                    </button>
                </div>
                {/* Mobile Menu */}
                {/* {isMenuOpen && (
                    <nav className='fixed px-2 py-2 w-full bg-gradient-to-r from-purple-800 via-indigo-700 to-orange-700 flex flex-col items-center justify-center space-y-1 z-40'>
                        {navItems.map((item)=> (
                            <Link
                                key={item.id}
                                to={item.path}
                                className="text-xl py-4"                                
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                )} */}

                 {isMenuOpen && (
                    <nav className='lg:hidden fixed inset-0 top-24 bg-gradient-to-br from-[#5B9DD0] via-[#3A6E9E] to-[#1E3A52] flex flex-col items-center justify-start pt-8 z-40 overflow-y-auto'>
                        {navItems.map((item) => (
                            <div key={item.id} className="w-full px-4 py-2">
                                {item.submenu ? (
                                    <div className="w-full">
                                        <button
                                            onClick={() => toggleSubmenu(item.id)}
                                            className="w-full flex justify-between items-center text-xl py-4 text-white font-bold"
                                        >
                                            <span>{item.name}</span>
                                            {openSubmenus.has(item.id) ? (
                                                <ChevronUp className="h-5 w-5" />
                                            ) : (
                                                <ChevronDown className="h-5 w-5" />
                                            )}
                                        </button>
                                        {openSubmenus.has(item.id)&& (
                                            <div className="pl-6 pb-2 space-y-3">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.id}
                                                        to={subItem.path}
                                                        className="block text-lg py-2 text-white opacity-90 hover:opacity-100 transition-opacity"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setOpenSubmenus(new Set());
                                                        }}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className="block text-xl py-4 text-white font-bold"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}

                        
                        {/* UPDATED: Mobile Social Media Icons */}
                        <div className='flex items-center space-x-4 mt-8 pb-8'>
                            <a href='http://shop.simeck.com/' target="_blank" rel="noopener noreferrer" className="h-9 w-9 inline-block p-0 text-white rounded-full hover:scale-125 transition-all duration-200">
                                <Button
                                    variant="ghost" size="sm" className='bg-yellow-400 hover:bg-yellow-500 text-yellow-900 transition-all duration-200 rounded-full shadow-lg border-2 border-gray-300 '
                                >
                                    <StoreIcon className='h-5 w-5' />
                                </Button>
                                {/* <img src={store} alt="Store" className='h-full w-full object-contain' /> */}
                            </a>
                            <a href='https://bsky.app/profile/thesimeckian.bsky.social' target="_blank" rel="noopener noreferrer" className="h-9 w-9 inline-block p-0 text-white rounded-full hover:scale-125 transition-all duration-200">
                                <img src={bluesky} alt="Bluesky" className='h-full w-full object-contain' />
                            </a>
                            <a href='https://www.youtube.com/channel/UCfTUGJu9uG_W4JISLfQlK9Q' target="_blank" rel="noopener noreferrer" className="h-9 w-9 inline-block p-0 text-white rounded-full hover:scale-125 transition-all duration-200">
                                {/* <Button
                                    variant="ghost" size="sm" className='bg-red-800 hover:bg-red-900 text-white hover:scale-125 transition-all rounded-full duration-200 shadow-lg border-2 border-gray-300'
                                >
                                    <Youtube className='h-5 w-5' />
                                </Button> */}
                                <img src={youtube} alt="Youtube" className='h-full w-full object-contain' />
                            </a>
                            <a href='https://www.instagram.com/thesimeckian/' target="_blank" rel="noopener noreferrer" className="h-9 w-9 inline-block p-0 text-white rounded-full hover:scale-125 transition-all duration-200">
                                {/* <Button 
                                    variant="ghost" size="sm" className='bg-orange-800 hover:bg-orange-900 text-white hover:scale-125 transition-all duration-200 rounded-full shadow-lg border-2 border-gray-300 '
                                >
                                    <Instagram className='h-5 w-5' />
                                </Button> */}
                                <img src={instagram} alt="Instagram" className='h-full w-full object-contain' />
                            </a>
                            <a href='https://www.facebook.com/simeck.entertainment/' target="_blank" rel="noopener noreferrer" className="h-9 w-9 inline-block p-0 text-white rounded-full hover:scale-125 transition-all duration-200">
                                <img src={facebook} alt="Facebook" className='h-full w-full object-contain' />
                            </a>
                            <a href='https://www.tiktok.com/@thesimeckian' target="_blank" rel="noopener noreferrer" className="h-9 w-9 inline-block p-0 text-white rounded-full hover:scale-125 transition-all duration-200">
                                <img src={tiktok} alt="TikTok" className='h-full w-full object-contain' />
                            </a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}