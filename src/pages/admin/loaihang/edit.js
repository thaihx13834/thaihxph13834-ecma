import { get, edit } from "../../../api/categorys";
import SidebarAdmin from "../../../components/sidebarAdmin";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const editLoaiHang = {
  async render(id) {
    const res = await get(id);
    const item = res.data;

    return /* html */ `
        <div>${SidebarAdmin.render()}</div>
        <div class="relative md:ml-80 md:mr-20 ">
             <div class=" py-10 flex items-center justify-between">
                <h1 class="font-bold text-2xl">Chỉnh sửa loại hàng</h1>
    
                      <a href="/admin/loaihang/add"class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <!-- Heroicon name: solid/check -->
                        <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        Them moi
                      </a>
             </div>
        </div>
        <div class="flex flex-col py-6 md:ml-80 md:mr-20">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <form action="" id="form-add">
              <div
                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
              >
                <label class="block mb-5">
                  <span class="text-gray-700">Name</span>
                </label>
                <input
                  class="form-input mt-1 block w-full focus:outline-none"
                  placeholder="Mời nhập tên loại hàng" value="${item.name}"
                />
              </div>

              <div
                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
              >
                <button
                  class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Thêm mới
                </button>
              </div>
            </form>
          </div>
        </div>

        `;
  },

  afterRender(id) {
    const formAdd = document.querySelector("#form-add");
    formAdd.addEventListener("submit", (e) => {
      e.preventDefault();
      edit({
        id,
        name: document.querySelector(".form-input").value,
      })
        .then(() => {
          toastr.success("Bạn đã thêm thành công 1 loại hàng!");
        })
        .then(() => {
          window.location.href = "/admin/loaihang";
        });
    });
  },
};
export default editLoaiHang;
