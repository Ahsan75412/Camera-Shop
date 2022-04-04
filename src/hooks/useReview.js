import { useEffect, useState } from "react"

const useReview = () =>{
    const [review , setReview] = useState([]);

    useEffect(() => {
        fetch('data.JSON')
            .then(res => res.json())
            .then(data => {
                setReview(data);
            });
    } , []);
    
    return [review];
}

export default useReview;


// ../../public/data.JSON