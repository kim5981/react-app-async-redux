import React from "react";

const ProductPage = props => {
    return (
        <>
        {/** imported nav bar would go here */}
        <div className="photo-wrap">
            <img alt="product photo"/>
            <button>buy now</button>
        </div>
        <div className="product-info">
            <span id="product-name">
                <h2> Product Name </h2>
                <h4> Product Brand </h4>
                <p>price sign + price </p>
            </span>
            <span id="product-description">
                <p>description here</p>
            </span>

        </div>
        </>
    )
}

export default ProductPage;