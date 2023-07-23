
import { Link } from 'react-router-dom';
import logo from '../../../../public/logo.jpg'
import { useContext } from "react";
import { AuthContext } from '../../../providers/AuthProvider';
// import useCart from '../hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    
    // const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructor'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>

        {
            user ? <> </> :
                <>
                    <li><Link to='/signUp'>Sign Up</Link></li>
                </>
        }

{
            user ? <>
                <span>{user?.displayName}</span>
                {user.photoURL && <img src={user.photoURL} alt="" className="h-12 rounded-full border-primary" />}

                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>

    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {navItems}
                    </ul>
                </div>
                <div className='flex gap-5'>
                  <Link to='/'><img className='h-[40px] w-[55px]' src={logo} alt="" /></Link>  
                  <Link to='/'>   <p className="normal-case text-2xl font-semibold">HOGWARTS <br />
                    <span className='text-xl text-gray-200 font-semibold'>School of Witchcraft and Wizardry</span>  </p></Link> 
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <input type="checkbox" className="toggle" checked /> */}
                <Link  to='/dashboard'><b className='text-base-100 text-lg'>Dashboard</b></Link>
                { user && 
                <div className="tooltip tooltip-bottom" data-tip={user.displayName}> 
                <div className="avatar">
                    <div className=" w-12 rounded-full ml-4">
                        {/* <img src={user?.photoURL} /> <br /> */}
                        
                    </div>
                    <div>
                    {/* <span>{user?.displayName}</span> */}
                    </div>
                </div>
                </div>
                }
            </div>
        </div>
    );
};

export default Navbar;