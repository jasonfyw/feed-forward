import { Container, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { BackButton, StyledHeading } from '../../../components/basicStyled';
import ItemCard from '../../../components/ItemCard';
import { ScannedItem } from '../../../types';

const AllListings = () => {
    const [user,] = useLocalStorage<any>('user', {})
    const [items, setItems] = useState<ScannedItem[]>([])

    useEffect(() => {
        axios.get('http://localhost:8000/items/vendorId/'.concat(user['uid']))
            .then((res) => {
                setItems(res.data)
            })
    }, [])
    return (
        <Container pt={['70px', 10]} px={5} h={'100vh'} >
            <BackButton to={'/vendor'} />
            <StyledHeading pb={'8px'}>
                All Listings
            </StyledHeading>

            <VStack>
                {
                    items.map((item) => (
                        <ItemCard 
                            scannedItem={item} w={'100%'} 
                        />
                    ))
                }
            </VStack>
        </Container>
    );
}

export default AllListings;