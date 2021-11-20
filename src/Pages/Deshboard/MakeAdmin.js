import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../Hook/useAuth';

const MakeAdmin = () => {
    const [success, setSuccess]=useState(false)
    const [email, setEmail] = useState('')
    const {token}=useAuth()
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization':`Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){ 
                    console.log(data);
                    setSuccess(true)
                  
                }
               
            })
        e.preventDefault();
    }
    return (
        <div>
            <h3>Make an admin</h3>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%'}}
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    type='email'
                    required
                    onBlur={handleOnBlur}

                /> 
                <br/>
                <Button type='submit' variant="contained">Make Admin</Button>

                {success&& <Alert severity="success">Admin made successfully</Alert>
                    }

            </form>
        </div>
    );
};

export default MakeAdmin;