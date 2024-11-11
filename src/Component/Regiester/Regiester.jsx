import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider/AuthProvider";


const Regiester = () => {

    const {createuser}=useContext(AuthContex);



    const handelRegiester = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name=e.target.name.value;
        console.log(email, password,name);

        // create user
        createuser(email,password)
        .then(result=>{
            console.log(result);

        })
        .catch(error=>{
            console.log('ERROR',error);
        })

        
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Regiester now</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">



                    {/* Form  Start from  here  */}
                    <form onSubmit={handelRegiester} className="card-body">

                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>


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
                          
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Regiester</button>
                        </div>
                    </form>
                    {/* form end  */}

                    <p className='m-4'>Have you an Account please <Link to='/login'>Login</Link> </p>

                </div>
            </div>
        </div>
    );
};

export default Regiester;