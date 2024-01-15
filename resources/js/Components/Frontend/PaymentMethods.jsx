import React from 'react'
import mastercard from '../../../assets/all-images/master-card.jpg'
import paypal from '../../../assets/all-images/paypal.jpg'
import '../../../css/payment.css'

const PaymentMethods = () => {
    return (
        <>
            <div className='payment'>
                <label htmlFor="" className='d-flex align-items-center gap-2'>
                    <input type="radio" /> Direct Bank Transfer
                </label>
            </div>

            <div className='payment'>
                <label htmlFor="" className='d-flex align-items-center gap-2'>
                    <input type="radio" /> Cheque Payment
                </label>
            </div>

            <div className='payment d-flex align-items-center justify-content-between mt-2'>
                <label htmlFor="" className='d-flex align-items-center gap-2'>
                    <input type="radio" /> Master Card

                </label>
                <img src={mastercard} alt="" />
            </div>
            <div className='payment d-flex align-items-center justify-content-between mt-2'>
                <label htmlFor="" className='d-flex align-items-center gap-2'>
                    <input type="radio" /> Paypal

                </label>
                <img src={paypal} alt="" />
            </div>

            <div className='payment text-end mt-5 reservedbtn'>
                <button>Reserve Now</button>
            </div>

        </>
    )
}

export default PaymentMethods