import { useNavigate } from "react-router-dom";
import SingleProducts from "../common/SingleProduct";

const AllProducts = ({ products }: { products: IProduct[] }) => {
    const navigate = useNavigate();
    const onClick = (id: string | undefined) => {
        navigate(`/product/${id}`, {
            replace: true,
        });
    };

    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
            {products.map((product) => (
                <SingleProducts product={product} onclick={onClick} />
            ))}
        </div>
    );
};

export default AllProducts;
