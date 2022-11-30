import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://backend-webshop.admin.samat.diplomportal.dk/Products`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, name, description, price, quantity, imagelink } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Description', description);
        localStorage.setItem('Price', price);
        localStorage.setItem('Quantity', quantity);
        localStorage.setItem('imageLink', imagelink);
    }

    const getData = () => {
        axios.get(`https://backend-webshop.admin.samat.diplomportal.dk/Products`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://backend-webshop.admin.samat.diplomportal.dk/Products/${id}`)
        .then(() => {
            getData();
        })
    }
    return (
        <div id="Productlist_table">
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                        <Table.HeaderCell>imageLink</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row id="return-data">
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.description}</Table.Cell>
                                <Table.Cell>{data.price}</Table.Cell>
                                <Table.Cell>{data.quantity}</Table.Cell>
                                <Table.Cell>{data.imagelink}</Table.Cell>
                                    <Table.Cell> 
                                    <Link to='/admin/update/:id'>
                                        <Button id="read-btn" onClick={() => setData(data)}>Update</Button>
                                    </Link>
                                    </Table.Cell>
                                <Table.Cell>
                                    <Button id="read-btn" onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}