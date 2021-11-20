import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [img, setImg] = useState(null);
    const handleSubmit = e => {
        e.preventDefault();
        if (!img) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('img', img);
        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
               if(data.insertedId){
                alert('doctors added successfully')
               }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    console.log(img);
    return (
        <div>

            <form onSubmit={handleSubmit} >
                <TextField
                    id="standard-basic"
                    sx={{ width: '50%' }}
                    label="Name"
                    onChange={e => setName(e.target.value)}
                    type='text'
                    required
                    variant="standard" /> <br />
                <TextField
                    sx={{ width: '50%' }}
                    id="standard-basic"
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    type='email'
                    required
                    variant="standard" /> <br></br>
                <Input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    onChange={e => setImg(e.target.files[0])}

                /> <br />
                <Button
                    variant="contained"
                    type='submit'
                >
                    Add Doctor
                </Button>
            </form>

        </div>
    );
};

export default AddDoctor;