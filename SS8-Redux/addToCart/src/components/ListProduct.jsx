import React from "react";
import productsData from "../data/products.json";

export default function ListProduct() {
    const products = productsData.products;

    return (
        <>
            <h1 className="product-title p-3">Danh sách sản phẩm</h1>
            <div className="d-flex gap-3 p-3 flex-wrap justify-content-center align-items-center product-list">
                {products.map((product) => (
                    <div className="card cart-item" style={{ width: "20%", minWidth: "270px", maxWidth: "270px" }} key={product.id}>
                        <img 
                            src={product.image} 
                            className="card-img-top" 
                            alt={product.product_name} 
                            style={{ width: "100%", height: "250px", objectFit: "cover" }} 
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title card-name">{product.product_name}</h5>
                            <p className="card-text">{product.description}</p>
                            <button className="btn btn-primary">
                                <i className="fa-solid fa-cart-shopping mr-2"></i> Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
