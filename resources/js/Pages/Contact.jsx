import Footer from '@/Components/Frontend/Footer';
import Header from '@/Components/Frontend/Header';
import { Head,Link } from '@inertiajs/react';
import { Container,Row,Col,Form,FormGroup } from 'react-bootstrap';

import '../../css/contact.css'
const contact_social = [
    {
      url: "#",
      icon: "ri-facebook-line"
    },
    {
      url: "#",
      icon: "ri-instagram-line"
    },
    {
      url: "#",
      icon: "ri-twitter-line"
    },
    {
      url: "#",
      icon: "ri-linkedin-line"
    },
    {
      url: "#",
      icon: "ri-youtube-line"
    }
  ]

const Contact = () => {
    return (
        <>
            <Header />
            <Head title="Contact" />

            <section>
                <Container>
                    <Row>
                        <Col lg="7" md="7">
                            <h2 className="fw-bold mb-4">Get In Touch</h2>
                            <Form>
                                <FormGroup className='contact__form mb-2'>
                                    <input placeholder='Your Name' type='text' className='form-control' />
                                </FormGroup>
                                <FormGroup className='contact__form mb-2'>
                                    <input placeholder='Email' type='email' className='form-control' />
                                </FormGroup>
                                <FormGroup className='contact__form mb-2'>
                                    <textarea rows="5" placeholder='Message' className='textarea form-control' ></textarea>
                                </FormGroup>
                                <button type='submit' className='contact__btn btn'>Send</button>
                            </Form>
                        </Col>
                        <Col lg="5" md="5">
                            <div className="contact__info">
                                <h6 className='fw-bold'>Contact Information</h6>

                                <p className="section__description">123, Dhanmondhi, Dhaka, Bangladesh</p>
                                <div className="d-flex align-items-center gap-2">
                                    <h6 className='fs-6 mb-0'>Phone: </h6>
                                    <p className='section__description mb-0'>+880123456789</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <h6 className='fs-6 mb-0'>Email: </h6>
                                    <p className='section__description mb-0'>contact@example.com</p>
                                </div>

                                <h6 className='fw-bold'>Follow Us</h6>

                                <div className="d-flex align-items-center gap-4 mt-3">
                                    {
                                        contact_social.map((item, index) => (
                                            <Link to={item.url} key={index} className="social__link-icon"><i className={item.icon}></i></Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Contact