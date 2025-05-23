import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreatePage = () => {



    const [data, SetData] = useState({
        title: "",
        author: "",
        body: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        SetData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/blogs', data)

            .then(res => {
                toast.success('new blog added successfully', {
                    position: "top-right",
                     autoClose: 3000,

                });
            })

            .catch(err => {

                toast.error('An error Occurred while adding the blog', {
                    position: "top-right",
                    autoClose: 3000,

                        });
                  });
                };

return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='exampleForm.controlInput1'>
                <Form.Label>Title</Form.Label>
                <Form.Control name='title' type='text' onChange={handleChange} placeholder='Enter the Title'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Author</Form.Label>
                    <Form.Control name="author" type="text" onChange={handleChange} placeholder="Enter author's name" />
                </Form.Group>
              
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Body</Form.Label>
                    <Form.Control name="body" as="textarea" rows={3} onChange={handleChange} placeholder="Enter body" />
                </Form.Group>
               
                <Button variant='primary' type='submit'>Submit</Button>
            <ToastContainer />

        </Form>

    </div>
);
            };
export default CreatePage;