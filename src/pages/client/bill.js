const Bill = {
  render() {
    return /* html */ `
        <section class="bg-gray-100 py-20">
        <div class="max-w-2xl mx-auto py-0 md:py-16">
          <article class="shadow-none md:shadow-md md:rounded-md overflow-hidden">
            <div class="md:rounded-b-md  bg-white">
              <div class="p-9 border-b border-gray-200">
                <div class="space-y-6">
                  <div class="flex justify-between items-top">
                    <div class="space-y-4">
                      <div>
                        <img class="h-6 object-cover mb-4" src="https://cdn.mjwebs.com/sites/mjwebs/mjwebs-logo.png">
                        <p class="font-bold text-lg"> Hóa đơn </p>
                        <p> Thaistore </p>
                      </div>
                      <div>
                        <p class="font-medium text-sm text-gray-400"> Người mua </p>
                        <p> Tony Thái </p>
                        <p> shopupde@gmail.com </p>
                        <p> 0399710843 </p>
                      </div>
                    </div>
                    <div class="space-y-2">
                      <div>
                        <p class="font-medium text-sm text-gray-400"> Hóa đơn số </p>
                        <p> INV-MJ0001 </p>
                      </div>
                      <div>
                        <p class="font-medium text-sm text-gray-400"> Invoice Date </p>
                        <p> 17/1/2022 </p>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-9 border-b border-gray-200">
                <p class="font-medium text-sm text-gray-400"> Ghi chú: </p>
                <p class="text-sm"> Cảm ơn quý khách đã đặt hàng </p>
              </div>
              <table class="w-full divide-y divide-gray-200 text-sm">
                <thead>
                  <tr>
                    <th scope="col" class="px-9 py-4 text-left font-semibold text-gray-400"> Sản phẩm </th>
                    <th scope="col" class="py-3 text-left font-semibold text-gray-400">  </th>
                    <th scope="col" class="py-3 text-left font-semibold text-gray-400"> Giá </th>
                    <th scope="col" class="py-3 text-left font-semibold text-gray-400"> Giảm giá </th>
                    <th scope="col" class="py-3 text-left font-semibold text-gray-400"></th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="px-9 py-5 whitespace-nowrap space-x-1 flex items-center">
                      <div>
                        <p> Áo phông nam </p>
                        <p class="text-sm text-gray-400"> Màu đen </p>
                      </div>
                    </td>
                    <td class="whitespace-nowrap text-gray-600 truncate"></td>
                    <td class="whitespace-nowrap text-gray-600 truncate"> 200.000 VNĐ </td>
                    <td class="whitespace-nowrap text-gray-600 truncate"> 0% </td>
                  </tr>
                  <tr>
                    <td class="px-9 py-5 whitespace-nowrap space-x-1 flex items-center">
                      <div>
                        <p> Áo phông nam </p>
                        <p class="text-sm text-gray-400"> Màu trắng </p>
                      </div>
                    </td>
                    <td class="whitespace-nowrap text-gray-600 truncate"></td>
                    <td class="whitespace-nowrap text-gray-600 truncate"> 200.000 VNĐ </td>
                    <td class="whitespace-nowrap text-gray-600 truncate"> 0% </td>
                  </tr>
                </tbody>
              </table>
              <div class="p-9 border-b border-gray-200">
                <div class="space-y-3">
                  <div class="flex justify-between">
                    <div>
                      <p class="text-gray-500 text-sm"> Thành tiền </p>
                    </div>
                    <p class="text-gray-500 text-sm"> 400.000 VNĐ </p>
                  </div>
                  <div class="flex justify-between">
                    <div>
                      <p class="text-gray-500 text-sm"> Phí vận chuyển: </p>
                    </div>
                    <p class="text-gray-500 text-sm"> 50.000 VNĐ </p>
                  </div>
                  <div class="flex justify-between">
                    <div>
                      <p class="text-gray-500 text-sm"> Tổng </p>
                    </div>
                    <p class="text-gray-500 text-sm"> 450.000 VNĐ </p>
                  </div>
                </div>
              </div>
              <div class="p-9 border-b border-gray-200">
                <div class="space-y-3">
                  <div class="flex justify-between">
                    <div>
                      <p class="font-bold text-black text-lg"> Tổng </p>
                    </div>
                    <p class="font-bold text-black text-lg"> 450.000 VNĐ </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
        `;
  },
};

export default Bill;
