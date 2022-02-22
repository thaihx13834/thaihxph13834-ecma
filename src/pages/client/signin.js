import { signin } from "../../api/users";
import { getwemail } from "../../api/users";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import $ from "jquery";
import validate from "jquery-validation";
const Signin = {
  render() {
    return /*html*/ `
    <div class="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div class="w-full sm:max-w-md p-5 mx-auto">
    <h2 class="mb-12 text-center text-5xl font-extrabold text-blue-600">Xin Chào!</h2>
    <form id="formSignin">
      <div class="mb-4">
        <label class="block mb-1" for="email">Địa chỉ email</label>
        <input id="email" type="text" name="email" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" name="emailuser" />
      </div>
      <div class="mb-4">
        <label class="block mb-1" for="password">Mật khẩu</label>
        <input id="password" type="password" name="password" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" name="pass"/>
      </div>
      <div class="mt-6">
        <button class="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition">Đăng nhập</button>
      </div>
      <div class="mt-6 text-center">
        <a href="/signup" class="underline">Đăng kí tài khoản mới</a>
      </div>
    </form>
  </div>
</div>
        `;
  },
  afterRender() {
    const formSignin = $("#formSignin");
    formSignin.validate({
      rules: {
        emailuser: {
          required: true,
          email: true,
        },

        pass: {
          required: true,
          minlength: 6,
        },
      },
      messages: {
        emailuser: {
          required: "Bắt buộc nhập username",
          email: "Không đúng định dạng",
        },

        pass: {
          required: "Vui lòng nhập mật khẩu",
          minlength: "Mật khẩu tối thiểu 6 ký tự",
        },
      },

      submitHandler: () => {
        async function handleAddCate() {
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;
          const rs = await getwemail(email);
          const dt = rs.data;
          try {
            const { data } = await signin({
              email: email,
              fullname: dt.fullname,
              phone_number: dt.phone_number,
              address: dt.address,
              img: dt.img,
              password: password,
              role: dt.role,
            });
            if (data) {
              localStorage.setItem("user", JSON.stringify(data.user));
              toastr.success("Đăng nhập thành công");
              setTimeout(() => {
                document.location.href = "/";
              }, 3000);
            }
          } catch (error) {
            toastr.error(error.response.data);
          }
        }
        handleAddCate();
      },
    });
  },
};
export default Signin;
