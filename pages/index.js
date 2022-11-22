import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import {notification} from 'antd'
import axios from 'axios';
import { useState } from 'react';
import { Layout } from '../components/SignUp/layout.js';
import { Checkout } from '../components/SignUp/components/checkout.js';

const Home = () => {
  // state to hold user information to be sent to server
  const [person, setPerson] = useState({ firstname: '', lastname: '', email: '', date_of_birth: '', password: '' });

  // function to handle change
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [key]: value });
  }

  // function to handle file change
  const handleFile = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  }

  // function to handle preview file
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPerson({ ...person, file: reader.result });
    }
  }

  // function to handle submit event{
  const handleSubmit = async () => {
    if (person.firstname && person.lastname && person.email && person.date_of_birth && person.password!=null) {
      const response = await axios({ method: 'POST', url: "https://sporg.herokuapp.com/api/v1/signup", data: { ...person } });
      if (response.data.msg) {
        notification['info']({
          message: 'Success, Login',
          description: `${response.data.msg}`,
          duration: 4.5,
        });
      }
      setPerson({ firstname: '', lastname: '', email: '', password: '', date_of_birth: '' });
      window.location.href = "/admin_login";
    } else {
      notification['error']({
        message: 'Incomplete Form',
        description: "One of the form field is empty please kindly fill it in. All info is stored in database for staff registration.",
        duration:4.5,
      })
    }
  }

  return (
    <Container>
      <Checkout status={{step1:'process'}} />
      <Form>
        <FormItem>
          <Label htmlFor="firstname">Firstname:</Label>
          <Input type="text" id="firstname" name="firstname" required={true} onChange={handleChange} value={person.firstname} />
        </FormItem>

        <FormItem>
          <Label htmlFor="lastname">Lastname:</Label>
          <Input type="text" id="lastname" name="lastname" required={true} onChange={handleChange} value={ person.lastname} />
        </FormItem>

        <FormItem>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" required={true} onChange={handleChange} value={person.email} />
        </FormItem>

        <FormItem>
          <Label htmlFor="date">DateOfBirth:</Label>
          <Input type="date" name="date_of_birth" id="date" required={true} onChange={handleChange} value={person.date_of_birth} />
        </FormItem>

        <FormItem>
          <Label htmlFor="password">Password:</Label>
          <Input type="password" id="password" name="password" required={true} onChange={handleChange} value={person.password} />
        </FormItem>

        <FormItem>
          <Label htm
            lFor="login">Already a User?</Label>
          <Link href="/admin_login">Signin</Link>
        </FormItem>

        <Submit type="button" onClick={handleSubmit}>Submit</Submit>
      </Form>
    </Container>
  )
}

// UI Component
const Container = styled.main`
  margin:10px;
`;

const Form = styled.form`
  display:flex;
  flex-direction:column;
  margin:auto auto;
  @media screen and (min-width:720px){
    width:1100px;
  }
`;

const FormItem = styled.div`
  display:flex;
  flex-direction:row;
  margin-bottom:40px;
  margin:10px 10px;
  justify-content:space-between;
  @media screen and (max-width:720px){
    flex-direction:column;
    margin-bottom:30px;
  }
`;

const Input = styled.input`
    width:80%;
    background-color:#262F36;
    height:50px;
    border-top-right-radius: 15px;
    border: 1px solid transparent;
    color:white;
    padding-left:20px;
    @media screen and (max-width:720px){
      width:100%;
    }
`;

const Label = styled.label`
    font-family:Inter;
    font-weight:bold;
    font-size:20px;
`;

const Upload = styled.input``;


const Submit = styled.button`
  width:50%;
  align-self:center;
  padding:10px;
  border:1px solid transparent;
  background-color:#262F36;
  color:white;
  border-radius:10px;
`;

export default Home;

Home.getLayout = function getLayout(content) {
  return (
    <Layout>
      <div>{content}</div>
    </Layout>
  )
}