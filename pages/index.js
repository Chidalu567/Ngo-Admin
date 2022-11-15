import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { Layout } from '../components/SignUp/layout.js';
import { Checkout } from '../components/SignUp/components/checkout.js';

const Home = () => {
  return (
    <Container>
      <Checkout status={{step1:'process'}} />
      <Form>
        <FormItem>
          <Label htmlFor="firstname">Firstname:</Label>
          <Input type="text" id="firstname" name="firstname" required="true"/>
        </FormItem>

        <FormItem>
          <Label htmlFor="lastname">Lastname:</Label>
          <Input type="text" id="lastname" name="lastname" required="true"/>
        </FormItem>

        <FormItem>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" required="true"/>
        </FormItem>

        <FormItem>
          <Label htmlFor="date">DateOfBirth:</Label>
          <Input type="date" name="date" id="date" required="true"/>
        </FormItem>

        <FormItem>
          <Label htmlFor="password">Password:</Label>
          <Input type="text" id="password" name="password" required="true"/>
        </FormItem>

        <FormItem>
          <Label htmlFor="file">Profile Photo:</Label>
          <Upload type="file" name="file" id="file" required="true"/>
        </FormItem>

        <FormItem>
          <Label htmlFor="login">Already a User?</Label>
          <Link href="/admin_login">Login</Link>
        </FormItem>

        <Submit type="button">Submit</Submit>
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