import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext } from "react";

import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
// import SocialLogin from '../../Shared/SocialLogin';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../Shared/Sociallogin';


const Login = () => {
    const { register, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.form?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset();
                
                Swal.fire({
                    title: 'User Login Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    return (
        <div>
            <Helmet>
                <title>Summer Camp | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-red-600'>Password is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center mb-4'><small>New here? Create an account <Link to='/signUp'><span className='text-orange-700'><b>Sign Up</b></span></Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;