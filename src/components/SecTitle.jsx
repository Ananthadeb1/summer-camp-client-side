

// eslint-disable-next-line react/prop-types
const SectionTitle = ({heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-10">
            
            <h3 className="text-4xl uppercase py-4 text-White-400 font-bold">{heading}</h3>
        </div>
    );
};

export default SectionTitle;