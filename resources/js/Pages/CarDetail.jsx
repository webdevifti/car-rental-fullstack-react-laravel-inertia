import BookingForm from '@/Components/Frontend/BookingForm'
import carData from '../../assets/data/carData'
import { Head } from '@inertiajs/react'
import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PaymentMethods from '@/Components/Frontend/PaymentMethods'
import Header from '@/Components/Frontend/Header'
import Footer from '@/Components/Frontend/Footer'

const CarDetail = ({ slug }) => {
  const singleCarData = carData.find(item => item.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarData])

  return (
    <>
      <Header />
      <Head title={singleCarData.carName} />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarData.imgUrl} className="w-100" alt="" />
            </Col>
            <Col lg="6">
              <div className='car__info'>
                <h2 className='section__title'>{singleCarData.carName}</h2>

                <div className="d-flex align-items-center gap-5 mb-4">
                  <h6 className="rent__price fw-bold fs-4">${singleCarData.price}.00/Day</h6>
                  <span className='d-flex align-items-center gap-2'>
                    <span style={{ color: "#f9a826" }}>
                      <i className='ri-star-s-line'></i>
                      <i className='ri-star-s-line'></i>
                      <i className='ri-star-s-line'></i>
                      <i className='ri-star-s-line'></i>
                      <i className='ri-star-s-line'></i>
                    </span>
                    ( {singleCarData.rating} Ratings )
                  </span>
                </div>

                <p className="section__description">
                  {singleCarData.description}
                </p>
                <div className='d-flex align-items-center mt-3' style={{ columnGap: "4rem" }}>
                  <span className='d-flex align-items-center gap-1 section__description'>
                    <i className='ri-roadster-line' style={{ color: "#f9a826" }}></i> {singleCarData.model}
                  </span>
                  <span className='d-flex align-items-center gap-1 section__description'>
                    <i className='ri-settings-line' style={{ color: "#f9a826" }}></i> {singleCarData.automatic}
                  </span>
                  <span className='d-flex align-items-center gap-1 section__description'>
                    <i className='ri-timer-flash-line' style={{ color: "#f9a826" }}></i> {singleCarData.speed}
                  </span>

                </div>
                <div className='d-flex align-items-center mt-3' style={{ columnGap: "2.8rem" }}>
                  <span className='d-flex align-items-center gap-1 section__description'>
                    <i className='ri-map-pin-line' style={{ color: "#f9a826" }}></i> {singleCarData.gps}
                  </span>
                  <span className='d-flex align-items-center gap-1 section__description'>
                    <i className='ri-wheelchair-line' style={{ color: "#f9a826" }}></i> {singleCarData.seatType}
                  </span>
                  <span className='d-flex align-items-center gap-1 section__description'>
                    <i className='ri-building-2-line' style={{ color: "#f9a826" }}></i> {singleCarData.brand}
                  </span>

                </div>
              </div>
            </Col>

            <Col lg="7" className='mt-5'>
              <div className="booking__info mt-5">
                <h5 className="mb-4 fw-bold">Booking Information</h5>

                <BookingForm />
              </div>
            </Col>
            <Col lg="5" className='mt-5'>
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold">Payment Information</h5>

                <PaymentMethods />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default CarDetail