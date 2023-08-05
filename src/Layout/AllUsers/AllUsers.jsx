import { useEffect } from "react";
import { useState } from "react";
import SingleUsersRow from "./SingleUsersRow/SingleUsersRow";

const AllUsers = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
      }, []);
    const fetchUsers = async () => {
        try {
          const res = await fetch("https://assignment-12-sarver.vercel.app/users");
          const data = await res.json();
          setUsers(data);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
    return (
        <div className='my-8 mx-2'>
            <h1 className='font-bold text-4xl my-4'>Total Users : {users?.length}</h1>
            <table className="min-w-full border-collapse block md:table">
                <thead className="block md:table-header-group">
                    <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative text-center">
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell"></th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Name</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Role</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Action</th>
                    </tr>
                </thead>
                <tbody className="block md:table-row-group font-bold">
                    {
                        users?.map((user, idx) => <SingleUsersRow
                            key={user._id}
                            idx={idx + 1}
                            user={user}
                        ></SingleUsersRow>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default AllUsers;