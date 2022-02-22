import Header from "../../components/header";
import Footer from "../../components/footer";
import { reRender } from "../../utils";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItemInCart,
} from "../../utils/cart";
const Cart = {
  render() {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    const soluong = cart.length;
    console.log(soluong);
    let tong = 0;
    return /* html */ `
    <div class="header">${Header.render()}</div>
      <div class="bg-gray-100">
      <div class="container mx-auto mt-10">
      <div class="flex shadow-md my-10">
        <div class="w-3/4 bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Giỏ hàng</h1>
            <h2 class="font-semibold text-2xl">${soluong} món hàng</h2>
          </div>
          <div class="flex mt-10 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Chi tiết sản phẩm</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Số lượng</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Giá</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Thành tiền</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Xóa</h3>
          </div>
          ${cart
            .map((item) => {
              const gia =
                Number(item.price_km) > 0
                  ? (Number(item.price) * Number(item.price_km)) / 100
                  : Number(item.price);

              const thanhtien = gia * item.quantity;

              tong += thanhtien;
              console.log(thanhtien);
              return /*html*/ `
              <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5"> <!-- product -->
              <div class="w-28">
                <img class="h-24" src="${item.img}" alt="">
              </div>
              <div class="flex flex-col justify-around ml-6 flex-grow">
                <span class="font-bold text-sm">${item.name}</span>
              </div>
            </div>
            <div class="flex justify-center w-1/5">
            <button data-id="${item.id}" class="btn btn-decrease">
            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
            </button>
              
  
              <p class="mx-2 border text-center w-8" type="text" >
              ${item.quantity}</p>
              <button data-id="${item.id}" class="btn btn-increase">
              <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
              </button>
              
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">${gia} VND</span>
            <span class="text-center w-1/5 font-semibold text-sm">${thanhtien} VND</span>
            <button  data-id=${item.id} class="text-center w-1/5 font-semibold text-sm btn btn-remove"><i class="fa-solid fa-trash"></i></button>

          </div>
              `;
            })
            .join("")}

  
          <a href="/" class="flex font-semibold text-indigo-600 text-sm mt-10">
        
            <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
            Tiếp tục mua sắm
          </a>
        </div>
  
        <div id="summary" class="w-1/4 px-8 py-10">
          <h1 class="font-semibold text-2xl border-b pb-8">Tổng đơn hàng: </h1>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">Số sản phẩm: ${soluong}</span>
            <span class="font-semibold text-sm">${tong} VND</span>
            
          </div>
          <div>
            <label class="font-medium inline-block mb-3 text-sm uppercase">Phí vận chuyển</label>
            <p value="50000">Phí vận chuyển - 50.000 VNĐ</p>
          </div>
          <div class="border-t mt-8">
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Tổng thành tiền</span>
              <span>${tong + 50000} VND</span>
            </div>
            <a href="/checkout"class="block text-center bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Thanh toán</a>
          </div>
        </div>
  
      </div>
    </div>
      </div>
      <div>${Footer.render()}</div>   
          `;
  },
  afterRender() {
    Header.afterRender();
    const btns = document.querySelectorAll(".btn");
    console.log(btns);
    btns.forEach((button) => {
      button.addEventListener("click", function () {
        const id = button.dataset.id;
        if (button.classList.contains("btn-increase")) {
          increaseQuantity(id, () => {
            reRender(Cart, ".container");
          });
        } else if (button.classList.contains("btn-decrease")) {
          decreaseQuantity(id, () => {
            reRender(Cart, ".container");
          });
        } else {
          removeItemInCart(id, () => {
            reRender(Cart, ".container");
          });
        }
      });
    });
  },
};

export default Cart;
