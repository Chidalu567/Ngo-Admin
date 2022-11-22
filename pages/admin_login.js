import React, { useState } from 'react';
import { notification } from 'antd';
import axios from 'axios';
import styled from 'styled-components';
import Link from 'next/link';
import { Layout } from '../components/SignUp/layout.js';

const Login = () => {
    // state to hold staff information
    const [person, setPerson] = useState({ email: '', password: '' });

    // function to handle change
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [key]: value });
    }


    // function to handle submit
    const handleSubmit = async () => {
        // make request to check if the informations are correct
        if (person.email && person.password) {
            const response = await axios({ method: 'POST', url: 'https://sporg.herokuapp.com/api/v1/login', data: { ...person } });
            if (response.data.code == 1) {
                notification['info']({
                    message: 'Success Log',
                    description: `${response.data.msg}`,
                    duration:3.5,
                })
                console.log(response.data)
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('staffname', response.data.person);
                setInterval(() => {
                    window.location.href = '/admin';
                },4000)

            }

            if (response.data.code == 2) {
                notification['error']({
                    message: 'Wrong Password',
                    description: `${response.data.msg}`,
                    duration:3.5,
                })
            }

            if (response.data.code == 3) {
                notification['error']({
                    message: 'Account not found',
                    description:`${response.data.msg}`,
                })
            }

        } else {
            notification['error']({
                message: 'Incomplete Form',
                description: 'Please Fill in the fields of the form',
                duration:3.5,
            })
        }
    }
    return (
        <Container>
            <Form>

                <FormItem>
                    <Label htmlFor="email">Email:</Label>
                    <Input type="email" id='email' name="email" required={true} onChange={handleChange} value={person.email} />
                </FormItem>

                <FormItem>
                    <Label htmlFor="password">Password:</Label>
                    <Input type="password" id="password" name="password" required={true} onChange={handleChange} value={person.password} />
                </FormItem>

                <FormItem>
                    <Label htmlFor="signup">New Account: </Label>
                    <Link href="/">create a new account</Link>
                </FormItem>


                <SubmitButton type="button" onClick={handleSubmit}>Submit</SubmitButton>

            </Form>
        </Container>
    )
}

export default Login;

// UI component
const Container = styled.div`
    margin:10px;
`;

const Form = styled.form`
    margin:auto auto;
    display:flex;
    flex-direction:column;
    @media screen and (min-width:720px){
        width:1100px;
        margin-top:100px;
    }
`;

const FormItem = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-bottom:40px;
    @media screen and (max-width:720px){
        flex-direction:column;
    }
`;

const Label = styled.label`
    font-family:Inter;
    font-weight:bold;
    font-size:20px;
`;

const Input = styled.input`
    width:80%;
    height:50px;
    border-top-right-radius:15px;
    background-color:#262F36;
    color:white;
    @media screen and (max-width:720px){
        width:100%;
    }
`;

const SubmitButton = styled.button`
    width:50%;
    align-self:center;
    padding:10px;
    border-radius:10px;
    color:white;
    background-color:#262F36;
    border:1px solid transparent;
    font-family:Inter;
    font-size:16px;
    margin-bottom:100px;
`;



// Custom per Page layout in nextjs
Login.getLayout = function getLayout(content) {
    return (
        <Layout>
            <div>{content}</div>
        </Layout>
    )
}
