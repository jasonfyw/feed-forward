import { Container, Flex, VStack, Text, Center, IconButton, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { StyledHeading } from '../../components/basicStyled';
import { FiLogOut } from 'react-icons/fi'
import { ChevronRightIcon } from '@chakra-ui/icons';

const ManageAccount = () => {
    return (
        <Container pt={['70px', 10]} px={5} h={'100vh'} >
            <StyledHeading>
                Manage account
            </StyledHeading>

            <VStack>
                
                <Flex width={'100%'} my={'32px'}>
                    <Center><Link to={'/signout'}><IconButton aria-label={'Log out'} icon={<FiLogOut/>} mr={'20px'} size={'lg'} bg={'gray.200'} borderRadius={10} padding={2} /></Link></Center>
                    <Center><Link to={'/signout'}><Text fontWeight={600}>Log Out</Text></Link></Center>
                    <Spacer/>
                    <Center><Link to={'/signout'}><ChevronRightIcon /></Link></Center>
                </Flex>
            </VStack>
        </Container>
    );
}

export default ManageAccount;