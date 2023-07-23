
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import Swal from 'sweetalert2';
// import SocialLogin from '../../Shared/SocialLogin';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../Shared/Sociallogin';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
          .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
              .then(() => {
                const saveUser = { name: data.name, email: data.email, image: data.photoURL };
                fetch('http://localhost:5000/users', {
                  method: 'POST',
                  headers: {
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(saveUser)
                })
                  .then(res => res.json())
                  .then(data => {
                    if (data.insertedId) {
                      reset();
                      Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully',
                        showConfirmButton: false,
                        timer: 1500
              }).then(() => {
                navigate('/');
              });
                    }
                  })
                  .catch(error => {
                    Swal.fire({
                      icon: 'error',
                      title: 'Error',
                      text: 'An error occurred while creating the user. Please try again.',
                    });
                    console.log(error);
                  });
              })
              .catch(error => {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'An error occurred while updating the user profile. Please try again.',
                });
                console.log(error);
              });
          })
          .catch(error => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'The email provided is already in use. Please use a different email or log in.',
            });
            console.log(error);
          });
      };
      

    return (
        <div>
            <Helmet>
                <title>Summer Camp | Sign In</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Sign Up!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="photoURL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
                            </div>
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
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-red-600'>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must be less then 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must have one uppercase, one lowercase, one number and one special character</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirm", { required: true })} name="confirm" placeholder="confirm password" className="input input-bordered" />
                                {errors.confirm && <span className='text-red-600'>Confirm Password is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center mb-4'><small>Already have an account? <Link to='/login'><span className='text-orange-700'><b>Login</b></span></Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;