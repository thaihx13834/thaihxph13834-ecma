import SidebarAdmin from "../../../components/sidebarAdmin";
import { getAll, remove } from "../../../api/products";
import { reRender } from "../../../utils";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const UserAdminPage = {
  async render() {
    const resp = await getAll();

    const { data } = resp;
    console.log(resp);
    return /* html */ `
    <div>${SidebarAdmin.render()}</div>
    <div class="relative md:ml-80 md:mr-20  ">
         <div class=" py-10 flex items-center justify-between">
            <h1 class="font-bold text-2xl">Danh sách sản phẩm</h1>

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
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-gray-50">
                        <tr>
                          <th scope="col" class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Ảnh sản phẩm
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tên sản phẩm
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Mô tả
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Giá sản phẩm
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Khuyến mại(%)
                          </th>

                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Loại hàng
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                      ${data
                        .map(
                          (item) => /*html*/ `<tr>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="">
                                <div class="text-sm font-medium text-gray-900 ">
                                  <img src="${item.img}" width="200" />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="">
                                <div class="text-sm font-medium text-gray-900 center">
                                  ${item.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="">
                                <div class="text-sm font-medium text-gray-900 center">
                                  ${item.desc}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="">
                                <div class="text-sm font-medium text-gray-900 center">
                                  ${item.price}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="">
                                <div class="text-sm font-medium text-gray-900 center">
                                  ${item.price_km}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="">
                                <div class="text-sm font-medium text-gray-900 center">
                                  ${item.cate.name}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="/admin/products/${item.id}/edit" class="inline-block text-indigo-600 hover:text-indigo-900 p-3">Edit</a>
                            <button data-id="${item.id}" class="btn whitespace-nowrap  text-sm font-medium inline-block text-red-600 hover:text-red-900 p-3">Remove</button>
                          </td>

                        </tr>`
                        )
                        .join("")}
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              </div>
        </div>
    `;
  },

  afterRender() {
    const btns = document.querySelectorAll(".btn");
    btns.forEach((item) => {
      item.addEventListener("click", function () {
        const { id } = item.dataset;
        console.log(id);
        const confirm = window.confirm("Bạn chắc chắn muốn xóa chứ!");
        if (confirm) {
          remove(id)
            .then(() => {
              toastr.success("Xóa thành công!!");
            })
            .then(() => {
              reRender(UserAdminPage, ".container");
            });
        }
      });
    });
  },
};
export default UserAdminPage;
