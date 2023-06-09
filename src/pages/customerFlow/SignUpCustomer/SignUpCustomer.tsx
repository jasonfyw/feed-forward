import { createUserWithEmailAndPassword } from "firebase/auth";
import { Container, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import UserForm from '../../../components/UserForm';
import { useLocalStorage } from "usehooks-ts";
import axios from "axios";

import { auth } from '../../../firebase'
import { Navigate } from "react-router-dom";
import { StyledHeading } from "../../../components/basicStyled";


const SignUpCustomer = () => {
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
        { name: 'name', label: 'Name' }
    ];

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, stateValues.email, stateValues.password)
            .then((userCredential) => {
                // Signed in 
                setUser({ ...userCredential.user, role: 'consumer' });
                axios.post('http://127.0.0.1:8000/users/', {
                    // @ts-ignore
                    name: stateValues['name'],
                    email: stateValues['email'],
                    roles: ['consumer'],
                    address: '',
                    id: userCredential.user.uid
                })
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast({ status: 'error', description: errorMessage })
            });
    }

    return (
        <Container pt={['70px', 10]} px={5} h={'100vh'} >
            <StyledHeading pb={'8px'}>
                Create an account
            </StyledHeading>
            {
                Object.keys(user).length > 0 ? (
                    <Navigate to='/vedor' />
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

export default SignUpCustomer;