import { Link } from '@inertiajs/react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../css/become-driver.css'
import driverImg  from '../../../assets/all-images/toyota-offer-2.png'

const BecomeDriveSection = () => {
  return (
    <section className='become__driver'>
        <Container>
            <Row>
                <Col lg="6" md="6" sm="12" className='become__driver-img'>
                    <img src={driverImg} alt="" className='w-100' />
                </Col>
                <Col lg="6" md="6" sm="12">
                    <h2 className="section__title become__driver-title">
                        Do you want to earn with us? so Don't be late.
                    </h2>

                    <button className='btn become__driver-btn mt-4'>
                        Become a Driver
                    </button>
                </Col>
            </Row>    
        </Container> 
    </section>
  )
}

export default BecomeDriveSection