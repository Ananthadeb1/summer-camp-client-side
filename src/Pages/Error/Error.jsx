import { Link } from 'react-router-dom';
import error from '../.././../public/error.jpg'

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
           
            <img className="mb-6 h-80" src={error} />
            
            <h1 className="mb-4 text-3xl text-red-500">Oops! Something went wrong.</h1>
            <p className="mb-6">We are having trouble loading this page. Please try again later.</p>

            <button className="btn btn-red"><Link to='/'>Retry</Link> </button>
        </div>
    );
};

export default Error;