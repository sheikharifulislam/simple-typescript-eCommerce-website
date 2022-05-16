import { Footer } from "./common/Footer";
import { Header } from "./common/Header";
import { Main } from "./common/Main";

export const Layout = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Main />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};
