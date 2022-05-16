import { HashRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./views/pages/Layout";

function App() {
    return (
        <HashRouter>
            <Layout />
        </HashRouter>
    );
}

export default App;
