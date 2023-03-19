import {
    As,
    Box,
    Card,
    CardHeader,
    Flex,
    Heading,
    Icon,
    Text
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';


interface OptionCardProps {
    icon: As,
    header: string,
    description?: string,
    hasSelect?: boolean,
    isSelected?: boolean,
    [key: string]: any
}

const OptionCard = ({ icon, header, description, hasSelect, isSelected, ...rest }: OptionCardProps) => {
    return (
        <Card {...rest}>
            <CardHeader pt={4}>
                <Flex flex='1' gap='4' flexWrap='wrap'>
                    <Icon as={icon} fontSize={24} top={0} />

                    <Box>
                        <Heading size='sm' fontSize={'14px'} fontWeight={600} pt={1}>{ header }</Heading>
                        {
                            (hasSelect && isSelected) && (
                                <Icon as={MdCheckCircle} position={'absolute'} top={1} right={1} fontSize={'16px'} color={'#92CA63'} />
                            )
                        }
                        {
                            (hasSelect && !isSelected)  && (
                                <Box width={'16px'} height={'16px'} borderRadius={'full'} border={'2px solid #E2E8F0'} position={'absolute'} top={1} right={1} />
                            )
                        }
                        {
                            description && (
                                <Text mt={2} fontWeight={400} fontSize={'12px'}>
                                    {description}
                                </Text>
                            )
                        }
                    </Box>
                </Flex>
            </CardHeader>
        </Card>
    );
}

export default OptionCard;