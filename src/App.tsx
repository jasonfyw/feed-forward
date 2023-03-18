import * as React from "react"
import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import SignUpVendor from "./pages/SignUpVendor";

export const App = () => (
    <ChakraProvider theme={theme}>
        {/* <ColorModeSwitcher/> */}
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/vendor/signup" element={<SignUpVendor />} />
            </Routes>
        </BrowserRouter>

    </ChakraProvider>
)
