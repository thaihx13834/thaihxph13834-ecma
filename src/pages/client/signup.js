const Signup = {
  render() {
    return /* html */ `
    <div class="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
    <div class="w-full sm:max-w-md p-5 mx-auto">
      <h2 class="mb-12 text-center text-5xl font-extrabold text-blue-600">Đăng Kí !!</h2>
      <form>

        <div class="mb-4">
          <label class="block mb-1" for="email">Họ và tên</label>
          <input id="email" type="text" name="email" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
        </div>
        
        <div class="mb-4">
          <label class="block mb-1" for="email">Địa chỉ email</label>
          <input id="email" type="text" name="email" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
        </div>

        <div class="mb-4">
          <label class="block mb-1" for="email">Số điện thoại</label>
          <input id="email" type="text" name="email" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
        </div>

        <div class="mb-4">
          <label class="block mb-1" for="password">Mật khẩu</label>
          <input id="password" type="password" name="password" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
        </div>

        <div class="mb-4">
          <label class="block mb-1" for="password">Nhập lại mật khẩu</label>
          <input id="password" type="password" name="password" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
        </div>
        <div class="mt-6">
          <button class="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition">Đăng kí</button>
        </div>
        <div class="mt-6 text-center">
          Bạn đã có tài khoản?<a href="/signin" class="underline"> Đăng nhập</a>
        </div>
      </form>
    </div>
  </div>
        `;
  },
};

export default Signup;
