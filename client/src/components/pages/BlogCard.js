/*import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { useDispatch } from "react-redux";
//import {deleteBlog} from "./../redux/action/blogAction";
//import EditBlog from "./EditBlog"





  const BlogCard = ({ blog }) => {
const dispatch=useDispatch()
    const deletee=()=>{
      dispatch(deleteBlog(blog._id))
    }
  return (
    <div style={{ minWidth: "300px", margin: "10px" }}>
      <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        <CardTitle tag="h5"> {blog.tite} </CardTitle>
        <CardText>{blog.author} </CardText>
        <CardText>{blog.image} </CardText>
        <CardText>{blog.desc} </CardText>
        <CardText>
          {blog.dateCreation.slice(0, 10)} ---{" "}
          {blog.dateCreation.slice(11, 19)}{" "}
        </CardText>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={deletee}>delete</Button>
          <EditBlog blog={blog} />
        </div>
      </Card>
    </div>
  );
};

export default BlogCard;*/