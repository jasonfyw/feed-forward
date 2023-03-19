import { Button, Heading, IconButton, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons'
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface basicStyledProps {
    [key: string]: any
}

export const StyledHeading = ({children, ...rest}: PropsWithChildren<basicStyledProps>) => (
    <Heading fontWeight={600} fontSize={'36px'} {...rest}>
        {children}
    </Heading>
)

export const StyledSubheading = ({ children, ...rest }: PropsWithChildren<basicStyledProps>) => (
    <Text opacity={0.64} {...rest}>
        {children}
    </Text>
)

export const StyledText = ({ children, ...rest }: PropsWithChildren<basicStyledProps>) => (
    <Text opacity={0.64} {...rest}>
        {children}
    </Text>
)

export const MainButton = ({ children, ...rest }: PropsWithChildren<basicStyledProps>) => (
    <Button
        w={'100%'}
        borderRadius={'full'}
        bottom={0}
        bg={'#92CA63'}
        _hover={{
            bg: 'rgba(146, 202, 99, 0.75)'
        }}
        {...rest}
    >
        {children}
    </Button>
)

export const BackButton = ({ children, ...rest }: PropsWithChildren<basicStyledProps>) => (
    <Link to={rest.to}>
        <IconButton
            icon={<ArrowBackIcon />}
            aria-label={'Back'}
            size={'md'}
            fontSize={24}
            borderRadius={'full'}
            top={10}
            left={10}
            position={'fixed'}
            zIndex={1000}
            {...rest}
        />
    </Link>
)

