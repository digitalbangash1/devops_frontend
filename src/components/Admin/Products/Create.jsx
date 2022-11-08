import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




export default function Create() {   
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [imagelink, setImageLink] = useState('');

    const navigate = useNavigate();
    const postData = () => {
        axios.post(`https://backend-webshop.admin.samat.diplomportal.dk/Products`, {
            name,
            description,
            price,
            quantity,
            imagelink
        }).then(() =>{
            navigate('/admin/read');
        });
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='name' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input placeholder='description' onChange={(e) => setDescription(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Price</label>
                    <input placeholder='price' onChange={(e) => setPrice(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Quantity</label>
                    <input placeholder='quantity' onChange={(e) => setQuantity(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='imagelink' onChange={(e) => setImageLink(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}