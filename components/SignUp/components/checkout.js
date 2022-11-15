import React from 'react';
import { Steps } from 'antd';


export const Checkout = ({ status }) => {
    const items = [
        { title: 'Personal Info', description: 'Each Admin is expected to enter their personal Information to be stored in database',status:status.step1?status.step1:"wait" },
        {title:'Terms and Conditions',description:'Each Admin is expected to accept the terms and condition of SirPhilipAgwuncha organization',status:status.step2?status.step2:"wait"}
    ]
    return (
        <Steps current={1} items={items} />
    )
}