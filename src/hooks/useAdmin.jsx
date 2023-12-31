import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        setAdminLoading(true)
        if (email) {
            fetch(`https://assignment-12-sarver.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.isAdmin) {
                        setIsAdmin(data.isAdmin)
                        setAdminLoading(false)
                    }
                })
        }
    }, [email])
    return [isAdmin, adminLoading]
}

export default useAdmin;
