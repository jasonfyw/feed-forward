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


interface OptionCardProps {
    icon: As,
    header: string,
    description?: string,
    [key: string]: any
}

const OptionCard = ({ icon, header, description, ...rest }: OptionCardProps) => {
    return (
        <Card {...rest}>
            <CardHeader pt={4}>
                <Flex flex='1' gap='4' flexWrap='wrap'>
                    <Icon as={icon} fontSize={24} top={0} />

                    <Box>
                        <Heading size='sm' fontSize={'14px'} fontWeight={600} pt={1}>{ header }</Heading>
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