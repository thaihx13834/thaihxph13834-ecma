import Banner from "../../components/banner";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { getlistNew } from "../../api/products";
import { getAll, get } from "../../api/products";
import { addToCart } from "../../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Homepage = {
  async render() {
    const resp = await getlistNew();
    const { data } = resp;

    const allpr = await getAll();
    const dt = allpr.data;
    const km = dt.filter(
      (item) => Number(item.price_km) > 0 && item.price_km != ""
    );
    return /*html*/ `
        <div class="header">${Header.render()}</div>
        <div class="banner">${Banner.render()}</div>
        <div class="bg-white">

          <div class="max-w-2xl mx-auto py-16 px-4  sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Sản phẩm mới nhất</h2>

            <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            ${data
              .map((item) => {
                return /*html*/ ` <div class="group relative">
                <div
                  class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
                >
                  <img
                    src="${item.img}"
                    alt=""
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
                <div class="block my-4 flex justify-between">
                  <a href="/products/${item.id}">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded h-12 w-14"
                  >
                    <i class="fas fa-eye"></i>
                  </button>
                  </a>
                  <button
                  id="addcart"
                    class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-14 border border-blue-500 hover:border-transparent rounded"
                    data-id="${item.id}"
                  >
                    Đặt hàng ngay
                  </button>
                </div>
              </div>`;
              })
              .join("")}

              
              <!-- More products... -->
            </div>


            
          </div>


          <div class="max-w-2xl mx-auto py-16 px-4  sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Sản phẩm khuyến mại</h2>

            <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            ${km
              .map((item) => {
                return /*html*/ ` <div class="group relative">
                <div
                  class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
                >
                  <img
                    src="${item.img}"
                    alt=""
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
                <div class="block my-4 flex justify-between">
                  <a href="/products/${item.id}">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded h-12 w-14"
                  >
                    <i class="fas fa-eye"></i>
                  </button>
                  </a>
                  <button
                  id="addcart"
                    class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-14 border border-blue-500 hover:border-transparent rounded"
                    data-id="${item.id}"
                  >
                    Đặt hàng ngay
                  </button>
                </div>
              </div>`;
              })
              .join("")}

              
              <!-- More products... -->
            </div>


            
          </div>
        </div>

      <div id="footer">${Footer.render()}</div>
        `;
  },

  afterRender() {
    Header.afterRender();
    Banner.afterRender();
    const btnadd = document.querySelectorAll("#addcart");
    btnadd.forEach((btn) => {
      btn.addEventListener("click", async function () {
        const id = btn.dataset.id;
        const { data } = await get(id);
        console.log(data);
        addToCart(
          {
            ...data,
            quantity: 1,
          },
          function () {
            toastr.success(
              `Thêm sản phẩm ${data.name} vào giỏ hàng thành công!`
            );
          }
        );
      });
    });
  },
};
export default Homepage;
