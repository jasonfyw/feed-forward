import { useToast, Container } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Navigate } from 'react-router';
import { useLocalStorage } from 'usehooks-ts';
import UserForm from '../../../components/UserForm';
import { auth } from '../../../firebase';

const LoginVendor = () => {
    const [user, setUser] = useLocalStorage<any>('user', {})
    const toast = useToast()

    const [stateValues, setStateValues] = useState({
        email: '',
        password: ''
    });

    const fields = [
        { name: 'email', label: 'Email' },
        { name: 'password', label: 'Password' }
    ];

    const handleSignUp = () => {
        signInWithEmailAndPassword(auth, stateValues.email, stateValues.password)
            .then((userCredential) => {
                // Signed in 
                setUser({ ...userCredential.user, role: 'vendor' })
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast({ status: 'error', description: errorMessage })
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
                        submitText={'Login'}
                    />
                )
            }

        </Container>
    );
}

export default LoginVendor;