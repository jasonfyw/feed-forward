import { Container, Stack } from '@chakra-ui/react';
import React from 'react';
import OptionCard from '../../../components/OptionCard';
import { MdAdd, MdList } from 'react-icons/md'
import { StyledHeading } from '../../../components/basicStyled';
import { Link } from 'react-router-dom';

const Vendor = () => {
    return (
        <Container pt={['70px', 10]} px={5}>
            <StyledHeading pb={'24px'}>
                What would you like to do?
            </StyledHeading>

            <Stack>
                <Link to={'/vendor/listings'}>
                    <OptionCard
                        icon={MdList}
                        header={'All products'}
                        description={'View all products currently listed'}
                        bg={'none'}
                        border={'1px solid'}
                        borderColor={'gray.200'}
                        shadow={'none'}
                    />
                </Link>
                <Link to={'/vendor/itemsummary'}>
                    <OptionCard
                        icon={MdAdd}
                        header={'Scan products'}
                        description={'Scan and list new products'}
                        bg={'none'}
                        border={'1px solid'}
                        borderColor={'gray.200'}
                        shadow={'none'}
                        _hover={{
                            bg: 'gray.50'
                        }}
                        transition={'0.5s'}
                    />
                </Link>
            </Stack>
        </Container>
    );
}

export default Vendor;