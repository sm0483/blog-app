import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
  });


  
export const createBlog=(data)=>api.post("/blog/create",data);
export  const getAllBlog=()=>api.get("/blog/all");


