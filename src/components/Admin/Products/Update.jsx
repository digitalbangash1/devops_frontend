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
    const [imagelink, setImageLink] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setDescription(localStorage.getItem('Description'));
        setPrice(localStorage.getItem('Price'));
        setQuantity(localStorage.getItem('Quantity'));
        setImageLink(localStorage.getItem('imagelink'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://backend-webshop.admin.samat.diplomportal.dk/Products/${id}`, {
            name,
            description,
            price,
            quantity,
            imagelink
        }) 
        .then(() =>{
            navigate('/admin/read');
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
                    <input placeholder='Imagelink' value={imagelink} onChange={(e) => setImageLink(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}