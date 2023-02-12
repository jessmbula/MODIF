import { GET_BLOG } from "../actionTypes"
import axios from "axios"

// fecth
export const getBlogs=()=>async(dispatch)=>{
    try{
        const option={
            headers:{
                'authorization':localStorage.getItem('token'),
            },
        }
        const res=await axios.get("/api/art/",option)
        dispatch({
            type:GET_BLOG,
            payload:res.data
        })
    }
    catch(error){
        console.log(error)
    }
}

// Add
export const addBlog=(newBlog)=>async(dispatch)=>{
    try{
        const option={
           
            headers:{
                'authorization':localStorage.getItem('token'),
            },
       
        }
        const res=await axios.post("/api/art/add",newBlog,option)
        dispatch(getBlogs())
    }
    catch(error){
        console.log(error)
    }
}

    //delete
    export const deleteBlog=(idBlog)=>(dispatch)=>{
        axios.delete(`/api/art/delete/${idBlog}`)
        .then((res)=>dispatch(getBlogs()))
        .catch((err)=>console.log(err))
        }

    //edit
    export const editBlog=(idblog,editedBlog)=>(dispatch)=>{
        axios.put(`/api/art/edit/${idblog}`,editedBlog)
        .then((res)=>dispatch(getBlogs()))
        .catch((err)=>console.log(err))
    }


