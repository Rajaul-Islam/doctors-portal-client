import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Jw70nF5oOaRNzyIcUCYoJYXuf00w4ySvLibxQiForn4c9dvAqBTWGoi6HOoIQfOEJVoSkybZUZsBAr0kv8qACJX00MkyKDqiG'); 



const Payment = () => {
    const { appointmentId } = useParams()
    const [appointment, setAppointment] = useState({});
    console.log(appointment);
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [])

    return (
        <div>
            <h2>Please Pay for: {appointmentId}</h2>
            <h4>pay:${appointment.price}</h4>
          { appointment.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                  appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;



/*

*/