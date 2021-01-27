import React from "react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";

const Product = ({ data }) => {
  const { productId } = useParams();
  const {url, path} = useRouteMatch()
  console.log("day la url", url)
  console.log("day la path", path)
  console.log(useParams())
  const history =  useHistory()
  // Step 3 - hiển thị thông tin tương ứng id product
  // Nhận toàn bộ mảng product
  // Rồi kiếm sản phẩm trong mảng product
  // Bằng id
  // Kiếm ra thì lưu vô biến product
  // Biến product này hiển thị đúng thông tin của id đó
  const product = data.find((p) => p.id === Number(productId));
  let productData;
  const historyTest = () =>{
    // push là thêm vô stack
    // replace là pop rồi thêm vô stack
    // Ứng dụng vd có trang login
    // login thành công qua home
    // thì ta cần replace('/home')
    // Vì ta ko muốn user bấm back lại ra trang login
    history.replace('/')
  }
  if (product) {
    productData = (
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <hr />
        <h4>{product.status}</h4>
        <button onClick={historyTest}></button>
      </div>
    );
  } else {
    productData = <h2>Sorry. Product doesn't exist</h2>;
  }

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "80%",
          margin: "auto",
          background: "#ffffff"
        }}
      >
        {productData}
      </div>
    </div>
  );
};

export default Product;
