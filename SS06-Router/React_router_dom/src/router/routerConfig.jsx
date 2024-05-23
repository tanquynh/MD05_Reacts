import React from "react";
import IndexHome from "../pages/user/IndexHome";
import OutletHome from "../pages/user/OutletHome";
import IndexAbout from "../pages/user/IndexAbout";
import IndexContact from "../pages/user/IndexContact";
import IndexProduct from "../pages/user/IndexProduct";

const routerConfig = [
    {
        path: "/",
        element: <IndexHome />,
        children: [ // Đổi 'Children' thành 'children'
            {
                path: "",
                element: <OutletHome />
            },
            {
                path: "about", // Đường dẫn con không cần '/'
                element: <IndexAbout />
            },
            {
                path: "contact", // Đường dẫn con không cần '/'
                element: <IndexContact />
            },
            {
                path: "products", // Đường dẫn con không cần '/'
                element: <IndexProduct />
            }
        ]
    }
];

export default routerConfig;
