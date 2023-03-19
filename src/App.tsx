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
import AddItemDelivery from "./pages/vendorFlow/AddItemDelivery";
import { useLocalStorage } from "usehooks-ts";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import SignUpCustomer from "./pages/customerFlow/SignUpCustomer";

export const App = () => {
    const [, setChakraUIColorMode] = useLocalStorage<string>('chakra-ui-color-mode', '')
    React.useEffect(() => {
        setChakraUIColorMode('light')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ChakraProvider theme={theme}>
            {/* <ColorModeSwitcher/> */}
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/vendor/signup" element={<SignUpVendor />} />
                    <Route path="/vendor/login" element={<LoginVendor />} />
                    <Route path="/vendor/add" element={<AddItem />} />
                    <Route path="/vendor" element={<Vendor />} />
                    <Route path="/vendor/itemsummary" element={<AddItemSummary />} />
                    <Route path="/vendor/itemsummary/delivery" element={<AddItemDelivery />} />

                    <Route path="/account" element={<Account />} />

                    <Route path="/customer/signup" element={<SignUpCustomer />} />

                    <Route path="/signout" element={<Logout />} />
                </Routes>
                <Navbar />
            </BrowserRouter>

        </ChakraProvider>
    )
}
