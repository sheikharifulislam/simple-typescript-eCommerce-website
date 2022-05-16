import logo from "assets/images/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
export const Header = () => {
    return (
        <div className="w-[80%] mx-auto mt-5">
            <div className="header_container flex items-center justify-between">
                <div className="logo">
                    <img
                        src={logo}
                        className="w-36 hover:cursor-pointer"
                        alt=""
                    />
                </div>
                <div className="flex items-center">
                    <input
                        type="search"
                        className="py-1 pl-4 w-[600px] border-2 border-gray-200 focus:outline-none"
                    />
                    <div className="header_icons ml-6 text-2xl hover:cursor-pointer">
                        <AiOutlineShoppingCart />
                    </div>
                </div>
            </div>
        </div>
    );
};
