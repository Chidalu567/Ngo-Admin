import React,{useState} from 'react';
import styled from 'styled-components';
import { notification } from 'antd';
import Image from 'next/image';
import axios from 'axios';

const PhotoSection = () => {

    // useState definition -> This holds values entered in the Form ( input, textarea and file)
    const [gallery, setGallery] = useState({title:'',description:'',file:'',date:''});

    // function to handle change event in element
    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setGallery({ ...gallery, [key]: value }); // update the element of the objects.
    }

    // function -> stores the value of file uploaded into the state gallery
    function handleFiles(e) {
        const file = e.target.files[0]; // file uploaded
        // call the preview function to update the gallery state with the file in base64 format
        previewFile(file);
    }

    // function -> reads file and previews file contents
    const previewFile = (file) => {
        const filename = file.name; // filename for public_id of cloudinary
        const reader = new FileReader(); // create a reader instance
        reader.readAsDataURL(file); // call the readAsDataUrl method
        reader.onloadend = () => {
            setGallery({ ...gallery, file: reader.result});
        }
    }

    // function to handle submit
    const handleSubmit = async()=>{
        if (gallery.date && gallery.title && gallery.description && gallery.file != null) {
            const response = await axios({ method: 'POST', url:'https://sporg.herokuapp.com/api/admin/gallery',data:{...gallery}}); // make a post request to backend API
            setGallery({});
        } else {
            notification['error']({
                message: 'Incomplete Form',
                description: 'Each photo displayed on gallery has to contain the Title, Description, Date and file. If anyone of this is missing it would be incomplete. Please complete the form below',
                duration:3.5,
            });
        }
    }


    return (
        <Container>
            <Form>
                <FormItem>
                    <Label htmlFor="title">Title:</Label>
                    <Input type="text" id="title" name="title" onChange={handleChange} required/>
                </FormItem>
                <FormItem>
                    <Label htmlFor="description">Description:</Label>
                    <TextArea name="description" id="description" onChange={handleChange} required/>
                </FormItem>
                <FormItem>
                    <Label htmlFor="date">Date:</Label>
                    <Input type="date" id="date" name="date" required onChange={handleChange}/>
                </FormItem>
                <FormItem>
                    <Label htmlFor="upload">Upload:</Label>
                    <Upload type="file" name="file" required onChange={handleFiles} />
                    {gallery.file && <Image src={gallery.file} priority width="100" height="100" alt="uploaded image"/>}
                </FormItem>
                <Submitbutton type="button" onClick={handleSubmit}>Create</Submitbutton>
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

const Submitbutton = styled.button`
    width:50%;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:30px;
    padding:15px;
    background-color:#262F36;
    color:white;
    font-weight:bold;
    font-family:Inter;
    border-radius:20px;
    &:hover{
        box-shadow: 2px 3px 10px black, 4px 6px 20px orange;
    }
`;
