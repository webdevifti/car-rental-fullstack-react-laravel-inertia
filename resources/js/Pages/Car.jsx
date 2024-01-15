import CarItem from '@/Components/Frontend/CarItem'
import Footer from '@/Components/Frontend/Footer'
import Header from '@/Components/Frontend/Header'
import { Container,Row,Col } from 'react-bootstrap'
import React from 'react'
import carData from '../../assets/data/carData'
import { Head } from '@inertiajs/react'

const Car = () => {
  return (
    <>
      <Header />
      <Head title="Cars" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className='ri-sort-asc'></i> Sort By
                </span>

                <select name="" id="">
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                  <option value="asc">A to Z</option>
                  <option value="desc">Z to A</option>
                </select>
              </div>
            </Col>
            {
              carData.map((item) => (
                <CarItem item={item} key={item.id} />
              ))
            }
          </Row>
        </Container>
      </section>
      <Footer />
    </>

  )
}

export default Car