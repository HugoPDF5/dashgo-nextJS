import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

const Input = ({label, name, ...rest}: InputProps) => {
  return (
    <FormControl>
        <FormLabel htmlFor={name}>{label}</FormLabel>
         <ChakraInput name={name} type={label} id= {name} focusBorderColor='pink.500' bgColor='gray.900' variant='filled' _hover={{bgColor:'gray.900'}} size='lg' {...rest}/>
    </FormControl>
  )
}

export default Input