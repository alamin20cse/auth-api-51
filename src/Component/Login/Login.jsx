import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider/AuthProvider';

const Login = () => {


const {singInUser, signInWithGoogle }=useContext(AuthContex);





    const handelLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);

        // dfsa
        singInUser(email,password)
        .then(result=>{
            console.log(result.user);
            e.target.reset();
        })
        .catch(error=>{
            console.log('ERROR ',error.message);
        })


    
    }

    // google sign in
const handelGoogleSignIn=()=>{

    signInWithGoogle()
    .then(result=>{
        console.log(result.user);
    })
    .catch(error=>{
        console.log('ERROR ',error.message);
    })

}



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now</h1>
                   
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">



                    {/* Form  Start from  here  */}
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
{/* form end  */}

<p className='m-4'>Are you new? please <Link to='/regiester'>Regiester</Link> </p>

<p onClick={handelGoogleSignIn} className='btn  btn-ghost'>Google</p>

                </div>
            </div>
        </div>
    );
};

export default Login;