import "./Landing.css";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import { Button } from "antd";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../components/Others/StoreContext";
import { Link } from "react-router-dom";

const Landing = () => {
    const { showComponents } = useContext(StoreContext)

    useEffect(() => {
        showComponents[1](true);
    });
    

    return (
        <section className="landing-container">
            <HeroCarousel />
            <div className="banner-divide-container">
                <div className="back" style={{backgroundColor: 'black'}} />
                <div className="front" style={{backgroundColor: 'red'}} >
                    <h2 className="banner-content">Wholesale Fasion Accessories</h2>
                </div>
            </div>
            <ProductSlider />
            <div className="banner-divide-container">
                <div className="back" style={{backgroundColor: 'red'}} />
                <div className="front" style={{backgroundColor: 'black'}} >
                    <h2 className="banner-content">Large Selection of Products</h2>
                </div>
            </div>
            <CategoryGrid />
            <div className="catalog-button-container">
                <Link to="/catalog"><Button type="primary"><b>View Catalog</b></Button></Link>
            </div>
        </section>
    );
};

export default Landing
