import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {

    const [prdname, setName] = React.useState('');
    const [prdprice, setPrice] = React.useState('');
    const [prdcat, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getPrdDet();
    }, []);

    //Seperate api for getting product details

    const getPrdDet = async () => {
        console.warn(params);
        let result = await fetch(`http://127.0.0.1:5000/updateprd/${params.id}`);
        result = await result.json();
        console.warn(result);
        setName(result.prdname);
        setPrice(result.prdprice);
        setCategory(result.prdcat);
        setCompany(result.company)
    }

    const updateProduct = async () => {
        console.warn(prdname, prdprice, prdcat, company);

        let result = await fetch(`http://127.0.0.1:5000/updateprd/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ prdname, prdprice, prdcat, company }),
            headers: {
                'Content-Type': "application/json"
            }
        });
        result = await result.json();
        console.warn(result)
        navigate('/');

    }

    return (
        <div className="productform">
            <h1>Update Product</h1>
            <input className="inputBox" type="text" placeholder="Enter a Product Name" value={prdname} onChange={(e) => { setName(e.target.value) }} />
            <input className="inputBox" type="text" placeholder="Enter a Price" onChange={(e) => { setPrice(e.target.value) }} value={prdprice} />
            <input className="inputBox" type="text" placeholder="Enter a Category" onChange={(e) => { setCategory(e.target.value) }} value={prdcat} />
            <input className="inputBox" type="text" placeholder="Enter a Company" onChange={(e) => { setCompany(e.target.value) }} value={company} />
            <button className="productbtn" onClick={updateProduct}>Update Product</button>
        </div>
    )
}

export default UpdateProduct;