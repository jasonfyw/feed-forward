import { Text, Card, Center, Container, Flex, Icon, VStack } from '@chakra-ui/react';
import { MainButton, StyledHeading, StyledSubheading, StyledText } from '../../../components/basicStyled';
import { MdCheckCircle, MdPhotoCamera } from 'react-icons/md'
import { useLocalStorage } from 'usehooks-ts';
import { ScannedItem } from '../../../types';
import { Link } from 'react-router-dom';

function AddItemSummary() {
    const [scannedItems,] = useLocalStorage<ScannedItem[]>('scannedItems', [])

    return (
        <Container py={10} px={5} h={'100vh'} >
            <StyledHeading pb={'8px'}>
                Scan the items you are adding
            </StyledHeading>
            <StyledSubheading>
                Scan the items you are adding and then press 'Continue'
            </StyledSubheading>

            <VStack py={'24px'}>
                <Flex width={'100%'}><Center><Icon as={MdCheckCircle} color={'#48BB78'} mr={'8px'} /></Center><Center><StyledText>Include a good view of the products you're adding</StyledText></Center></Flex>
                <Flex width={'100%'}><Center><Icon as={MdCheckCircle} color={'#48BB78'} mr={'8px'} /></Center><Center><StyledText>Make sure the area is well lit</StyledText></Center></Flex>
                <Flex width={'100%'}><Center><Icon as={MdCheckCircle} color={'#48BB78'} mr={'8px'}/></Center><Center><StyledText>Keep the camera still</StyledText></Center></Flex>
            </VStack>

            <Link to={'/vendor/add'}>
                <Card
                    bg={'none'}
                    border={'1px solid'}
                    borderColor={'gray.200'}
                    shadow={'none'}
                    py={'32px'}
                    mb={10}
                >
                    <Center>
                        <VStack>
                            <Icon as={MdPhotoCamera} fontSize={'32px'} color={'#48BB78'} />
                            <Text>Scan listings</Text>
                        </VStack>
                    </Center>
                </Card>
            </Link>

            <MainButton isDisabled={scannedItems.length === 0 || scannedItems === undefined}>Continue</MainButton>
        </Container>
    );
}

export default AddItemSummary;