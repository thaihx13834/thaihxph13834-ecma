import { reRender } from "../utils";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { getAll } from "../api/categorys";
const Header = {
  render() {
    return /*html*/ `
    
    <div class="bg-white ">
  
    <header class="relative bg-white">
      <nav aria-label="Top" class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class=" ">
          <div class="h-16 flex items-center">
            <button type="button" class="bg-white p-2 rounded-md text-gray-400 lg:hidden">
              <span class="sr-only">Open menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
  
            <div class="ml-4 flex lg:ml-0">
              <a href="#">

                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="">
              </a>
            </div>
  
            <div class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="h-full flex space-x-8">
                <div class="flex">
                  <div class="relative flex">
                    <a href="/" type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                      Trang chủ
                    </a>
                  </div>
  
                </div>
  
                <div class="flex">
                

                    <div class="dropdown border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px">
                      <a class="dropbtn " href="/products">Sản phẩm</a>
                      <div class="dropdown-content rounded menu">
                      </div>
                    </div>
                  
                  
                </div>


                <div class="flex">
                  <div class="relative flex">
                    <a href="/about" type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                      Giới thiệu
                    </a>
                  </div>
                  <div class="absolute top-full inset-x-0 text-sm text-gray-500">
                    <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
  
                  </div>
                </div>

                <div class="flex">
                  <div class="relative flex">
                    <a href="/contact" type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                      Liên hệ
                    </a>
                  </div>

                  <div class="absolute top-full inset-x-0 text-sm text-gray-500">
                    <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
  
                  </div>
                </div>
                
              </div>
            </div>


  
            <div class="ml-auto flex items-center ">
                                      <!-- Search -->
                                      <div class="flex lg:ml-6 mr-4">
                                        <form class="form-search">
                                            <input type="text" class=" relative shadow appearance-none border rounded w-full py-1 px-3 w-19 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-based inp-search" placeholder="Tìm kiếm"/>
                                            <button  class="subm hidden"></button>
                                        </form>
                                        <!-- Heroicon name: outline/search -->
                                        
                                    </div>
              ${
                localStorage.getItem("user")
                  ? `<div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6   ">
                  <button id="dropButton"  class="text-gray-700 relative  font-normal rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">Xin chào <span class="ml-2 font-medium">${
                    JSON.parse(localStorage.getItem("user")).email
                  }</span></button>

                  <!-- Dropdown menu -->
                  <div id="dropdownUser" class="hidden z-1010 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-white-700 z-10 absolute  right-0  "
                  style="bottom: -145px; right: 212px;">
                      <ul class="py-1" aria-labelledby="dropdownButton">
                        <li>
                          <a href="/profile" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-700 dark:hover:text-white">Thông tin tài khoản</a>
                        </li>

                        <li>
                          <a href="/products?_sapxep=true" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-700 dark:hover:text-white">Đơn hàng</a>
                        </li>

                        
                        <li>
                          <a id="logout" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-700 dark:hover:text-white">Đăng xuất</a>
                        </li>
                      </ul>
                  </div>
            </div>`
                  : `<div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            <a href="/signin" class="text-sm font-medium text-gray-700 hover:text-gray-800">Đăng nhập</a>
            <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
            <a href="/signup" class="text-sm font-medium text-gray-700 hover:text-gray-800">Tạo tài khoản</a>
          </div>`
              }
              


  
              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-6">
                <a href="/cart" class="group -m-2 p-2 flex items-center">
                  <!-- Heroicon name: outline/shopping-bag -->
                  <svg class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                 
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
      `;
  },

  async afterRender() {
    const email = document.querySelector("#email");
    const logout = document.querySelector("#logout");
    const formSearch = document.querySelector(".form-search");
    const inp = document.querySelector(".inp-search");
    console.log(formSearch);

    const btnFilter = document.querySelector("#dropButton");

    btnFilter.onclick = () => {
      document.querySelector("#dropdownUser ").classList.toggle("act");
    };

    if (email) {
      console.log(JSON.parse(localStorage.getItem("user")).email);
      email.innerHTML = JSON.parse(localStorage.getItem("user")).email;
    }

    if (logout) {
      logout.addEventListener("click", function () {
        localStorage.removeItem("user");
        reRender(Header, ".header");
        toastr.success("Log out thanh cong");
      });
    }

    const menu = document.querySelector(".menu");
    const res = await getAll();
    console.log(res);
    const { data } = res;

    data
      .map((item) => {
        menu.innerHTML += ` <a href="/cates/${item.id}?_embed=products" >${item.name}</a>`;
      })
      .join("");

    formSearch.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = inp.value;
      window.location.href = `/products?name_like=${val}`;
    });
  },
};
export default Header;
