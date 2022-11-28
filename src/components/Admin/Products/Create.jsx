import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Create.css';




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
        }) 
        .then(() =>{
            navigate('/admin/read');
        });
    }
    return (
        <div>
            <Form>
                <Form.Field>
                    <input placeholder='Enter Product Name...' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <input placeholder='Enter Price...' onChange={(e) => setPrice(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <input placeholder='Enter Amount...' onChange={(e) => setQuantity(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <input placeholder='Enter Url here...' onChange={(e) => setImageLink(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <textarea id="description" placeholder='Write Description...'onChange={(e) => setDescription(e.target.value)}/>
                </Form.Field>
                <Button id="create-btn" onClick={postData} type='submit'>Add New Product</Button>
            </Form>
        </div>
    )   
}