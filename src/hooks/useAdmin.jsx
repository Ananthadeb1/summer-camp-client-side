import { useEffect, useState } from "react"

const useAdmin = email => {
    const [Admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        setAdminLoading(true)
        if (email) {
            fetch(`https://assignment-12-sarver.vercel.app/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.isAdmin) {
                        setAdmin(data.isAdmin)
                        setAdminLoading(false)
                    }
                })
        }
    }, [email])
    return [Admin, adminLoading]
}

export default useAdmin;
