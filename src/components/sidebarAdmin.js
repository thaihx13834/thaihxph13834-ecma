const Navadmin = {
  render() {
    return /* html */ `
      <nav
      class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
    >
      <div
        class="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
      >
        <button
          class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          onclick="toggleNavbar('example-collapse-sidebar')"
        >
          <i class="fas fa-bars"></i>
        </button>
        <a
          class="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
          href="javascript:void(0)"
        >
          Shop Thái
        </a>

        <div
          class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden"
          id="example-collapse-sidebar"
        >
          <div
            class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300"
          >
            <div class="flex flex-wrap">
              <div class="w-6/12">
                <a
                  class="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                  href="javascript:void(0)"
                >
                  Shop Thái
                </a>
              </div>
              <div class="w-6/12 flex justify-end">
                <button
                  type="button"
                  class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  onclick="toggleNavbar('example-collapse-sidebar')"
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          <form class="mt-6 mb-4 md:hidden">
            <div class="mb-3 pt-0">
              <input
                type="text"
                placeholder="Search"
                class="px-3 py-2 h-12 border border-solid border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
              />
            </div>
          </form>
          <ul class="md:flex-col md:min-w-full flex flex-col list-none">
            <li class="items-center">
              <a
                class="text-pink-500 hover:text-pink-600 text-xs uppercase py-3 font-bold block"
                href="/admin/dashboard"
                ><i class="fas fa-tv opacity-75 mr-2 text-sm"></i>
                Bảng điều khiển</a
              >
            </li>
            <li class="items-center">
              <a
                class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
                href="/admin/loaihang"
                ><i class="fas fa-newspaper text-gray-500 mr-2 text-sm"></i>
                Loại hàng</a
              >
            </li>
            <li class="items-center">
              <a
                class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
                href="/admin/products"
                ><i class="fas fa-user-circle text-gray-500 mr-2 text-sm"></i>
                Sản phẩm</a
              >
            </li>
            <li class="items-center">
              <a
                class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
                href="/admin/users"
                ><i class="fas fa-fingerprint text-gray-500 mr-2 text-sm"></i>
                Khách hàng</a
              >
            </li>
  
  
            <li class="items-center">
              <a
                class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
                href="#pablo"
                ><i
                  class="fas fa-clipboard-list text-gray-400 mr-2 text-sm"
                ></i>
                Đơn hàng</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
          `;
  },
};

export default Navadmin;
