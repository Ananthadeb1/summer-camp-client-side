
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import useStudent from '../hooks/useStudent';
import Loader from '../components/Loader/Loader'

const Dashboard = () => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isInstructor] = useInstructor(user?.email)
    const [isStudent] = useStudent(user?.email)

    if (loading) {
        <Loader></Loader>
    }

    return (
        < div className='bg-slate-800'>
            <div className='bg-slate-400'>
                <div className=" mx-auto text-center md:w-4/12 ">
                    <h1 className=" text-3xl uppercase py-4 text-White-400 font-bold" > Dashboard</h1>
                </div>
            </div>
            <div className='flex bg-white flex-col md:flex-row px-4 lg:px-10'>
                <div className='w-full md:w-[20%]'>
                    <div className="flex md:h-screen flex-col justify-between border-r bg-white">
                        <div className="px-4 py-6">
                            <span className="flex items-center justify-center h-10 w-full rounded-lg bg-slate-800 text-white font-bold">Dashboard</span>

                            <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
                                <Link
                                    to="/"
                                    className="flex items-center rounded-lg hover:bg-gray-100 px-4 py-2 text-gray-700"
                                >
                                    <span className="ml-3 text-sm font-medium"> Home </span>
                                </Link>
                                {
                                    isStudent &&
                                    <>
                                    <Link
                                        to="/dashboard/myselectedclasses"
                                        className="flex items-center rounded-lg hover:bg-gray-100 px-4 py-2 text-gray-700"
                                    >
                                        <span className="ml-3 text-sm font-medium"> My Selected Classes </span>
                                    </Link>
                                    <Link
                                        to="/dashboard/myselectedclasses"
                                        className="flex items-center rounded-lg hover:bg-gray-100 px-4 py-2 text-gray-700"
                                    >
                                        <span className="ml-3 text-sm font-medium"> My Selected Classes </span>
                                    </Link>
                                </>
                                }
                                {
                                    isInstructor &&
                                    <>
                                        <Link
                                            to="/dashboard/addclass"
                                            className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            <span className="ml-3 text-sm font-medium">Add A Class</span>
                                        </Link>
                                        <Link
                                            to="/dashboard/myclasses"
                                            className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            <span className="ml-3 text-sm font-medium"> My Classes </span>
                                        </Link>
                                    </>
                                }
                                {
                                    isAdmin &&
                                    <>
                                        <Link
                                            to="/dashboard/allClasses"
                                            className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            <span className="ml-3 text-sm font-medium">Manage Classes</span>
                                        </Link>
                                        <Link
                                            to="/dashboard/allusers"
                                            className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            <span className="ml-3 text-sm font-medium">Manage Users</span>
                                        </Link>
                                    </>
                                }
                            </nav>
                        </div>
                    </div>

                </div>
                <div className='w-full md:w-[80%] border-2'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;