import { Link, useNavigate } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import SideNavbar from "../components/SideNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface User {
    _id: string;
    name: string;
    email: string;
    profession: string;
    status: string;
}

const Dashboard = () => {
    const [users, setUsers] = useState<User[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3002/user/details');
                setUsers(response.data);
                console.log("Fetched users:", response.data);
            } catch (error: any) {
                console.error("Error fetching user details:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleEdit = (id: string) => {
        navigate(`/edituser/${id}`);
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        try {
            await axios.delete(`http://localhost:3002/user/delete/${id}`);
            alert("User deleted successfully");
            setUsers(prev => prev.filter(user => user._id !== id));
        } catch (err) {
            console.error("Error deleting user:", err);
        }
    };

    return (
        <>
            <TopNavbar />
            <SideNavbar />

            <main className="ml-64 mt-16 px-6 py-10 bg-gray-50 min-h-screen">
                {/* Add User Button */}
                <div className="mb-6 flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-gray-800">User Management</h2>
                    <Link to="/user">
                        <button className="bg-gradient-to-r from-[#4a8b71] via-[#3f7c65] to-[#2d5f4f] text-white px-4 py-2 text-sm rounded-md shadow hover:opacity-90 transition">
                            + Add User
                        </button>
                    </Link>
                </div>

                {/* Table */}
                <div className="bg-white shadow-md rounded-lg overflow-x-auto max-w-6xl mx-auto">
                    <table className="w-full text-sm text-left border border-gray-200">
                        <thead className="bg-blue-100 text-gray-700">
                            <tr>
                                <th className="px-4 py-2 font-medium">S.No  </th>
                                <th className="px-4 py-2 font-medium">Name</th>
                                <th className="px-4 py-2 font-medium">Email</th>
                                <th className="px-4 py-2 font-medium">Profession</th>
                                <th className="px-4 py-2 font-medium">Status</th>
                                <th className="px-4 py-2 font-medium text-center">Edit</th>
                                <th className="px-4 py-2 font-medium text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="text-center py-4 text-gray-500">
                                        No users found.
                                    </td>
                                </tr>
                            ) : (
                                users.map((user, index) => (
                                    <tr key={user._id} className="border-t hover:bg-gray-50">
                                        <td className="px-4 py-2">{index + 1}</td>
                                        <td className="px-4 py-2">{user.name}</td>
                                        <td className="px-4 py-2">{user.email}</td>
                                        <td className="px-4 py-2">{user.profession}</td>
                                        <td className="px-4 py-2">
                                            <span className={`px-2 py-1 rounded text-white text-xs font-medium
                                                ${user.status === 'Active' ? 'bg-green-500' :
                                                    user.status === 'Inactive' ? 'bg-gray-400' :
                                                        'bg-yellow-500'}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            <button
                                                onClick={() => handleEdit(user._id)}
                                                className="text-yellow-500 hover:text-yellow-600"
                                                title="Edit"
                                            >
                                                <FiEdit size={16} />
                                            </button>
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            <button
                                                onClick={() => handleDelete(user._id)}
                                                className="text-red-500 hover:text-red-600"
                                                title="Delete"
                                            >
                                                <FiTrash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
