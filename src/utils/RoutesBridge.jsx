import { Routes, BrowserRouter, Route, Router } from "react-router";
import Home from "../pages/Home";
import Test from "../pages/Test";
import Header from "../components/Header";


export default function RoutesBridge({ children }) {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/tests" element={<Test />}>
                    <Route index element={<Home />} />
                    <Route path=":testName" element={<Test />} />
                </Route>
            </Routes>
            
        </BrowserRouter>
    )
}

