import {Link } from '@inertiajs/react';
import '../../../css/findcarform.css'
import { Form, FormGroup } from 'react-bootstrap';

const FindCarForm = () => {
    return (
        <Form className='form'>
            <div className='d-flex align-items-center justify-content-between flex-wrap'>
                <FormGroup className="form__group">
                    <input type="text" placeholder="From Address" required className='mb-2' />
                </FormGroup>
                <FormGroup className="form__group">
                    <input type="text" placeholder="To Address" required className='mb-2' />
                </FormGroup>
                <FormGroup className="form__group">
                    <input type="date" placeholder="Journey Date" required className='mb-2' />
                </FormGroup>
                <FormGroup className="form__group">
                    <input className='journey__time mb-2' type="time" placeholder="Journey Time" required />
                </FormGroup>
                <FormGroup className="select__group">
                    <select className='mb-2'>
                        <option value="">Select Car Type</option>
                        <option value="ac">AC Car</option>
                        <option value="non-ac">None AC Car</option>
                    </select>
                </FormGroup>
                <FormGroup className="form__group">
                    <button type="submit" className="btn find__car-btn">Find Car</button>
                </FormGroup>
            </div>
        </Form>
    )
}

export default FindCarForm