import React, { useState, useEffect } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTextArea, MDBTypography } from "mdb-react-ui-kit";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Table } from 'semantic-ui-react';
import { Reviews } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'

function Feedback() {
  const [value, setValue] = React.useState(2);

  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const [product_id, setProduct_id] = useState('');

  const navigate = useNavigate();
  const postData = () => {
      axios.post(`https://localhost:7181/feedback`, {
          review,
          rating,
          product_id,
      }).then(() =>{
          navigate('/feedback');
      });
  }


  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
      axios.get(`https://localhost:7181/feedback`)
          .then((response) => {
              console.log(response.data)
              setAPIData(response.data);
              
              console.log("Our rating", setRating);
          })
  }, []);

  const setData = (data) => {
      let { id, review, rating, product_id} = data;
      localStorage.setItem('ID', id);
      localStorage.setItem('Review', review);
      localStorage.setItem('Rating', rating);
      localStorage.setItem('Product_id', product_id);
  }

  const getData = () => {
      axios.get(`https://localhost:7181/feedback`)
          .then((getData) => {
              setAPIData(getData.data);
          })
  }
    return (
    <section className="vh-100" style={{ backgroundColor: "#FFFFF" }}>
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="10" lg="8" xl="6">
            <MDBCard>
              <MDBCardBody className="p-4">
                <div className="d-flex flex-start w-100">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                    alt="avatar"
                    width="65"
                    height="65"
                  />
                  <div className="w-100">
                    <MDBTypography tag="h5">Add a comment</MDBTypography>
                    <div>
                      <Box sx={{ '& > legend': { mt: 2 },}}>
                        <Typography component="legend">Rate this product</Typography>
                          <Rating name="simple-controlled" value={value} onChange={(_event, newValue) => {setValue(newValue); setRating(newValue);}}/>
                      </Box>
                      <input placeholder='product_id' onChange={(e) => setProduct_id(e.target.value)}/>
                    </div>
                    <MDBTextArea label="What is your view?" rows={4} onChange={(e) => setReview(e.target.value)}/>
                    <div className="d-flex justify-content-between mt-3">
                      <MDBBtn color="danger" onClick={postData} > Send <MDBIcon fas icon="long-arrow-alt-right ms-1" />
                      </MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div>
          <Table singleLine>
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell>Review</Table.HeaderCell>
                      <Table.HeaderCell>Rating</Table.HeaderCell>
                      <Table.HeaderCell>Product_id</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>

              <Table.Body>
                  {APIData.map((data) => {
                      return (
                          <Table.Row>
                              <Table.Cell>{data.review}</Table.Cell>
                              <Table.Cell>{data.rating}</Table.Cell>
                              <Table.Cell>{data.product_id}</Table.Cell>
                          </Table.Row>
                      )
                  })}
              </Table.Body>
          </Table>
      </div>
    </section>
  );
}

export default Feedback;