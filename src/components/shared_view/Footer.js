import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css'

/**
 * Update the year in the footer
 */
const today = new Date();


function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='/#' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='/#' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='/#' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='/#' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                SAMAT store
              </h6>
              <p>
                Your favorit e-commerce website for buying your wardrobe, we got everything you need in order for you to look your best.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  T-Shirts
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Jeans
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Shoes
                </a>
              </p>
          
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Lautrupvang 15, 2750 Ballerup, Denmark
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@samat-webshop.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 45 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 45 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 fw-normal' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {today.getFullYear()} Copyright: 
        <a className='text-reset fw-bold' href='https://samat-webshop.com/'>
        Samat-Webshop.com
        </a>
      </div>
    </MDBFooter>
  );
  }

export default Footer;