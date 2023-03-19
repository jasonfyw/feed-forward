import { Box, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { Field } from '../../types';
import { MainButton } from '../basicStyled';


interface UserFormProps {
    fields: Field[];
    stateValues: Record<string, string>;
    setStateValues: (r: any) => void;
    handleSubmit: () => void;
    // errors: string;
    submitText: string
}

const UserForm = (props: UserFormProps) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        props.setStateValues((prevState: any) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // const requiredFields = props.fields.filter((field) => field.required !== false);
        // const missingFields = requiredFields.filter((field) => !props.stateValues[field.name]);

        // if (missingFields.length > 0) {
        //     const newErrors = missingFields.reduce(
        //         (errors, field) => ({ ...errors, [field.name]: `${field.label} is required` }),
        //         {}
        //     );
        //     props.setErrors(newErrors);
        //     return;
        // }

        props.handleSubmit()
    };

    return (
        <Box borderRadius="lg">
            <form onSubmit={handleSubmit}>
                <VStack spacing="4">
                    {props.fields.map((field) => (
                        <FormControl key={field.name} isRequired={field.required !== false}>
                            <FormLabel fontWeight={600} fontSize={'14px'} mb={1}>{field.label}</FormLabel>
                            <Input
                                type={field.name}
                                name={field.name}
                                value={props.stateValues[field.name]}
                                onChange={handleChange}
                                bg={'gray.100'}
                                border={'none'}
                                borderRadius={'full'}
                                fontWeight={600}
                            />
                            {/* {props.errors[field.name] && <FormHelperText color="red.500">{props.errors[field.name]}</FormHelperText>} */}
                        </FormControl>
                    ))}
                    <MainButton type="submit">{props.submitText}</MainButton>
                </VStack>
            </form>
        </Box>
    );
}

export default UserForm;