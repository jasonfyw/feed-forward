import {
    Box,
    Card,
    CardHeader,
    Flex,
    Heading,
    Image,
    Text
} from '@chakra-ui/react';
import { ScannedItem } from '../../types';
import { StyledSubheading } from '../basicStyled';


interface ItemCardProps {
    scannedItem: ScannedItem,
    [key: string]: any
}

const ItemCard = ({ scannedItem, ...rest }: ItemCardProps) => {
    return (
        <Card {...rest}>
            <CardHeader pt={4}>
                <Flex flex='1' gap='4' flexWrap='wrap'>
                    <Image width={'54px'} height={'54px'} objectFit={'cover'} src={scannedItem['image']} borderRadius={'full'} />

                    <Box>
                        <Heading size='sm' fontSize={'14px'} fontWeight={600} pt={1}>{scannedItem['name']} &nbsp;<span style={{fontWeight: 400, fontSize: '12px'}}>x1</span></Heading>
                        {
                            scannedItem['description'] && (
                                <StyledSubheading mt={1} mb={2} fontWeight={400} fontSize={'12px'}>
                                    {scannedItem['description']}
                                </StyledSubheading>
                            )
                        }
                        <Flex>
                            <Text fontSize={'16px'} fontWeight={500} lineHeight={'16px'}>${scannedItem['reducedPrice']}</Text>
                            <Text textDecor={'line-through'} fontSize={'12px'} fontWeight={400} color={'#A0AEC0'} lineHeight={'16px'} ml={2}>${scannedItem['originalPrice']}</Text>
                        </Flex>
                    </Box>
                </Flex>
            </CardHeader>
        </Card>
    );
}

export default ItemCard;