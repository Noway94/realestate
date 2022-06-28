import axios from "axios";

export const baseUrl="https://bayut.p.rapidapi.com";


  export const fetchApi= async (url)=>{
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '88e00e300cmsh5f0f33e44e4f525p1d985fjsndec6caa7c8a3',
            
          }
    })
    return data;
  }