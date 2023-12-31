import { Bars } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Bars
                height="80"
                width="80"
                color="#256D85"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loader;