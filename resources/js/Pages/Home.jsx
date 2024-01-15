import { Head } from '@inertiajs/react';
import HeroSlider from '@/Components/Frontend/HeroSlider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FindCarForm from '@/Components/Frontend/FindCarForm';
import AboutSection from '@/Components/Frontend/AboutSection';
import ServiceList from '@/Components/Frontend/ServiceList';
import carData from '../../assets/data/carData'
import CarItem from '@/Components/Frontend/CarItem';
import BecomeDriveSection from '@/Components/Frontend/BecomeDriveSection';
import Testimonial from '@/Components/Frontend/Testimonial';
import BlogList from '@/Components/Frontend/BlogList';
import Header from '@/Components/Frontend/Header';
import Footer from '@/Components/Frontend/Footer';

export default function Home() {
    return (
        <>
        <Header />
            <Head title="Home" />
            <section className="p-0 hero__slider-section">
                <HeroSlider />
                <div className="hero__form">
                    <Container>
                        <Row className="form__row">
                            <Col lg="4" md="4">
                                <div className="find__cars-left">
                                    <h2>Find your best car here</h2>
                                </div>
                            </Col>
                            <Col lg="8" md="8" sm="12">
                                <FindCarForm />
                            </Col>
                        </Row>

                    </Container>
                </div>
            </section>

            <AboutSection />

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5 text-center">
                            <h6 className="section__subtitle">See Our</h6>
                            <h2 className="section__title">Popular Services</h2>
                        </Col>
                        <ServiceList />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5 text-center">
                            <h6 className="section__subtitle">Come with </h6>
                            <h2 className="section__title">Hot Offers</h2>
                        </Col>
                        {
                            carData.slice(0, 6).map((item) => (
                                <CarItem item={item} key={item.id} />
                            ))
                        }
                    </Row>
                </Container>
            </section>

            <BecomeDriveSection />

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className='mb-4 text-center'>
                            <h6 className='section__subtitle'>Our Clients says</h6>
                            <h2 className='section__title'>Testimonials</h2>
                        </Col>
                        <Testimonial />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className='mb-4 text-center'>
                            <h6 className='section__subtitle'>Explore our blogs</h6>
                            <h2 className='section__title'>Latest Blogs</h2>
                        </Col>
                        <BlogList />
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
}
