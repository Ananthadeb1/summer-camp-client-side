import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../providers/AuthProvider';

const HomePage = () => {
    const { user } = useContext(AuthContext)
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        fetch(`https://assignment-12-sarver.vercel.app/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCurrentUser(data))
    }, [user?.email])
    return (
        <>
            <Helmet>
                <title>THE WITCHERY | Home</title>
            </Helmet>

            <section className="bg-gray-50 mx-auto flex justify-center min-h-screen">
                <div
                    className="px-4 py-16"
                >
                    <div className=''>
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            <span className=''>Dear <span className='text-orange-200 uppercase'>{currentUser?.role}</span>,</span> <br />
                            <strong className="font-extrabold text-slate-600 sm:block">
                                WelCome To Dashboard
                            </strong>
                        </h1>

                        <p className="mt-4 sm:text-xl sm:leading-relaxed">
                            You Can use more available option from Dashboard menu .
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;