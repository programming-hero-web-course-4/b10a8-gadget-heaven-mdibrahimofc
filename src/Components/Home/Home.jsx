import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import AllProducts from '../AllProducts/AllProducts';
import Product from '../Product/Product';
import ErrorPage from '../ErrorPage/ErrorPage';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('')
    const [AllData, setAllData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setAllData(data)
        })
    },[])
    console.log(AllData);
    const handleFilter = (categories) => {
        console.log(categories);
        setCategory(categories)
        console.log(category);
        let filteredProducst = AllData.filter((product) => product.category == categories)
        console.log(filteredProducst);
        console.log(products, category);
        if(categories === 'AllProducts'){
            setProducts(AllData)
        }
        else if(filteredProducst.length === 0){
            <ErrorPage></ErrorPage>
        }else{
            setProducts(filteredProducst)
        }
    }


    return (
        <div>
            <div className='mx-8'>
            <Banner></Banner>
            </div>
            <AllProducts handleFilter={handleFilter} products={products}></AllProducts>
        </div>
    );
};

export default Home;