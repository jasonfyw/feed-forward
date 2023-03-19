import * as React from "react"
import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import SignUpVendor from "./pages/vendorFlow/SignUpVendor";
import Logout from "./components/Logout";
import LoginVendor from "./pages/vendorFlow/LoginVendor";
import Vendor from "./pages/vendorFlow/Vendor";

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            {/* <ColorModeSwitcher/> */}
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/vendor/signup" element={<SignUpVendor />} />
                    <Route path="/vendor/login" element={<LoginVendor />} />
                    <Route path="/vendor" element={<Vendor />} />

                    <Route path="/signout" element={<Logout />} />
                </Routes>
            </BrowserRouter>

        </ChakraProvider>
    )
}
