import React, {useEffect, useState} from "react";
import Cards from "./Cards";
import {getProducts} from "../../api/ProductApi";


const JdShoes = ({ handleClick }) => {
//export default function JdShoes({handleClick}) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const promise = getProducts();
        promise.then(response => {
            const products = response.data;
            setProducts(products);
            console.log(products);
        });

    }, []);
    //return [products];


    // const handleClick = (item) => {
    //
    // }

    return (
        <div>

            <section className="sec1">
                {products.map((product, index) => (
                    <Cards key={product.id} item={product} handleClick={handleClick}/>
                ))}
            </section>
        </div>
    )
}

export default JdShoes;







