import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Nav = () => {


  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
    .then(()=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You're successfully logged out",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  const navBar = <> <div className="">
  {user ? (
    <>
      <div className="flex items-center gap-4">
      <div className="avatar">
        <div className="w-10 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <button className="btn bg-[#FFCD00]" onClick={handleLogOut}>Logout</button>
      </div>
    </>
  ) : (
    <Link to={"/login"} className="btn bg-[#FFCD00]">
      Login
    </Link>
  )}
</div></>;
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navBar}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost font-bold text-[#FFCD00] text-xl md:text-2xl lg:text-3xl">
            ShopHub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1"></ul>
        </div>
       <div className="navbar-end hidden lg:flex">
       {navBar}
       </div>
      </div>
    </div>
  );
};

export default Nav;
