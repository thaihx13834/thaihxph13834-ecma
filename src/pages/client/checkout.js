const Checkout = {
  render() {
    return /* html */ `
        <div class="mt-20">
        <h1 class="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">Mời Quý Khách Điền Thông tin để thanh toán
        </h1>
    </div>
    <div class="container p-12 mx-auto">
        <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
            <div class="flex flex-col md:w-full">
                <h2 class="mb-4 font-bold md:text-xl text-heading ">Thông tin khách hàng
                </h2>
                <form class="justify-center w-full mx-auto" method="post" action>
                    <div class="">
                        <div class="space-x-0 lg:flex lg:space-x-4">
                            <div class="w-full lg:w-1/2">
                                <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Họ</label>
                                <input name="firstName" type="text" placeholder="Họ"
                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                            </div>
                            <div class="w-full lg:w-1/2 ">
                                <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Tên</label>
                                <input name="Last Name" type="text" placeholder="Tên"
                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="w-full">
                                <label for="Email"
                                    class="block mb-3 text-sm font-semibold text-gray-500">Địa chỉ email</label>
                                <input name="Last Name" type="text" placeholder="Email"
                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="w-full">
                                <label for="Address"
                                    class="block mb-3 text-sm font-semibold text-gray-500">Đia chỉ cư trú</label>
                                <textarea
                                    class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    name="Address" cols="20" rows="4" placeholder="Địa chỉ bạn đang sinh sống"></textarea>
                            </div>
                        </div>
                        <div class="space-x-0 lg:flex lg:space-x-4">
                            <div class="w-full lg:w-1/2">
                                <label for="city"
                                    class="block mb-3 text-sm font-semibold text-gray-500">Thành phố</label>
                                <input name="city" type="text" placeholder="Thành phố"
                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                            </div>
                            <div class="w-full lg:w-1/2 ">
                                <label for="postcode" class="block mb-3 text-sm font-semibold text-gray-500">
                                    Mã bưu điện</label>
                                <input name="postcode" type="text" placeholder="Mã bưu"
                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                            </div>
                        </div>
                        <div class="flex items-center mt-4">
                            <label class="flex items-center text-sm group text-heading">
                                <input type="checkbox"
                                    class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1">
                                <span class="ml-2">Lưu thông tin cho lần mua hàng tiếp theo</span></label>
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
                    <h2 class="text-xl font-bold">Đơn hàng
                    </h2>
                    <div class="mt-8">
                        <div class="flex flex-col space-y-4">
                            <div class="flex space-x-4">
                                <div>
                                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="image"
                                        class="w-20">
                                </div>
                                <div>
                                    <h2 class="text-xl font-bold">Áo phông nam</h2>
                                    <p class="text-sm">Màu đen</p>
                                    <span class="text-red-600">Gía:</span> 200.000 VNĐ
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex space-x-4">
                                <div>
                                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="image"
                                        class="w-20">
                                </div>
                                <div>
                                    <h2 class="text-xl font-bold">Áo phông nam</h2>
                                    <p class="text-sm">Màu đen</p>
                                    <span class="text-red-600">Giá</span> 200.000 VNĐ
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex p-4 mt-4">
                        <h2 class="text-xl font-bold">Số sản phẩm <span>2</span></h2>
                    </div>
                    <div
                        class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                        Thành tiền <span class="ml-2">400.000 VNĐ</span></div>
                    <div
                        class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                        Phí vận chuyển<span class="ml-2">50.000 VNĐ</span></div>
                    <div
                        class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                        Tổng:<span class="ml-2">450.000 VNĐ</span></div>
                </div>
            </div>
        </div>
    </div>
        `;
  },
};

export default Checkout;
