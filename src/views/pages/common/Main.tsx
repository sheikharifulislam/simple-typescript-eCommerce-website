import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "../singleProduct/SingleProduct";

export const Main = () => {
    const Home = React.lazy(() => import("../home/Home"));
    return (
        <div className="container mx-auto">
            <Suspense fallback={<>Loading...</>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                </Routes>
            </Suspense>
        </div>
    );
};
