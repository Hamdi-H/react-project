import { useState, useEffect } from "react";
import axios from "axios";

const UseFetch = (url) => {
    const[data,SetData]=useState(null)

    useEffect(()=>{
        axios.get(url)
        .then(res =>{SetData(res.data)})

        .catch(err => console.log(err))
    },[url]);

    return {data};
}

export default UseFetch;