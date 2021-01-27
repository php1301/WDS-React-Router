import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const productData = [
    {
      id: 1,
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available"
    },
    {
      id: 2,
      name: "Stylised Flip Flops and Slippers",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Out of Stock"
    },
    {
      id: 3,
      name: "ADIDAS Adispree Running Shoes",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available"
    },
    {
      id: 4,
      name: "ADIDAS Mid Sneakers",
      description:
        "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      status: "Out of Stock"
    }
  ];

  const { url } = useRouteMatch();
  console.log(useRouteMatch())
  /* Create an array of `<li>` items for each product */
  // Nhận danh sách products
  // duyệt qua từng product
  // Tạo thẻ Link
  // Link này có path là url, rồi biến chạy là product.id (id tăng dần 1, 2, 3, 4)
  const linkList = productData.map((product) => {
    return (
      <li key={product.id}>
        {/* Step 2 - link */}
        <Link to={`${url}/${product.id}`}>{product.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <div style={{ display: "block", justifyContent: "space-between" }}>
        <div
          style={{
            float: "left",
            padding: "10px",
            width: "30%",
            background: "#f0f0f0",
            marginLeft: "auto"
          }}
        >
          <h3>Products</h3>
          <ul style={{ listStyleType: "none", padding: 0, fontSize: "15px" }}>
            {linkList}
          </ul>
        </div>
      </div>
      {/* Step 1 tạo */}
      <Route path={`${url}/:productId`}>
          <Product data={productData}/>
      </Route>
    
    </div>
  );
};

export default Products;
