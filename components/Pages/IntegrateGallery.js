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
                    <Button type="button">+</Button>
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
    width: 1254px;
    height:624px;
    margin:auto;
    margin-top:100px;
    background-color:blue;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

const Input = styled.input``;

const TextArea = styled.textarea``;

const Label = styled.label``;

const FormItem = styled.div``;

const Button = styled.div``;