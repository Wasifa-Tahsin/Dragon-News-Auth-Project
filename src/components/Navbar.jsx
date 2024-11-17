import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { BsListNested } from "react-icons/bs";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext); // Access the user object
//   console.log(user);

  return (
    <div className="flex justify-between items-center px-4  ">
      {/* Display User Name or Email */}
      <div className="text-lg font-semibold">{user && user.email}</div>

      {/* Navigation Links */}
      <div className="nav space-x-5">
        <Link to="/">Home</Link>;
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
        <Link to="/dev">Dev Information</Link>
      </div>

      {/* User Info */}
      <div className="login flex gap-2 items-center">
        <div>
          {user && user.email ? (
            <div>
              <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
              <p>{user.displayName}</p>
            </div>
          ) : (
            <img src={userIcon} alt="" />
          )}
        </div>
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-neutral rounded-none">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
