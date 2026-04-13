import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">TaskFlow</h1>

      <div className="flex items-center gap-4">
        <span className="hidden sm:block text-gray-600">
          {user?.email}
        </span>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;