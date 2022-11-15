import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Layout } from '../components/SignUp/layout.js';

const Login = () => {
    return (
        <Container>
            <Form>

                <FormItem>
                    <Label htmlFor="email">Email:</Label>
                    <Input type="email" id='email' required="true"/>
                </FormItem>

                <FormItem>
                    <Label htmlFor="password">Password:</Label>
                    <Input type="password" id="password" required="true" />
                </FormItem>

                <FormItem>
                    <Label htmlFor="signup">Create a new account: </Label>
                    <Link href="/">SignUp</Link>
                </FormItem>


                <SubmitButton type="button">Submit</SubmitButton>

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
