import { useLocalStorage } from 'usehooks-ts';
import LoginCustomer from '../customerFlow/LoginCustomer';
import ManageAccount from './ManageAccount';

const Account = () => {
    const [user,] = useLocalStorage<any>('user', {})

    return (
        <>
            {
                user.hasOwnProperty('uid') ? (
                    <ManageAccount />
                ) : (
                    <LoginCustomer />
                )
            }
        </>
    );
}

export default Account;