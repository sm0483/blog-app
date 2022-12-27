import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },


  });


  const api1 = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
        'Content-Type': `multipart/form-data`,
    },


  });

  
export const createBlog=(data)=>api1.post("/blog/create",data);
export  const getAllBlog=()=>api.get("/blog/all");
export const getBlogById=(id)=>api.get(`/blog/${id}`);
export const getBlogByAuthorId=(data)=> api.post("/blog/user-article",data);
export const editBlog=(id,data)=> api1.patch(`/blog/edit/${id}`,data);







