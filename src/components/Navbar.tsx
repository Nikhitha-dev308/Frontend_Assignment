import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-[#4a8b71] via-[#3f7c65] to-[#2d5f4f] py-2 shadow-lg backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                    <div className="flex items-center h-16 space-x-5">
                        <Link to='/'>
                            <h1 className="text-white text-2xl font-bold tracking-wider hover:text-[#34d399] transition-all duration-300">
                                ALTIBBE - Health Wisdom Virtue
                            </h1>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-10 text-white font-medium text-lg">
                        <Link
                            to="/about"
                            className="hover:text-[#34d399] hover:scale-110 transition-all duration-300 transform"
                        >
                            About
                        </Link>
                        <Link
                            to="/user/login"
                            className="hover:text-[#34d399] hover:scale-110 transition-all duration-300 transform"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar