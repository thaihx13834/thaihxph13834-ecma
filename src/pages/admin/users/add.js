import { add } from "../../../api/users";
import SidebarAdmin from "../../../components/sidebarAdmin";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
const UserAddPage = {
  async render() {
    return /* html */ `
        <div>${SidebarAdmin.render()}</div>
        <div class="relative md:ml-80 md:mr-20 ">
             <div class=" py-10 flex items-center justify-between">
                <h1 class="font-bold text-2xl">Thêm  mới khách hàng</h1>
    
                      <a href="/admin/users/add"class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                  <span class="text-gray-700">Họ và Tên</span>
                </label>
                <input class="user-name shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" >
              </div>

              <div
                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-4"
              >
                <label class="block mb-5">
                  <span class="text-gray-700">Email</span>
                </label>
                <input class="user-mail shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="emailuser">
              </div>

              <div
                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-4"
              >
                <label class="block mb-5">
                  <span class="text-gray-700">Pass</span>
                </label>
                <input class="user-pass shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password">
              </div>

              <div
                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-4"
              >
                <label class="block mb-5">
                  <span class="text-gray-700">Địa chỉ</span>
                </label>
                <input class="user-address shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="address" >
              </div>

              <div
                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-4"
              >
                <label class="block mb-5">
                  <span class="text-gray-700">Số điện thoại</span>
                </label>
                <input class="user-phonenb shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="phone_nb">
              </div>

              <div
                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-4"
              >
                <label class="block mb-5">
                  <span class="text-gray-700">Vai trò</span>
                </label>
                <div class="inline-block mr-10">
                <label class="inline-flex items-center">
                  <input type="radio" class="form-radio" name="radio" value="0" checked>
                  <span class="ml-2">Thành viên</span>
                </label>
              </div>
              <div class="inline-block">
                <label class="inline-flex items-center">
                  <input type="radio" class="form-radio" name="radio" value="1" >
                  <span class="ml-2">Quản trị</span>
                </label>
              </div>

              </div>

              

              <div
                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-4"
              >
                <label class="block mb-3">
                  <span class="text-gray-700">Upload ảnh</span>
                </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-base
                " type="file" id="img-user">
              </div>
              
              <div
                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-7"
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

  afterRender() {
    var stt = true;
    const formAdd = $("#form-add");
    const CLOUDINARY_PRESET = "fl3e89zr";
    const CLOUDINARY_API_URL =
      "https://api.cloudinary.com/v1_1/thaicodejj/image/upload";
    formAdd.validate({
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
          const rd = $(":checked");
          console.log(rd);
          const radioValue = rd.val();
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

            add({
              email: document.querySelector(".user-mail").value,
              password: document.querySelector(".user-pass").value,
              fullname: document.querySelector(".user-name").value,
              phone_number: document.querySelector(".user-phonenb").value,
              address: document.querySelector(".user-address").value,
              role: radioValue,
              img: data.url,
            }).then(() => {
              toastr.success("Bạn đã thêm thành công 1 loại hàng!");
            });
            // .then(() => {
            //   window.location.href = "/admin/users";
            // });
          }
        }
        handleAddCate();
      },
    });
  },
};
export default UserAddPage;
