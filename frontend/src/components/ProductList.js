import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const ProductList=()=>{

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
    },[]);



    const getProducts = async () => {

        let result = await fetch('http://127.0.0.1:5000/showproducts',{
            headers:{
                authorisation: JSON.parse(localStorage.getItem("token"))
            }
        });
        result = await result.json();
        setProducts(result);

    }

    const delProduct=async (id)=>{
        let result = await fetch(`http://127.0.0.1:5000/delproduct/${id}`,{
            method: "Delete"
        });
        result = await result.json();
        if(result)
        {
            //alert('Product Deleted Successfully!!');
            getProducts();
        }
        console.warn(id)
    }

    const searchProduct = async (event) => {
        //console.warn(event.target.value);
        let getKey = event.target.value;
        if(getKey){
        let result = await fetch(`http://127.0.0.1:5000/searchprd/${getKey}`);
        result = await result.json();
        if(result)
        {
            setProducts(result);
        }
        }
        else{
            getProducts();
        }
    }
    //console.warn({"products":products});

    return(
        <div className='product-list'>
            <h3>Products List</h3>
            <input type='text' className='searchBox' placeholder='Search Product' onChange={searchProduct} />
            <ul>
                <li>SrNo.</li>
                <li>Product Name</li>
                <li>Category</li>
                <li>Price</li>
                <li>Action</li>
            </ul>
            {
                products.length >0 ? products.map((item,index)=>

                <ul key={item._id}>
                    <li>{index+1}</li>
                    <li>{item.prdname}</li>
                    <li>{item.prdcat}</li>
                    <li>{item.prdprice}</li>
                    <li>
                        <button onClick={()=>delProduct(item._id)}>Delete</button>
                        <Link to={'/updateprd/'+item._id}>Update</Link>
                    </li>
                </ul>

                )
                : <h1>No Products Found</h1>
            }
        </div>
    );

}

export default ProductList;