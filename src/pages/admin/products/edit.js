import { edit, get } from "../../../api/products";
import SidebarAdmin from "../../../components/sidebarAdmin";
import { getAll } from "../../../api/categorys";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import axios from "axios";
const ProductEditPage = {
  async render(id) {
    const res = await get(id);
    const data = res.data;

    const resss = await getAll();
    const loaiHang = resss.data;

    return /* html */ `
          <div>${SidebarAdmin.render()}</div>
          <div class="relative md:ml-80 md:mr-20">
               <div class=" py-10 flex items-center justify-between">
                  <h1 class="font-bold text-2xl">Sửa sản phẩm</h1>
      
                        <a href="/admin/products/add"class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <!-- Heroicon name: solid/check -->
                          <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                          </svg>
                          Thêm mới  
                        </a>
               </div>
          </div>
          <div class="flex flex-col py-6 md:ml-80 md:mr-20">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-4">
              <form action="" id="form-add">
                <div
                  class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
                >
                  <label class="block mb-5">
                    <span class="text-gray-700">Tên sản phẩm</span>
                  </label>
                  <input class="product-name shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Mời nhập tên sản phẩm" value="${
                    data.name
                  }">
                </div>
  
                <div
                  class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-4"
                >
                  <label class="block mb-5">
                    <span class="text-gray-700">Mô tả</span>
                  </label>
                  <input class="product-desc shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Mô tả" value="${
                    data.desc
                  }">
                </div>
  
                <div
                  class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-4"
                >
                  <label class="block mb-5">
                    <span class="text-gray-700">Giá sản phẩm</span>
                  </label>
                  <input class="product-price shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Giá sản phẩm" value="${
                    data.price
                  }">
                </div>
  
                <div
                  class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-4"
                >
                  <label class="block mb-5">
                    <span class="text-gray-700">Khuyến mại(%)</span>
                  </label>
                  <input class="product-price-km shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Phần trăm khuyến mại" value="${
                    data.price_km
                  }">
                </div>

                <div
                  class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-4"
                >
                  <img src="${data.img}" class="max-w-full"  id="ig"/>
                </div>

                <div
                  class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-4"
                >
                  <label class="block mb-3">
                    <span class="text-gray-700">Upload ảnh</span>
                  </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-base
                  " type="file" id="img-product">
                </div>
  
                <div
                  class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-4"
                >
                  <label class="block mb-3">
                    <span class="text-gray-700">Loại hàng</span>
                  </label>
                  <div class=" align-middle inline-block w-full  mt-4">
                  <select class="loaihang block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    ${loaiHang
                      .map((item) => {
                        return item.id == data.categorysId
                          ? `<option value="${item.id}" selected>${item.name}</option>`
                          : `<option value="${item.id}">${item.name}</option>`;
                      })
                      .join("")}
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                </div>
              
  
  
                
                <div
                  class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-7"
                >
                  <button
                    class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Lưu sửa
                  </button>
                </div>
              </form>
            </div>
          </div>
  
          `;
  },

  afterRender(id) {
    var stt = true;
    const formAdd = document.querySelector("#form-add");
    const CLOUDINARY_PRESET = "fl3e89zr";
    const CLOUDINARY_API_URL =
      "https://api.cloudinary.com/v1_1/thaicodejj/image/upload";
    formAdd.addEventListener("submit", async (e) => {
      e.preventDefault();
      const file = document.querySelector("#img-product").files[0];
      if (file == undefined) {
        const image = document.querySelector("#ig").src;
        edit({
          id: id,
          name: document.querySelector(".product-name").value,
          desc: document.querySelector(".product-desc").value,
          img: image,
          price: document.querySelector(".product-price").value,
          price_km: document.querySelector(".product-price-km").value,
          cateId: Number(document.querySelector(".loaihang").value),
        })
          .then(() => {
            toastr.success("Bạn đã thêm thành công 1 loại hàng!");
          })
          .then(() => {
            window.location.href = "/admin/products";
          });
      } else {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_PRESET);

        const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
          headers: {
            "Content-Type": "application/form-data",
          },
        });

        edit({
          id: id,
          name: document.querySelector(".product-name").value,
          img: data.url,
          desc: document.querySelector(".product-desc").value,
          price: Number(document.querySelector(".product-price").value),
          price_km: document.querySelector(".product-price-km").value,
          cateId: document.querySelector(".loaihang").value,
        })
          .then(() => {
            toastr.success("Bạn đã thêm thành công 1 loại hàng!");
          })
          .then(() => {
            window.location.href = "/admin/products";
          });
      }
    });
  },
};
export default ProductEditPage;
