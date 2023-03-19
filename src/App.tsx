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
import AddItem from "./pages/vendorFlow/AddItem";
import AddItemSummary from "./pages/vendorFlow/AddItemSummary";

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            {/* <ColorModeSwitcher/> */}
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/vendor/signup" element={<SignUpVendor />} />
                    <Route path="/vendor/login" element={<LoginVendor />} />
                    <Route path="/vendor/itemsummary" element={<AddItemSummary />} />
                    <Route path="/vendor/add" element={<AddItem />} />
                    <Route path="/vendor" element={<Vendor />} />

                    <Route path="/signout" element={<Logout />} />
                </Routes>
            </BrowserRouter>

        </ChakraProvider>
    )
}
