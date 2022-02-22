import Header from "../../components/header";
import Footer from "../../components/footer";
import { get } from "../../api/products";
import { getwcate } from "../../api/products";
import { addToCart } from "../../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Productdetail = {
  async render(id) {
    const resp = await get(id);

    const { data } = resp;

    const rp = await getwcate(data.cateId);
    const spcl = rp.data;
    console.log(spcl);
    return /* html */ `
    <div class="header">${Header.render()}</div>
    <div class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <li>
            <div class="flex items-center">
              <p href="#" class="mr-2 text-sm font-medium text-gray-900">
                Chi tiết sản phẩm: <span>${data.name}</span>
              </p>
            </div>
          </li>
          </li>

        </ol>
      </nav>
  
      <!-- Image gallery -->
      <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 flex">
        <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block  flex-1">
          <img src="${data.img}" width="800">
        </div>
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <h2 class="text-2xl text-gray-900 mb-8">Thông tin sản phẩm</h2>
          <p class="text-2xl text-blue-900">Giá: <span>${
            data.price_km > 0
              ? `${(data.price * data.price_km) / 100}`
              : `${data.price}`
          }</span> VND</p>
  
  
          <form class="mt-10 forma">
            <!-- Colors -->
            <label class="block mb-3">
                    <span class="text-gray-700">Số lượng sản phẩm</span>
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-base
                  " type="number" id="quantt" value="1">

  
            <button id="addc" class="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-id="${
              data.id
            }">Thêm vào giỏ hàng</button>
          </form>
        </div>

      </div>
  
      <!-- Product info -->
      <div class="max-w-2xl mx-auto pt-10  px-4 sm:px-6 lg:max-w-7xl  lg:px-8 ">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            ${data.name}
          </h1>
        </div>
  
        
  
        <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <!-- Description and details -->
          <div>
            <h3 class="text-sm font-medium text-gray-900  mb-2">Mô tả</h3>
  
            <div class="space-y-6">
              <p class="text-base text-gray-900">${data.desc}</p>
            </div>
          </div>
  
          
        </div>
      </div>
    </div>
  </div>

  <div class="max-w-2xl mx-auto py-16 px-4  sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">1 số sản phẩm cùng loại</h2>

            <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            ${spcl.products
              .map((item) => {
                return /*html*/ ` <div class="group relative">
                  <div
                    class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
                  >
                    <img
                      src="${item.img}"
                      
                      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-900">
                        <a href="/products/${
                          item.id
                        }" class="text-sm font-medium text-gray-900">
                          ${item.name}
                        </a>
                      </h3>
                    </div>
                    <p class="text-sm font-medium text-gray-900">
                      ${
                        item.price_km > 0
                          ? `${(item.price * item.price_km) / 100}`
                          : `${item.price}`
                      }
                    </p>
                  </div>
                  <div class="block my-4   justify-between">
                
                    <a href="/products/${item.id}">
                    <button
                    id="addcart"
                      class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-14 border border-blue-500 hover:border-transparent rounded w-full"
                      data-id="${item.id}"
                    >
                      Xem chi tiết
                    </button>
                    </a>
                  </div>
                </div>`;
              })
              .join("")}


              
              <!-- More products... -->
            </div>
          </div>
          <div>${Footer.render()}</div>
    `;
  },

  afterRender() {
    Header.afterRender();
    const btnadd = document.querySelector("#addc");
    console.log(btnadd);
    const soluong = document.querySelector("#quantt");
    const id = btnadd.dataset.id;

    btnadd.addEventListener("click", async function (e) {
      e.preventDefault();

      const { data } = await get(id);
      console.log(soluong.value);
      addToCart(
        {
          ...data,
          quantity: soluong.value ? soluong.value : 1,
        },
        function () {
          toastr.success(`Thêm sản phẩm ${data.name} vào giỏ hàng thành công!`);
        }
      );
    });
  },
};

export default Productdetail;
