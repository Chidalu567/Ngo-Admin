import React from 'react';
import styled from 'styled-components';

const PhotoSection = () => {
    return (
        <Container>
            <Form>
                <FormItem>
                    <Label htmlFor="title">Title:</Label>
                    <Input type="text" id="title" name="title" />
                </FormItem>
                <FormItem>
                    <Label htmlFor="description">Description:</Label>
                    <TextArea name="description" id="description"/>
                </FormItem>
                <FormItem>
                    <Label htmlFor="upload">Upload:</Label>
                    <Upload type="file" name="file"/>
                </FormItem>
            </Form>
        </Container>
    )
}

export default PhotoSection;

// ------ UI Section
const Container = styled.div`
    width:100%;
`;

const Form = styled.form`
    width: 700px;
    height:624px;
    margin:auto;
    margin-top:100px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding-left:10px;
    padding-right:10px;
    @media screen and (max-width:720px) {
        width:100%;
    }
`;

const Input = styled.input`
    width:80%;
    height: 40px;
    background-color:#262F36;
    color:white;
    font-family:Inter;
    font-size:16px;
    font-weight:normal;
    padding-left:10px;
    border: 1px solid transparent;
    border-radius:5px;
    margin-bottom:10px;
    @media screen and (max-width:720px){
        width:100%;
    }
`;

const TextArea = styled.textarea`
    width:80%;
    background-color:#262F36;
    color:white;
    font-family:Inter;
    font-size:16px;
    font-weight:normal;
    @media screen and (max-width:720px){
        width:100%;
    }
`;
const Label = styled.label`
    color:orange;
    font-family:Inter;
    font-size:20px;
    font-weight:bold;
`;

const FormItem = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    @media screen and (max-width:720px){
        flex-direction:column;
        margin-left:10px;
        margin-right:10px;
    }
`;

const Upload = styled.input`
    margin-bottom:50px;
`;