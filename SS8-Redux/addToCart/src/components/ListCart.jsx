
export default function ListCart() {
    return (
        <div className="position-fixed end-0 bg-secondary p-1 d-flex flex-column" style={{ zIndex: 100, height: "calc(100vh - 90px)", width: "500px" }}>
            <h2 className="fw-500 p-3 text-white cart-item">Cart</h2>
            <div className="d-flex flex-column gap-3" style={{ maxHeight: "600px", overflowY: "auto" }}>
                {carts.length === 0 ? (

                    <h1 className="text-white text-center fw-500 p-3 text-white" style={{ height: "50px" }}>Chưa có sản phẩm trong giỏ hàng</h1>
                ) : (
                    carts.map((cart, id) => (
                        <div key={id} className="d-flex gap-3 align-items-center justify-content-between p-2">
                            <img
                                style={{ borderRadius: "50%", width: "40px", height: "40px", backgroundColor: "black" }}

                                alt=""
                            />
                            <div className="text-white"></div>
                            <div className="text-white"></div>
                            <div>
                                <button

                                    className="btn-count"
                                >
                                    +
                                </button>
                                <span className="quantity"></span>
                                <button

                                    className="btn-count"
                                >
                                    -
                                </button>
                                <i className="fa-solid fa-trash i-hover" ></i>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="position-absolute p-3" style={{ bottom: 0, width: "90%" }}>
                <div className="text-white d-flex justify-content-between align-items-center pt-2">
                    <div className="total text-black">
                        Total:
                    </div>
                    <button
                        onClick={handleCloseCart}
                        className="close-btn btn btn-danger"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
