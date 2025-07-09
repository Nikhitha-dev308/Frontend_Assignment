import { useNavigate } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';

const TopNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <div>
            <div className="fixed top-0 left-64 right-0 h-16 bg-gradient-to-r from-[#4a8b71] via-[#3f7c65] to-[#2d5f4f] shadow-md px-8 flex justify-between items-center z-50">
                <h2 className="text-lg font-medium text-white">Admin Dashboard</h2>
                <div className="flex items-center gap-4 group">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-5 py-2 bg-white text-[#2d5f4f] rounded-full hover:bg-[#4a8b71] hover:text-white transition duration-200 cursor-pointer"
                    >
                        <HiOutlineLogout />
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar