import { Link } from 'react-router-dom';
import { FiHelpCircle, FiSettings, FiUser } from 'react-icons/fi';

const SideNavbar = () => {
    return (
        <>
            <div>
                <div className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-r from-[#2e7d63] via-[#4a8b71] to-[#76b39d] shadow-lg px-6 py-6 z-50">
                    <Link to='/expert/dashboard' className="group block text-center mb-10">
                        <h1 className="text-white text-2xl font-extrabold tracking-wider hover:text-[#34d399] transition-all duration-300">
                            ALTIBBE </h1>
                        <span className="mt-1 text-sm text-white opacity-0 group-hover:opacity-100 transition duration-300">
                            Health Wisdom Virtue
                        </span>
                    </Link>

                    <nav>
                        <ul className="space-y-6 text-white">
                            <li className="flex items-center gap-3 mt-5 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                                <FiUser className="text-xl" />
                                Manage Users
                            </li>

                            <li className="flex items-center gap-3 mt-5 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                                💳 Payments
                            </li>
                            <li className="flex items-center gap-3 mt-5 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                                📚 Resources
                            </li>
                            <li className="flex items-center gap-3 mt-5 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                                <FiHelpCircle className="text-xl" />
                                Support
                            </li>
                            <li className="flex items-center gap-3 mt-5 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                                <FiSettings className="text-xl" />
                                Settings
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default SideNavbar;
