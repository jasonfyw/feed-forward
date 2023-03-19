import { Container, Flex, VStack, Text, Center, IconButton, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { StyledHeading } from '../../components/basicStyled';
import { FiLogOut } from 'react-icons/fi'
import { ChevronRightIcon } from '@chakra-ui/icons';

const ManageAccount = () => {
    return (
        <Container pt={['70px', 10]} px={5} h={'100vh'} >
            <StyledHeading>
                Account
            </StyledHeading>

            <VStack mt={'24px'}>
                <Text fontWeight={600} fontSize={'12px'} width={'100%'}>Account Settings</Text>
                <Flex width={'100%'} my={'32px'}>
                    <Center><Link to={'/signout'}><IconButton aria-label={'Log out'} icon={<FiLogOut/>} mr={'8px'} size={'lg'} bg={'none'} borderRadius={10} padding={0} /></Link></Center>
                    <Center><Link to={'/signout'}><Text fontWeight={600}>Log Out</Text></Link></Center>
                    <Spacer/>
                    <Center><Link to={'/signout'}><ChevronRightIcon bg={'gray.200'} borderRadius={'full'} /></Link></Center>
                </Flex>
            </VStack>
        </Container>
    );
}

export default ManageAccount;