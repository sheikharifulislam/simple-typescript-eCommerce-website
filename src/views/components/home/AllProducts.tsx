import SingleProducts from "../common/SingleProducts";

const AllProducts = ({ products }: { products: any[] }) => {
    return (
        <div className="w-full grid-cols-6">
            {products.map((product) => (
                <SingleProducts product={product} />
            ))}
        </div>
    );
};

export default AllProducts;
