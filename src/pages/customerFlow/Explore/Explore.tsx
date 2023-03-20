import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Center, Container, Flex, Spacer, VStack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { StyledHeading } from '../../../components/basicStyled';
import { ScannedItem } from '../../../types';

const Explore = () => {
    const [listings, setListings] = useState<Record<string, ScannedItem[]>>({})
    const [components, setComponents] = useState<ReactNode[]>([])

    useEffect(() => {
        axios.get('http://localhost:8000/items/')
            .then(res => {
                const items = res.data as ScannedItem[]
                const groupedItems: { [key: string]: ScannedItem[] } = {};

                items.forEach(item => {
                    if (item.vendorId) {
                        if (!groupedItems[item.vendorId]) {
                            groupedItems[item.vendorId] = [];
                        }
                        groupedItems[item.vendorId].push(item);
                    }
                });
                setListings(groupedItems)
            })
        
        Object.keys(listings).forEach((k) => {
            axios.get('http://localhost:8000/users/'.concat(k))
                .then((res) => {
                    setComponents([...components, <Box>
                        <Flex >
                            <Box>
                                <Text fontWeight={600}>
                                    {res.data.name}
                                </Text>
                            </Box>
                            <Spacer />
                            <Center><Link to={'/signout'}><ChevronRightIcon bg={'gray.200'} borderRadius={'full'} /></Link></Center>
                        </Flex>
                    </Box>])
                })
        })
        
    }, [])



    return (
        <Container pt={['70px', 10]} px={5} h={'100vh'} >
            <StyledHeading pb={'8px'}>
                Discover Foods Around You
            </StyledHeading>
            <VStack>
                {
                    components
                }
            </VStack>
        </Container>
    );
}

export default Explore;