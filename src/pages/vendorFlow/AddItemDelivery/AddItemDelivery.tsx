import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Container, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react';
import { BackButton, MainButton, StyledHeading } from '../../../components/basicStyled';
import OptionCard from '../../../components/OptionCard';
import { MdStore, MdList } from 'react-icons/md'
import { FaTruck } from 'react-icons/fa'
import { useLocalStorage } from 'usehooks-ts';
import { ScannedItem } from '../../../types';
import axios from 'axios';
import { useNavigate } from 'react-router';

const AddItemDelivery = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef<HTMLButtonElement>(null)
    const [scannedItems, setScannedItems] = useLocalStorage<ScannedItem[]>('scannedItems', [])
    const [user,] = useLocalStorage<any>('user', {})
    const navigate = useNavigate()

    const handleListItems = () => {
        axios.post('http://127.0.0.1:8000/items/batch', {
            items: scannedItems,
            vendorId: user['uid']
        }).then(() => {
            setScannedItems([])
            onOpen()
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <Container py={10} px={5} h={'100vh'} >
            <BackButton to={'/vendor/itemsummary'} />
            <StyledHeading pb={'8px'}>
                Select Delivery Method
            </StyledHeading>

            <VStack mt={'24px'}>
                <OptionCard
                    icon={MdStore}
                    width={'100%'}
                    header={'Pick up (recommended)'}
                    description={'Customers will come pick up at your store at no extra cost'}
                    bg={'none'}
                    border={'1px solid'}
                    borderColor={'gray.200'}
                    shadow={'none'}
                    hasSelect={true}
                    isSelected={true}
                    cursor={'pointer'}
                />
                <OptionCard
                    isDisabled
                    icon={FaTruck}
                    width={'100%'}
                    header={'Delivery'}
                    description={'The item will be delivered to the customer for an additional price'}
                    bg={'none'}
                    border={'1px solid'}
                    borderColor={'gray.200'}
                    shadow={'none'}
                    hasSelect={true}
                    isSelected={false}
                    opacity={0.5}
                    cursor={'not-allowed'}
                />
                <OptionCard
                    isDisabled
                    icon={MdList}
                    width={'100%'}
                    header={'All'}
                    description={'Get the best of both worlds!'}
                    bg={'none'}
                    border={'1px solid'}
                    borderColor={'gray.200'}
                    shadow={'none'}
                    hasSelect={true}
                    isSelected={false}
                    opacity={0.5}
                    cursor={'not-allowed'}
                />
            </VStack>

            <MainButton mt={'32px'} onClick={() => {
                handleListItems()
            }}>
                Complete
            </MainButton>



            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent borderRadius={'10px'}>
                    <AlertDialogHeader>Products successfully listed!</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        The products have been successfully listed and are available to all customers
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <MainButton onClick={() => {
                            navigate('/vendor')
                        }} >
                            Return to dashboard
                        </MainButton>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Container>
    );
}

export default AddItemDelivery;