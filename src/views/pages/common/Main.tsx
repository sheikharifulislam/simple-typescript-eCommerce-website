import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const Main = () => {
    const Home = React.lazy(() => import("../home/Home"));
    return (
        <div className="container mx-auto">
            <Suspense fallback={<>Loading...</>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Suspense>
        </div>
    );
};
