import React from "react";
import Thelist from "./data";
import Cards from "./Cards";


const JdShoes = ({ handleClick }) => {
    return (
        <div>
            <section className="sec1">
                {Thelist.map((item) => (
                    <Cards key={item.id} item={item} handleClick={handleClick} />
                ))}
            </section>
        </div>
    )

};

export default JdShoes;