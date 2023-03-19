import { Container, Stack } from '@chakra-ui/react';
import React from 'react';
import OptionCard from '../../../components/OptionCard';
import { MdAdd, MdList } from 'react-icons/md'
import { StyledHeading } from '../../../components/basicStyled';

const Vendor = () => {
    return (
        <Container py={10} px={5}>
            <StyledHeading pb={'24px'}>
                What would you like to do?
            </StyledHeading>

            <Stack>
                <OptionCard
                    icon={MdList}
                    header={'All products'}
                    description={'View all products currently listed'}
                    bg={'none'}
                    border={'1px solid'}
                    borderColor={'gray.200'}
                    shadow={'none'}
                />
                <OptionCard
                    icon={MdAdd}
                    header={'Scan products'}
                    description={'Scan and list new products'}
                    bg={'none'}
                    border={'1px solid'}
                    borderColor={'gray.200'}
                    shadow={'none'}
                />
            </Stack>
        </Container>
    );
}

export default Vendor;