import { useEffect, useState } from "react"

const useStudent = email => {
    const [isStudent, setIsStudent] = useState(false);
    const [studentLoading, setStudentLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-sarver.vercel.app/users/student/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.isStudent) {
                        setIsStudent(data.isStudent)
                        setStudentLoading(false)
                    }
                })
        }
    }, [email])
    return [isStudent, studentLoading]
}

export default useStudent;