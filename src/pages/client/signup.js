import { signup } from "../../api/users";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
const Signup = {
  render() {
    return /*html*/ `
    <div class="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div class="w-full sm:max-w-md p-5 mx-auto">
    <h2 class="mb-12 text-center text-5xl font-extrabold text-blue-600">Xin Chào!</h2>
    <form id="formSignup">
    <div class="mb-4">
        <label class="block mb-1" for="=">Họ và Tên</label>
        <input id="fullname" type="text"  class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" name="username" />
      </div>
      <div class="mb-4">
        <label class="block mb-1" for="email">Địa chỉ email</label>
        <input id="email" type="text"  class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" name="emailuser"/>
      </div>
      <div class="mb-4">
        <label class="block mb-1" for="password">Mật khẩu</label>
        <input id="password" type="password" name="password" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" name="password"/>
      </div>
      <div class="mb-4">
        <label class="block mb-1" for="email">Số điện thoại</label>
        <input id="sdt" type="text"  class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" name="phone_nb"/>
      </div>

      <div class="mb-4">
        <label class="block mb-1" for="email">Địa chỉ</label>
        <input id="address" type="text"  class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" name="address"/>
      </div>

      <div class="mb-4">
        <label class="block mb-1" for="email">Ảnh đại diện</label>
        <input id="img-user" type="file" name="email" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>

      <div class="mt-6">
        <button class="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition">Đăng kí</button>
      </div>
      <div class="mt-6 text-center">
        <a href="/signin" class="underline">Đăng nhập!</a>
      </div>
    </form>
  </div>
</div>
        
        `;
  },
  afterRender() {
    let stt = true;
    const formSignup = $("#formSignup");
    const CLOUDINARY_PRESET = "fl3e89zr";
    const CLOUDINARY_API_URL =
      "https://api.cloudinary.com/v1_1/thaicodejj/image/upload";
    formSignup.validate({
      rules: {
        username: {
          required: true,
        },

        emailuser: {
          required: true,
          email: true,
        },

        password: {
          required: true,
          minlength: 6,
        },

        address: {
          required: true,
        },

        phone_nb: {
          required: true,
        },
      },
      messages: {
        username: {
          required: "Vui lòng nhập username",
        },
        emailuser: {
          required: "Vui lòng nhập email",
          email: "Email sai định dáng",
        },

        password: {
          required: "Vui lòng nhập mật khẩu",
          minlength: "Mật khẩu tối thiểu là 6",
        },

        address: {
          required: "Vui lòng nhập địa chỉ",
        },

        phone_nb: {
          required: "Vui lòng nhập số điện thoại",
        },
      },

      submitHandler: () => {
        async function handleAddCate() {
          const file = document.querySelector("#img-user").files[0];
          if (!document.querySelector("#img-user").files[0]) {
            toastr.warning("Vui lòng đăng 1 tấm ảnh sản phẩm");
            stt = false;
          }

          if (stt == true) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
              headers: {
                "Content-Type": "application/form-data",
              },
            });

            signup({
              email: document.querySelector("#email").value,
              password: document.querySelector("#password").value,
              fullname: document.querySelector("#fullname").value,
              phone_number: document.querySelector("#sdt").value,
              address: document.querySelector("#address").value,
              img: data.url,
            }).then(() => {
              toastr.success("Đăng ký thành công, chuyển trang sau 2s");
              setTimeout(() => {
                document.location.href = "/signin";
              }, 2000);
            });
          }
        }
        handleAddCate();
      },
    });
  },
};
export default Signup;
