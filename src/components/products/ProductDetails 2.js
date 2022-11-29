import React, { useState, useEffect } from "react";
import {getProduct} from "../../api/ProductApi";
import {useParams} from "react-router-dom";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const promise = getProduct(id);
        promise.then(response => {
            const product = response.data;
            setProduct(product);
            console.log('productdetails',product.id);
        });
    }, [id]);

    return (
        <div>
            <h1>Product Details</h1>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.imageLink} alt=""/>
        </div>
    )

}
