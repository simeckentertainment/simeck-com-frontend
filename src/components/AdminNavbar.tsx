import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function AdminNavbar() {
    const { user, logout, isAuthenticated } = useAuth();
    const location = useLocation();
    const currentPath = location.pathname;

    const adminNavItems = [
        { id: 'dashboard', name: 'Dashboard', path: '/admin/dashboard' },
        {
            id: 'blog',
            name: 'Blog Management',
            path: '/admin/blogs',
            submenu: [
                { id: 'blog-list', name: 'All Blogs', path: '/admin/blogs' },
                { id: 'blog-create', name: 'Create Blog', path: '/admin/blogs/create' },
            ],
        },
        { id: 'users', name: 'User Management', path: '/admin/users' },
        { id: 'profile', name: 'Update Profile', path: '/admin/profile' },
    ];

    if (!isAuthenticated) {
        return null;
    }

    return (
        <nav className='bg-gradient-to-r from-green-800 via-blue-700 to-purple-800 shadow-lg border-b-4 border-green-200'>
            <div className='container mx-auto px-4 py-3'>
                <div className='flex items-center justify-between'>
                    {/* Admin Navigation Items */}
                    <div className='flex items-center space-x-4'>
                        <div className='text-white font-bold text-lg mr-4'>
                            Admin Panel
                        </div>
                        {adminNavItems.map((item) => (
                            <div key={item.id} className='relative group'>
                                <Link to={item.path}>
                                    <Button
                                        variant={currentPath === item.path ? 'default' : 'ghost'}
                                        className={`
                                            hover:scale-110 transition-all duration-200 rounded-full border-2 border-white shadow-lg
                                            ${currentPath === item.path
                                                ? 'bg-white text-green-800'
                                                : 'bg-transparent text-white hover:bg-white hover:text-green-800'
                                            }   
                                            relative font-bold
                                        `}
                                    >
                                        {item.name}
                                    </Button>
                                </Link>

                                {/* Dropdown menu */}
                                {item.submenu && (
                                    <div className='
                                        absolute top-full left-0 mt-2 w-48 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-2xl border-4 border-green-200 opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 overflow-hidden'>
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.id}
                                                to={subItem.path}
                                                className='block w-full text-left px-4 py-3 text-green-800 font-semibold hover:bg-gradient-to-r hover:from-green-200 hover:to-blue-200 hover:text-green-900 first:rounded-t-2xl last:rounded-b-2xl transition-all duration-200 hover:scale-105 transform'
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    
                    {/* User Profile Section */}
                    <div className='flex items-center space-x-4'>
                        <div className='text-white text-sm'>
                            Welcome, <span className='font-bold'>{user?.firstName}</span>
                        </div>
                        
                        {/* User Profile Dropdown */}
                        <div className='relative group'>
                            <Button
                                variant='ghost'
                                className='bg-white text-green-800 hover:bg-green-50 hover:scale-110 transition-all duration-200 rounded-full border-2 border-green-200 shadow-lg font-bold'
                            >
                                <User className="w-4 h-4 mr-2" />
                                {user?.firstName}
                            </Button>
                            
                            <div className='absolute top-full right-0 mt-2 w-48 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-2xl border-4 border-green-200 opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 overflow-hidden'>
                                <div className="px-4 py-3 border-b border-green-200">
                                    <p className="text-sm font-medium text-green-800">{user?.firstName} {user?.lastName}</p>
                                    <p className="text-xs text-gray-600">{user?.email}</p>
                                </div>
                                <button
                                    onClick={logout}
                                    className='block w-full text-left px-4 py-3 text-green-800 font-semibold hover:bg-gradient-to-r hover:from-red-200 hover:to-pink-200 hover:text-red-900 transition-all duration-200 hover:scale-105 transform'
                                >
                                    <LogOut className="w-4 h-4 mr-2 inline" />
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
