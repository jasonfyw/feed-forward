import { createUserWithEmailAndPassword } from "firebase/auth";
import { Container, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import UserForm from '../../../components/UserForm';
import { useLocalStorage } from "usehooks-ts";
import axios from "axios";

import { auth } from '../../../firebase'
import { Navigate } from "react-router-dom";


const SignUpVendor = () => {
    const [user, setUser] = useLocalStorage<any>('user', {})
    const toast = useToast()
    
    const [stateValues, setStateValues] = useState({
        email: '',
        password: '',
        name: '',
        address: '',
    });

    const fields = [
        { name: 'email', label: 'Email' },
        { name: 'password', label: 'Password' },
        { name: 'name', label: 'Name' },
        { name: 'address', label: 'Address' },
    ];

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, stateValues.email, stateValues.password)
            .then((userCredential) => {
                // Signed in 
                setUser({...userCredential.user, role: 'vendor'});
                axios.post('http://127.0.0.1:8000/users/', {
                    // @ts-ignore
                    name: stateValues['name'],
                    email: stateValues['email'],
                    roles: ['vendor'],
                    address: stateValues['address']
                })
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast({ status: 'error', description: errorMessage})
            });
    }

    return (
        <Container>
            {
                Object.keys(user).length > 0 ? (
                    <Navigate to='/vendor' />
                ) : (
                    <UserForm 
                        fields={fields}
                        stateValues={stateValues}
                        setStateValues={setStateValues}
                        handleSubmit={handleSignUp}
                        submitText={'Sign up'}
                    />
                )
            }

        </Container>
    );
}

export default SignUpVendor;