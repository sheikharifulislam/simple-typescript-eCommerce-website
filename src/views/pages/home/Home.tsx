import useApi from "hooks/useApi";
import ProductService from "services/Product.service";
import HeaderSlider from "views/components/custom/HeaderSlider";
import AllProducts from "views/components/home/AllProducts";

const Home = () => {
    const { data: products } = useApi<IProduct[]>(
        ProductService.getAllProducts
    );

    return (
        <main>
            <div className="py-20">
                <HeaderSlider />;
            </div>
            <div className="all_products">
                {products && <AllProducts products={products} />}
            </div>
        </main>
    );
};

export default Home;
