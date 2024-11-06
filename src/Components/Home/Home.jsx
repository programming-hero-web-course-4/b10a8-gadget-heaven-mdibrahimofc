import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import AllProducts from "../AllProducts/AllProducts";
import Product from "../Product/Product";
import ErrorPage from "../ErrorPage/ErrorPage";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [AllData, setAllData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setAllData(data);
      });
  }, []);
  const handleFilter = (categories) => {
    setCategory(categories);
    let filteredProducst = AllData.filter(
      (product) => product.category == categories
    );
    if (categories === "AllProducts") {
      setProducts(AllData);
    } else if (filteredProducst.length === 0) {
      <ErrorPage></ErrorPage>;
    } else {
      setProducts(filteredProducst);
    }
  };

  return (
    <div>
      <div className="mx-8">
        <Helmet>
          <title>Home - Gadget Heaven</title>
          <meta
            name="description"
            content="This is the home page of my React app."
          />
        </Helmet>
        <Banner></Banner>
      </div>
      <AllProducts
        handleFilter={handleFilter}
        products={products}
      ></AllProducts>
    </div>
  );
};

export default Home;
