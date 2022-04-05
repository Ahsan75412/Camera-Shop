import { useEffect, useState } from "react"

const useReview = () =>{
    const [reviews , setReview] = useState([]);

    useEffect(() => {
        fetch('data.JSON')
            .then(res => res.json())
            .then(data => {
                setReview(data);
            });
    } , []);
    
    return [reviews];
}

export default useReview;


// ../../public/data.JSON