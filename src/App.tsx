import * as React from "react"
import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import SignUpVendor from "./pages/SignUpVendor";
import Logout from "./components/Logout";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { useLocalStorage } from "usehooks-ts";

// const auth = getAuth();

export const App = () => {
    // const [user, setUser] = useLocalStorage('user', {})
    
    // React.useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         // @ts-ignore
    //         setUser(user);
    //         // @ts-ignore
    //         axios.post('http://127.0.0.1:5000/userreg/'.concat(user['uid']), {
    //             // @ts-ignore
    //             'email': user['email']
    //         })
    //     })
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <ChakraProvider theme={theme}>
            {/* <ColorModeSwitcher/> */}
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/vendor/signup" element={<SignUpVendor />} />


                    <Route path="/signout" element={<Logout />} />
                </Routes>
            </BrowserRouter>

        </ChakraProvider>
    )
}
