import { Box, Button, Center, Container, Divider, useToast } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { StyledHeading } from '../../../components/basicStyled';
import UserForm from '../../../components/UserForm';
import { auth } from '../../../firebase';

const LoginCustomer = () => {
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
                setUser({ ...userCredential.user, role: 'customer' })
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast({ status: 'error', description: errorMessage })
            });
    }
    
    return (
        <Container pt={['70px', 10]} px={5} h={'100vh'} >
            <StyledHeading pb={'8px'}>
                Login
            </StyledHeading>
            {
                (Object.keys(user).length > 0) ? (
                    <Navigate to='/' />
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

            <Center my={'24px'}>
                <Button variant={'link'}>Create account</Button>
            </Center>

            <Divider my={'32px'} />

            <StyledHeading mb={'12px'}>
                Are you a business?
            </StyledHeading>

            <Box mb={'12px'}>
                <Link to={'/vendor/login'}>
                    <Button w={'100%'} borderRadius={'full'}>Business login</Button>
                </Link>
            </Box>
            <Box>
                <Link to={'/vendor/signup'}>
                    <Button w={'100%'} borderRadius={'full'}>Create a business account</Button>
                </Link>
            </Box>
        </Container>
    );
}

export default LoginCustomer;