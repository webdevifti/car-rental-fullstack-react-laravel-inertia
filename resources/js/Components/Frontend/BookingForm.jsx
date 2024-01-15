import React from 'react'
import '../../../css/booking-form.css'
import { Form,FormGroup } from 'react-bootstrap'

const BookingForm = () => {
    const submithandler = event => {
        event.preventDefault()
    }
    
    return (
        <Form onSubmit={submithandler}>
            <FormGroup className='booking__form d-inline-block me-1 mb-4'>
                <input type="text" placeholder='First Name' />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                <input type="text" placeholder='Last Name' />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-1 mb-4'>
                <input type="email" placeholder='Email' />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                <input type="number" placeholder='Phone Number' />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-1 mb-4'>
                <input type="text" placeholder='From address' />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                <input type="text" placeholder='To Address' />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-1 mb-4'>
                <select>
                    <option value="1 person">1 Person</option>
                    <option value="2 person">2 Person</option>
                    <option value="3 person">3 Person</option>
                    <option value="4 person">4 Person</option>
                    <option value="5+ person">5+ Person</option>
                </select>
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-1 mb-4'>
                <select>
                    <option value="1 lugage">1 lugage</option>
                    <option value="2 lugage">2 lugage</option>
                    <option value="3 lugage">3 lugage</option>
                    <option value="4 lugage">4 lugage</option>
                    <option value="5+ lugage">5+ lugage</option>
                </select>
            </FormGroup>
            <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                <input type="date" placeholder='Journey Date' />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                <input type="time" className='time__picker' placeholder='Journey Time' />
            </FormGroup>
            <FormGroup>
                <textarea rows={5} type="textarea" className="textarea" placeholder='Write'></textarea>
            </FormGroup>
        </Form>
    )
}

export default BookingForm