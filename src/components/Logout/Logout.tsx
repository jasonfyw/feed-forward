import { useEffect } from 'react';
import { Navigate } from 'react-router';
import { useLocalStorage } from 'usehooks-ts';
import { auth } from '../../firebase';

const Logout = () => {
    const [, setUser] = useLocalStorage('user', {})

    useEffect(() => {
        auth.signOut()
        setUser({})
    })
    return (
        <Navigate to='/' />
    );
}

export default Logout;