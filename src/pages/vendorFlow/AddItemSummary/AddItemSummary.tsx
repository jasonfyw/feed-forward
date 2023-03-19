import { Text, Card, Center, Container, Flex, Icon, VStack, Spacer } from '@chakra-ui/react';
import { BackButton, MainButton, StyledHeading, StyledSubheading, StyledText } from '../../../components/basicStyled';
import { MdCheckCircle, MdPhotoCamera } from 'react-icons/md'
import { useLocalStorage } from 'usehooks-ts';
import { ScannedItem } from '../../../types';
import { Link } from 'react-router-dom';
import ItemCard from '../../../components/ItemCard';

function AddItemSummary() {
    const [scannedItems,] = useLocalStorage<ScannedItem[]>('scannedItems', [])

    let subtotal = 0
    scannedItems.forEach(item => subtotal += (item.reducedPrice || 0))

    return (
        <Container pt={['70px', 10]} px={5} h={'100vh'} >
            <BackButton to={'/vendor'} />
            <StyledHeading pb={'8px'}>
                Scan the items you are adding
            </StyledHeading>
            <StyledSubheading>
                Scan the items you are adding and then press 'Continue'
            </StyledSubheading>

            {
                (scannedItems.length === 0 || scannedItems === undefined) && (
                    <VStack pt={'24px'}>
                        <Flex width={'100%'}><Center><Icon as={MdCheckCircle} color={'#48BB78'} mr={'8px'} /></Center><Center><StyledText>Include a good view of the products you're adding</StyledText></Center></Flex>
                        <Flex width={'100%'}><Center><Icon as={MdCheckCircle} color={'#48BB78'} mr={'8px'} /></Center><Center><StyledText>Make sure the area is well lit</StyledText></Center></Flex>
                        <Flex width={'100%'}><Center><Icon as={MdCheckCircle} color={'#48BB78'} mr={'8px'}/></Center><Center><StyledText>Keep the camera still</StyledText></Center></Flex>
                    </VStack>
                )
            }

            <Flex mt={'24px'}>
                <Text fontWeight={600}>{scannedItems.length} items</Text>
                <Spacer/>
                <Text fontWeight={600}><span style={{ color: '#718096'}}>Subtotal:</span> CA${subtotal}</Text>
            </Flex>
            <Link to={'/vendor/add'}>
                <Card
                    bg={'none'}
                    border={'1px solid'}
                    borderColor={'gray.200'}
                    shadow={'none'}
                    py={'28px'}
                    mb={10}
                    mt={'24px'}
                >
                    <Center>
                        <VStack>
                            <Icon as={MdPhotoCamera} fontSize={'32px'} color={'#48BB78'} />
                            <Text>Scan listings</Text>
                        </VStack>
                    </Center>
                </Card>
            </Link>

            {
                !(scannedItems.length === 0 || scannedItems === undefined) && (
                    <VStack mb={'32px'}>
                        {
                            scannedItems.map((item) => (
                                <ItemCard scannedItem={item} w={'100%'} />
                            ))
                        }
                    </VStack>
                )
            }
            
            <Link to={'/vendor/itemsummary/delivery'}>
                <MainButton isDisabled={scannedItems.length === 0 || scannedItems === undefined}>Continue</MainButton>
            </Link>
        </Container>
    );
}

export default AddItemSummary;