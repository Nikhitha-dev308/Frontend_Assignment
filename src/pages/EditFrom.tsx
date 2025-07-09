import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditForm = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profession, setProfession] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.post(`http://localhost:3002/user/details/${id}`);
                const user = res.data;
                setName(user.name);
                setEmail(user.email);
                setProfession(user.profession);
                setStatus(user.status);
                setLoading(false);
            } catch (err: any) {
                setError("❌ Failed to fetch user data.");
                setLoading(false);
            }
        };

        if (id) fetchUser();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            await axios.put(`http://localhost:3002/user/update/${id}`, {
                name,
                email,
                profession,
                status,
            });

            setSuccess("✅ User updated successfully!");
            navigate("/dashboard");
        } catch (err: any) {
            setError(err.response?.data?.message || "❌ Failed to update user.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-xl">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-[#2d5f4f]">Update User Details</h1>
                    <p className="text-gray-500 text-sm">Edit and update the user details below</p>
                </div>

                {loading ? (
                    <p className="text-gray-500 text-center">Loading...</p>
                ) : (
                    <>
                        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
                        {success && <p className="text-green-600 text-sm mb-4">{success}</p>}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block mb-1 font-medium">Full Name</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
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
                                Update
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default EditForm;
