import Header from "../../components/header";
import Footer from "../../components/footer";
const Checkout = {
  render() {
    let r = (Math.random() + 1).toString(36).substring(7);
    const cart = JSON.parse(localStorage.getItem("cart"));
    const user = JSON.parse(localStorage.getItem("user"));
    const sosp = cart.length;
    let tong = 0;
    return /* html */ `

    <div class="header">${Header.render()}</div>
          <div class="mt-20">
          <h1 class="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">Mời Quý Khách Điền Thông tin để thanh toán
          </h1>
      </div>
      <div class=" w-screen my-5 py-5 px-40">
          <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
              <div class="flex flex-col md:w-full">
                  <h2 class="mb-4 font-bold md:text-xl text-heading ">Thông tin khách hàng
                  </h2>
                  <form class="justify-center w-full mx-auto" method="post" action>
                      <div class="">
                          <div class="space-x-0 lg:flex lg:space-x-4">
                             <div class="w-full">
                                  <label for="Email"
                                      class="block mb-3 text-sm font-semibold text-gray-500">Họ tên</label>
                                  <input name="Last Name" type="text" placeholder="Họ tên..."
                                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 " value="${
                                        user.fullname
                                      }">
                              </div>
                          </div>
                          <div class="mt-4">
                              <div class="w-full">
                                  <label for="Email"
                                      class="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                  <input name="Last Name" type="text" placeholder="Email..."
                                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" value="${
                                        user.email
                                      }">
                              </div>
                          </div>
                          <div class="mt-4">
                          <div class="w-full">
                          <label for="Email"
                              class="block mb-3 text-sm font-semibold text-gray-500">Địa chỉ</label>
                          <input name="Last Name" type="text" placeholder="Địa chỉ..."
                              class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" value="${
                                user.address
                              }">
                      </div>
                          </div>

                          <div class="mt-4">
                          <div class="w-full">
                          <label for="Email"
                              class="block mb-3 text-sm font-semibold text-gray-500">Số điện thoại</label>
                          <input name="Last Name" type="text" placeholder="Số điẹn thoại..."
                              class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" value="${
                                user.phone_number
                              }">
                      </div>
                          </div>
                          
                          <div class="relative pt-3 xl:pt-6"><label for="note"
                                  class="block mb-3 text-sm font-semibold text-gray-500">Ghi chú</label><textarea name="note"
                                  class="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                  rows="4" placeholder="Viết ghi chú tại đây"></textarea>
                          </div>
                          <div class="mt-4">
                              <a href="/bill"
                                  class="block text-center w-full px-6 py-2 text-white bg-blue-600 hover:bg-blue-900">Thanh toán</a>
                          </div>
                      </div>
                  </form>
              </div>
              <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                  <div class="pt-12 md:pt-0 2xl:ps-4">
                      <h2 class="text-xl font-bold p-4">Đơn hàng
                      </h2>
                      ${cart.map((item) => {
                        const gia =
                          Number(item.price_km) > 0
                            ? (Number(item.price) * Number(item.price_km)) / 100
                            : Number(item.price);

                        const thanhtien = gia * item.quantity;

                        tong += thanhtien;
                        return /*html*/ `
                            <div class="flex flex-col space-y-4">
                            <div class="flex space-x-4">
                                <div>
                                    <img src="${item.img}" width="200">
                                </div>
                                <div>
                                    <h2 class="text-xl font-bold mb-4">${item.name}</h2>
                                    <span class="text-red-600">Gía:</span> ${gia} VNĐ
                                </div>
                            </div>
                           </div>
                  `;
                      })}
                      <div class="flex p-4 mt-4">
                          <h2 class="text-xl font-bold">Số sản phẩm <span>${sosp}</span></h2>
                      </div>
                      <div
                          class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                          Thành tiền <span class="ml-2">${tong}</span></div>
                      <div
                          class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                          Phí vận chuyển<span class="ml-2">50.000 VNĐ</span></div>
                      <div
                          class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                          Tổng:<span class="ml-2">${tong + 50000}</span></div>
                  </div>
              </div>
          </div>
      </div>
      <div>${Footer.render()}</div>
          `;
  },
  afterRender() {
    Header.afterRender();
  },
};

export default Checkout;
