import { Box, Button, Container, Flex, FormControl, FormLabel, Image, Input, NumberInput, NumberInputField, Textarea } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { MainButton, StyledHeading } from '../../../components/basicStyled';

interface EnterItemInfoProps {
    image: string,
    name: string,
    setName: (s: string) => void,
    description: string,
    setDescription: (s: string) => void,
    originalPrice: number|null,
    setOriginalPrice: (p: number) => void,
    reducedPrice: number|null,
    setReducedPrice: (p: number) => void,
    handleSubmit: () => void
}

const EnterItemInfo = (props: EnterItemInfoProps) => {

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>) => {
        const { value } = event.target;
        props.setName(value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>) => {
        const { value } = event.target;
        props.setDescription(value);
    };

    const handlePrice1Change = (_: string, value: number) => {
        props.setOriginalPrice(value)
    };

    const handlePrice2Change = (_: string, value: number) => {
        props.setReducedPrice(value)
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        props.handleSubmit()
    };


    return (
        <Container pt={['70px', 10]} px={5} h={'100vh'} >
            <StyledHeading pb={'8px'}>
                Edit your item
            </StyledHeading>
            <Image src={props.image} w={'100%'} h={['200px', '300px']} objectFit='cover' />
            <Box>
                <form>
                    <FormControl id="itemName" isRequired>
                        <FormLabel fontWeight={600} mt={'20px'}>Item Name</FormLabel>
                        <Input type="text" name="itemName" value={props.name} onChange={handleNameChange} />
                    </FormControl>

                    <FormControl id="itemDescription" isRequired>
                        <FormLabel fontWeight={600} mt={'20px'}>Description</FormLabel>
                        <Textarea name="itemDescription" value={props.description} onChange={handleDescriptionChange} />
                    </FormControl>

                    <Flex justify="space-between" gap={5}>
                        <FormControl id="price1" isRequired>
                            <FormLabel fontWeight={600} mt={'20px'}>Original Price</FormLabel>
                            <NumberInput value={props.originalPrice || undefined} onChange={handlePrice1Change}>
                                <NumberInputField name="price1" placeholder={'$7'}/>
                            </NumberInput>
                        </FormControl>

                        <FormControl id="price2" isRequired>
                            <FormLabel fontWeight={600} mt={'20px'}>Discounted Price</FormLabel>
                            <NumberInput value={props.reducedPrice || undefined} onChange={handlePrice2Change}>
                                <NumberInputField name="price2" placeholder={'$3'}/>
                            </NumberInput>
                        </FormControl>
                    </Flex>

                    <MainButton type="submit" mt={12} onClick={handleSubmit}>
                        Done editing
                    </MainButton>
                    <Link to={'/vendor/additemlanding'}>
                        <Button variant='ghost' w={'100%'} borderRadius={'full'} mt={2}>
                            Cancel
                        </Button>
                    </Link>
                </form>
            </Box>
        </Container>
    );
}

export default EnterItemInfo;