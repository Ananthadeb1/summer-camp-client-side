import Swal from 'sweetalert2'

// eslint-disable-next-line react/prop-types
const SingleUsersRow = ({ user, idx, }) => {
    // eslint-disable-next-line react/prop-types
    const { name, role, _id } = user;
    //Update user as Instructor 
    const handleMakeInstructor = (id) => {
        fetch(`http://localhost:5000/users/instructor/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: ` is an insta Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeAdmin = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make Admin!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-12-sarver.vercel.app/user/${id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire(
                                'Successful!',
                                'Make Admin done.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <>
            <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row text-left md:text-center">
                <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Serial</span>{idx}</td>
                <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>{name}</td>
                <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Status</span>{role}</td>
                <td className="p-2 md:border md:border-grey-500 block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">Action</span>

                    <button
                        onClick={() => handleMakeAdmin(_id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mx-4 border border-red-500 rounded">Make Admin</button>
                    <button
                        onClick={() => handleMakeInstructor(_id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mx-4 border border-red-500 rounded">Make Instructor</button>
                </td>
            </tr>
        </>
    );
};

export default SingleUsersRow;