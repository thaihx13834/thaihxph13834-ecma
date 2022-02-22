import Header from "../../components/header";
import Footer from "../../components/footer";
import { getAll, getw } from "../../api/products";
import { get } from "../../api/products";
import { getAllc } from "../../api/categorys";
import { addToCart } from "../../utils/cart";
import { getwlike } from "../../api/products";
import { getlistsapxep } from "../../api/products";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const ProductPage = {
  async render(id) {
    const repp = await getAllc();
    const dt = repp.data;
    console.log(dt);

    let resp, data;
    const urlStr = window.location.href;
    console.log(urlStr);
    var url = new URL(urlStr);
    var _embed = url.searchParams.get("_embed");
    var name_like = url.searchParams.get("name_like");
    var spkm = url.searchParams.get("_spkm");
    var sapxep = url.searchParams.get("_sapxep");
    var giatc = url.searchParams.get("_giatc");
    var giact = url.searchParams.get("_giact");

    var newa = [];

    if (_embed) {
      resp = await getw(id);
      console.log(resp);
      data = resp.data.products;
    } else if (name_like) {
      resp = await getwlike(name_like);
      data = resp.data;
    } else if (spkm) {
      resp = await getAll();
      const dt = resp.data;
      data = dt.filter(
        (item) => Number(item.price_km) > 0 && item.price_km != ""
      );
    } else if (sapxep) {
      resp = await getlistsapxep();
      data = resp.data;
    } else if (giatc) {
      resp = await getAll();
      const dt = resp.data;
      console.log(dt);
      dt.forEach((item) => {
        console.log(item);
        const gia =
          Number(item.price_km) > 0
            ? (Number(item.price_km) * item.price) / 100
            : item.price;
        item.pr = gia;
        newa.push(item);
      });

      data = newa.sort(function (a, b) {
        return a.pr - b.pr;
      });
    } else if (giact) {
      resp = await getAll();
      const dt = resp.data;
      console.log(dt);
      dt.forEach((item) => {
        console.log(item);
        const gia =
          Number(item.price_km) > 0
            ? (Number(item.price_km) * item.price) / 100
            : item.price;
        item.pr = gia;
        newa.push(item);
      });

      data = newa.sort(function (a, b) {
        return b.pr - a.pr;
      });
    } else {
      resp = await getAll();
      data = resp.data;
    }

    console.log(data);
    return /* html */ `
      <div class="header">${Header.render()}</div>
      <div class="bg-white">
      <div>
        <div
          class="fixed inset-0 flex z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            class="fixed inset-0 bg-black bg-opacity-25"
            aria-hidden="true"
          ></div>
          <div
            class="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto"
          >
            <div class="px-4 flex items-center justify-between">
              <h2 class="text-lg font-medium text-gray-900">Lọc</h2>
              <button
                type="button"
                class="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
              >
                <span class="sr-only">Đóng</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <!-- Filters -->
            <form class="mt-4 border-t border-gray-200">


                <!-- Filter section, show/hide based on section state. -->
                <div class="pt-6" id="filter-section-mobile-1">
                  <div class="space-y-6">
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-category-0"
                        name="category[]"
                        value="new-arrivals"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-category-0"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Mới nhất
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="filter-mobile-category-1"
                        name="category[]"
                        value="sale"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-category-1"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Đang giảm giá
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="border-t border-gray-200 px-4 py-6">
                <h3 class="-mx-2 -my-3 flow-root">
                  <!-- Expand/collapse section button -->
                  <button
                    type="button"
                    class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-mobile-2"
                    aria-expanded="false"
                  >
                    <span class="font-medium text-gray-900"> Cỡ </span>
                    
                  </button>
                </h3>
                <!-- Filter section, show/hide based on section state. -->
              </div>
            </form>
          </div>
        </div>

        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            class="relative  flex items-baseline justify-between pt-12 pb-6 "
          >
            <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
              Shop Thaix
            </h1>

            <div class="flex items-center">
              <div class="relative inline-block text-left">
                 
              <button id="dropdownButton"  class="text-gray-700  font-normal rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">Sắp xếp <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

              <!-- Dropdown menu -->
              <div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 z-1000 absolute mt-4 right-0 ">
                  <ul class="py-1" aria-labelledby="dropdownButton">
                    <li>
                      <a href="/products?_spkm=true" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sản phẩm khuyến mại</a>
                    </li>
                    <li>
                      <a href="/products?_sapxep=true" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Tên A - Z</a>
                    </li>
                    <li>
                      <a href="/products?_giatc=true" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Giá: Thấp  đến Cao</a>
                    </li>
                    <li>
                      <a href="/products?_giact=true" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Giá: Cao đến Thấp</a>
                    </li>
                  </ul>
              </div>

               
              </div>


            </div>
          </div>

          <section aria-labelledby="products-heading" class="pt-6 pb-24">
            <h2 id="products-heading" class="sr-only">Sản phẩm</h2>

            <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10 ">
              <!-- Filters -->
              <form class="hidden lg:block w-40">
              <span class="font-medium text-gray-900 mb-7 block">
              Danh mục sản phẩm
            </span>
                <ul
                  role="list"
                  class="list-cate text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200"
                >
                ${dt
                  .map((item) => {
                    return `<li>
                            <a href="/cates/${item.id}?_embed=products">${item.name}</a>
                         </li>`;
                  })
                  .join("")}

                </ul>

              </form>

              <!-- Product grid -->
              <div class="lg:col-span-3">
                <!-- Replace with your content -->
                <div
                  class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
                >
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

                
                  
                  <!-- More products... -->
                </div>
                <!-- /End replace -->
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
    <div>${Footer.render()}</div>
      `;
  },

  afterRender() {
    Header.afterRender();
    const btnadd = document.querySelectorAll("#addcart");
    const btnFilter = document.querySelector("#dropdownButton");

    btnFilter.onclick = () => {
      document.querySelector("#dropdown ").classList.toggle("act");
    };

    console.log(btnadd);
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

export default ProductPage;
