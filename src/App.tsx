import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
  Heading,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const App = () => (
    <ChakraProvider theme={theme}>
        <ColorModeSwitcher/>
        <Box textAlign="center" fontSize="xl">
            <Heading>Hello world</Heading>
        </Box>
    </ChakraProvider>
)
