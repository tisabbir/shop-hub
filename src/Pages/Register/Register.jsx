import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const Register = () => {

    const {createUser} = useAuth();
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        //now we will create the user
        createUser(email, password)
        .then(()=>{
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You're successfully registered.",
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch((err)=>{
            console.log(err);
        });

    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Register now!</h1>
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
                Already have a Account? <Link to={'/login'} className="ml-2 font-bold text-[#FFCD00]">Login Now</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FFCD00] text-black">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
