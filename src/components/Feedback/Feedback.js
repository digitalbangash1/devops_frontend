import React, { useState } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTextArea, MDBTypography } from "mdb-react-ui-kit";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


function Feedback() {
  const [value, setValue] = React.useState(2);

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
                          <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(_event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </Box>
                    </div>
                    <MDBTextArea label="What is your view?" rows={4} />
                    <div className="d-flex justify-content-between mt-3">
                      <MDBBtn color="danger">
                        Send <MDBIcon fas icon="long-arrow-alt-right ms-1" />
                      </MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
export default Feedback;