import React, { useState } from "react";

export default function Header() {

    return (
        <>
            <header
                style={{ zIndex: 101 }}
                className="d-flex position-sticky top-0 align-items-end justify-content-between p-4 bg-warning"
            >
                <div className="d-flex gap-3">
                    <div className="cursor-pointer text-white fw-semibold">
                        Trang chủ
                    </div>
                    <div className="cursor-pointer text-white fw-semibold">
                        Danh sách sản phẩm
                    </div>
                </div>
                <div
                    style={{ cursor: "pointer" }}
                >
                    <i className="fa-solid fa-cart-shopping position-relative fs-4">
                        <span
                            style={{ fontSize: 10 }}
                            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                        >

                        </span>
                    </i>
                </div>
            </header>

        </>
    );
}
