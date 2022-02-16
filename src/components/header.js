import { reRender } from "../utils";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const Header = {
  render() {
    return /*html*/ `
         <div class="header-top">
          <a href=""><img src="https://picsum.photos/120/50" alt="" /></a>
        </div>
        <div class="header-main">
          <div>
            <ul class="menu">
              <li><a href="/">Trang chủ</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/signin">Chuong trình đào tạo</a></li>
              <li><a href="/signup">Góc sinh viên</a></li>
              <li><a href="/admin/dashboard">Tuyển dụng</a></li>
            </ul>
          </div>

          ${
            localStorage.getItem("user")
              ? `<div class="form-search">
          <ul class="flex">
          <li class="flex items-center">Xin chao <a href="/" class="block px-4 py-3 hover:bg-blue-800 hover:text-white" id="email"></a></li>
          <li class="flex items-center"><a class="block px-4 py-3 hover:bg-blue-800 hover:text-white" id="logout">Logout</a></li>
      </ul>
          </div>`
              : ""
          }
        </div>
      `;
  },

  afterRender() {
    const email = document.querySelector("#email");
    const logout = document.querySelector("#logout");
    if (email) {
      console.log(JSON.parse(localStorage.getItem("user")).email);
      email.innerHTML = JSON.parse(localStorage.getItem("user")).email;
    }

    if (logout) {
      logout.addEventListener("click", function () {
        localStorage.removeItem("user");
        reRender(Header, "#header");
        toastr.success("Log out thanh cong");
      });
    }
  },
};
export default Header;
