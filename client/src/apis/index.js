import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },


  });

export const api1 = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
        'Content-Type': `multipart/form-data`,
    },


  });


export const editBlog=(id,data)=> api1.patch(`/blog/edit/${id}`,data);
export const createBlog=(data)=>api1.post("/blog/create",data);

export const setHead=(token)=>{
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  api1.defaults.headers.common['Authorization'] = `Bearer ${token}`; 

}


export  const getAllBlog=()=>api.get("/blog/all");
export const getBlogById=(id)=>api.get(`/blog/${id}`);
export const deleteBlog=(id)=>api.delete(`/blog/${id}`);
export const getBlogByAuthorId=(data)=> api.post("/blog/user-article",data);
export const registerUser=(data)=> api.post("/user/auth/register",data);
export const loginUser=(data)=> api.post("/user/auth/login",data,{withCredentials:true});









