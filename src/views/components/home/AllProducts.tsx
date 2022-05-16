import SingleProducts from "../common/SingleProduct";

const AllProducts = ({ products }: { products: IProduct[] }) => {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
            {products.map((product) => (
                <SingleProducts product={product} />
            ))}
        </div>
    );
};

export default AllProducts;
