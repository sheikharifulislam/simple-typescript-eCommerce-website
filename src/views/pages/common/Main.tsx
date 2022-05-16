import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../home/Home";

export const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};
