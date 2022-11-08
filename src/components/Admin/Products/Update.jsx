import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Update() {
    const [id, setID] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [imageLink, setImageLink] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setDescription(localStorage.getItem('Description'));
        setPrice(localStorage.getItem('Price'));
        setQuantity(localStorage.getItem('Quantity'));
        setImageLink(localStorage.getItem('imageLink'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://localhost:7181/Products/${id}`, {
            name,
            description,
            price,
            quantity,
        }) 
        .then(() =>{
            navigate('/read');
        });
    };
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='ImageLink' value={quantity} onChange={(e) => setImageLink(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}