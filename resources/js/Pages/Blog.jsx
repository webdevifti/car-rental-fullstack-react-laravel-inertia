import BlogList from '@/Components/Frontend/BlogList'
import Footer from '@/Components/Frontend/Footer'
import Header from '@/Components/Frontend/Header'
import { Head } from '@inertiajs/react'
import React from 'react'
import { Container,Row } from 'react-bootstrap'

const Blog = () => {
  return (
    <>
      <Header />
      <Head title="Blog"/>
      <section>
      <Container>
        <Row>
          <BlogList />
          <BlogList />
        </Row>
      </Container>
    </section>
      <Footer />
    </>
  )
}

export default Blog