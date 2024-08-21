import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";


const Login = () => {

    const {loginUser, signInWithGoogle} = useAuth();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
        .then(()=>{
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You're successfully logged in",
            showConfirmButton: false,
            timer: 1500
          });
            navigate('/')

        })
        .catch((err)=>{
            console.log(err);
        })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(()=>{
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You're successfully logged in",
            showConfirmButton: false,
            timer: 1500
          });
            navigate('/')
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login now!</h1>
            <p className="py-6">
                Join the largest community of the world.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                 Don't have a Account? <Link to={'/register'} className=" ml-2 font-bold text-[#FFCD00]">Register Now</Link>

                </label>
              </div>
              <div className="form-control ">
                <button className="btn bg-[#FFCD00] text-black">Login</button>
              </div>
            </form>
                 <div className="flex justify-center">
                    <button onClick={handleGoogleSignIn} className="flex gap-2 items-center justify-center btn -mt-4 w-4/5 mb-4 bg-[#FFCD00] text-black">Log in <FaGoogle />oogle</button>
                 </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
