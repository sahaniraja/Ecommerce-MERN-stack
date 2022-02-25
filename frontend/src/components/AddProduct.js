import React from 'react';

const AddProduct = () => {

    const [prdname, setName] = React.useState('');
    const [prdprice, setPrice] = React.useState('');
    const [prdcat, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [errormsg, setError] = React.useState(false);

    const addProduct = async () => {

        console.warn(!prdname);
        if(!prdname || !prdprice || !prdcat || !company)
        {
            setError(true);
            return false;
        }

        console.warn(prdname, prdprice, prdcat, company);
        const userid = JSON.parse(localStorage.getItem('usrdata'))._id;
        console.warn(userid);
        let sendData = await fetch("http://127.0.0.1:5000/addproduct", {
            method: 'post',
            body: JSON.stringify({prdname,prdprice,prdcat,company,userid}),
            headers: {
                "Content-Type": "application/json"
            },
        });
        sendData = await sendData.json();
        console.warn(sendData);
    }

    return (
        <div className="productform">
            <h1>Add Product</h1>
            <input className="inputBox" type="text" placeholder="Enter a Product Name" value={prdname} onChange={(e) => { setName(e.target.value) }} />
            {errormsg && !prdname && <span className='invalidata'>Enter a valid name</span>}
            <input className="inputBox" type="text" placeholder="Enter a Price" onChange={(e) => { setPrice(e.target.value) }} value={prdprice} />
            {errormsg && !prdprice && <span className='invalidata'>Enter a price</span>}
            <input className="inputBox" type="text" placeholder="Enter a Category" onChange={(e) => { setCategory(e.target.value)} } value={prdcat} />
            {errormsg && !prdcat && <span className='invalidata'>Enter a valid category</span>}
            <input className="inputBox" type="text" placeholder="Enter a Company" onChange={(e) => { setCompany(e.target.value)} } value={company} />
            {errormsg && !company && <span className='invalidata'>Enter a valid company</span>}
            <button className="productbtn" onClick={addProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct;