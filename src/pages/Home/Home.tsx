import { Container } from '@chakra-ui/react';
import React from 'react';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { StyledHeading } from '../../components/basicStyled';
import OptionCard from '../../components/OptionCard';
import Explore from '../customerFlow/Explore';

const Home = () => {
    const [user,] = useLocalStorage<any>('user', {})

    return (
        <>
            {
                !user.hasOwnProperty('uid') ? (
                    <Container pt={['70px', 10]} px={5} h={'100vh'} >
                        <StyledHeading pb={'8px'}>
                            Welcome to Feed Forward!
                        </StyledHeading>

                                <Link to={'/account'}>
                                    <OptionCard
                                        icon={FiUser}
                                        header={'Get Started'}
                                        description={'Login or create an account!'}
                                        bg={'none'}
                                        border={'1px solid'}
                                        borderColor={'gray.200'}
                                        shadow={'none'}
                                        mt={'32px'}
                                    />
                                </Link>
                    </Container>
                ) : (
                    <Explore />
                )
            }
        </>
    );
}

export default Home;