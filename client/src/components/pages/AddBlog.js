import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
  } from 'reactstrap';

//import { registerUser } from '../../redux/actions/userAction';
import {useNavigate} from "react-router-dom"
import { addBlog } from '../../redux/actions/blogAction';

function AddBlog() {
  const [modal,setModal]=useState(false)
  const[title,setTitle]=useState("")
  const[author,setAuthor]=useState("")
  const[image,setImage]=useState("")
  const[desc,setDesc]=useState("")


const toggle=()=>{
  setModal(!modal)
}
const dispatch=useDispatch()
const navigate=useNavigate()

const add=()=>{
  const data={
    title:title,
    author:author,
    image:image,
    desc:desc
  }


  
  dispatch(addBlog(data))
  setModal(!modal)
  setTitle("")
  setAuthor("")
  setImage("")
  setDesc("")
  navigate("/blogList")
}

   
  return (
    <div style={{ padding: '0 15px' }}>
    <NavLink  href="#" onClick={toggle}>
      Add New Blog
    </NavLink>
    <Modal  isOpen={modal}>
      <ModalHeader>Add</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
     onChange={(event)=>setTitle(event.target.value)}
     
              name="name"
              id="name"
              placeholder="title"
              className="mb-3"
          
            />
            <Label for="author">Author</Label>
            <Input
              type="text"
              onChange={(event)=>setAuthor(event.target.value)}
              name="lastName"
              id="lastName"
              placeholder="auhtor"
              className="mb-3"
          
            />
            <Label for="image">Image</Label>
            <Input
              type="email"
              onChange={(event)=>setImage(event.target.value)}
              name="email"
              id="email"
              placeholder="image"
       
            />
            <Label for="desc">Desc</Label>
            <Input
              type="text"
              onChange={(event)=>setDesc(event.target.value)}
              name="password"
              id="password"
              placeholder="description"
              className="mb-3"
 
            />
            <Button
              color="dark"
              style={{ marginTop: '2rem' }}
              block
  onClick={add}

            >
              Add
            </Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  </div>
  )
}

export default AddBlog