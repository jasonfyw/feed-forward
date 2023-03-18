import { Container } from '@chakra-ui/react';
import React, { useState } from 'react';
import SignUpForm from '../../components/SignUpForm';


const SignUpVendor = () => {
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
        console.log(stateValues)
    }

    return (
        <Container>
            <SignUpForm 
                fields={fields}
                stateValues={stateValues}
                setStateValues={setStateValues}
                handleSubmit={handleSignUp}
            />
        </Container>
    );
}

export default SignUpVendor;