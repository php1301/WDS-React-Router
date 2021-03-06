import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { fakeAuth } from "./Login";
// Nhận component, để biết là cần render component nào
const PrivateRoute = ({component: Component, ...rest }) =>{
  const location = useLocation() // sử dụng để lấy trang hiện tại

  // Luồng
  
  // Check xem có đăng nhập thành công chưa
  // Nếu chưa thì cho lại trang login
  // Rồi thì quay lại trang location (trang hiện tại)
  
  return(
    // rest ở đây là exact, component, path,....
    <Route {...rest}>
          {fakeAuth.isAuthenticated ? (
            // Đã login thì cho ra admin
            <Component />
          ) : (
            // Chưa thành công thì cho quay lại trang login
            // Redirect - chính là history.replace, ta ko muốn ng dùng bấm back lại
            // ra 1 số trang cần auth
            // state - ở đây lưu cái gì cũng được
            <Redirect to={{pathname:"/login", state: {
              from: location
            }}}/>
            )}
    </Route>
  )
}

export default PrivateRoute;
