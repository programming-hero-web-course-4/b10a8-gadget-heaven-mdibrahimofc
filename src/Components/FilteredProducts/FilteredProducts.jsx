import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Product from "../Product/Product";
import AllProducts from "../AllProducts/AllProducts";
import { Link } from "react-router-dom";

const FilteredProducts = ({handleFilter}) => {
  return (
    <div className="flex flex-col gap-4 p-4">
        <button className="btn" onClick={()=> handleFilter('AllProducts') }>All Products</button>
        <button className="btn" onClick={()=> handleFilter('Laptop') }>Laptops</button>
        <button className="btn" onClick={()=> handleFilter('Accessories')} >Accessories</button>
        <button className="btn" onClick={()=> handleFilter('Smartwatch') } >Smart Watches</button>
        <button className="btn" onClick={()=> handleFilter('MacBook')} >MacBook</button>
        <button className="btn" onClick={()=> handleFilter('Phone')} >Iphone</button>
        <Link to='/error' ><button className="btn">Smart TV</button></Link>
    </div>



    // <Tabs>
    //   <TabList>
    //     <Tab><button className="btn bg-[#9538E2]"> Title 1  </button> </Tab>
    //     <Tab>Title 2</Tab>
    //   </TabList>

    //   <TabPanel>
    //     <h2>Any content 1</h2>
    //   </TabPanel>
    //   <TabPanel>
    //     <h2>Any content 2</h2>
    //   </TabPanel>
    // </Tabs>
  );
};

export default FilteredProducts;
