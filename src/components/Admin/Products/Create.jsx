import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const history = useNavigate;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [imageLink, setImageLink] = useState('');
    const postData = () => {
        axios.post(`https://localhost:7181/Products`, {
            name,
            description,
            price,
            quantity,
            imageLink
        }).then(() => {
            history.push('/admin/read')
        })
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
                    <input placeholder='imageLink' onChange={(e) => setImageLink(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}