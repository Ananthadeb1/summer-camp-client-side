import { useEffect, useState } from "react"

const useInstructor = email => {
    const [isInstructor, setIsInstructor] = useState(false);
    const [instructorLoading, setInstructorLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/instructor/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.isInstructor) {
                        setIsInstructor(data.isInstructor)
                        setInstructorLoading(false)
                    }
                })
        }
    }, [email])
    return [isInstructor, instructorLoading]
}

export default useInstructor;