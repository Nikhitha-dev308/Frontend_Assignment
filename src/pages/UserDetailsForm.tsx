import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const UserDetailsForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profession, setProfession] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            const response = await axios.post(
                'http://localhost:3002/user/details',
                { name, email, profession, status },
                { headers: { 'Content-Type': 'application/json' } }
            );

            console.log("User added:", response.data);
            setSuccess('✅ User added successfully!');

            setName('');
            setEmail('');
            setProfession('');
            setStatus('');
            navigate('/dashboard');
        } catch (err: any) {
            setError(err.response?.data?.message || '❌ Failed to add user. Try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-xl">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-[#296854]">Add New User</h1>
                    <p className="text-gray-500 text-sm">Enter the user details below</p>
                </div>

                {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
                {success && <p className="text-green-600 text-sm mb-4">{success}</p>}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block mb-1 font-medium">Full Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Enter full name"
                            required
                            className="w-full border border-gray-300 rounded-xl px-4 py-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Email Address</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter email"
                            required
                            className="w-full border border-gray-300 rounded-xl px-4 py-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Profession</label>
                        <input
                            value={profession}
                            onChange={(e) => setProfession(e.target.value)}
                            type="text"
                            placeholder="Enter profession"
                            required
                            className="w-full border border-gray-300 rounded-xl px-4 py-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">Status</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-xl px-4 py-2"
                        >
                            <option value="">Select status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#3a977a] text-white py-2 rounded-lg font-medium mt-6 hover:bg-[#366657] transition duration-300"
                    >
                        Add user
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserDetailsForm;
