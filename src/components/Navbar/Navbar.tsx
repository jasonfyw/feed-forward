import {
    Box, Icon, VStack, Text, HStack, Center
} from '@chakra-ui/react'
import { FaRegUser } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

const Navbar = () => {
    const [user,] = useLocalStorage<any>('user', {})

    return (
        <Box
            width={'100vw'}
            borderTop={'1px solid #E2E8F0'}
            position={'fixed'}
            bottom={0}
        >
            <Center>
            <HStack px={10} spacing={20}>
                <Link to={user['role'] === 'vendor' ? '/vendor' : '/'}>
                    <Box py={'18px'}>
                        <VStack>
                            <Icon as={FiHome} />
                            <Text>Home</Text>
                        </VStack>
                    </Box>
                </Link>
                <Link to={'/account'}>
                    <Box py={'18px'}>
                        <VStack>
                            <Icon as={FaRegUser} />
                            <Text>Profile</Text>
                        </VStack>
                    </Box>
                </Link>
            </HStack>
            </Center>
        </Box>
    );
}

export default Navbar;