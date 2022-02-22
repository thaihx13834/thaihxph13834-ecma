import Header from "../../components/header";
import Footer from "../../components/footer";
import { edit, get } from "../../api/users";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import axios from "axios";
import { reRender } from "../../utils";
const Profile = {
  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    return /*html*/ `
    <div class="header">${Header.render()}</div>
    <div class="bg-white mx-20">


    <div class="container mx-auto my-5 p-5 ">
        <div class="md:flex no-wrap md:-mx-2 ">
            <!-- Left Side -->
            <div class="w-full md:w-3/12 md:mx-2">
                <!-- Profile Card -->
                <div class="bg-white p-3 ">
                    <div class="image overflow-hidden mb-9">
                        <img class="h-auto w-full mx-auto"
                            src="${user.img}"
                            alt="" id="img-preview">
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">${
                      user.fullname
                    }</h1>
                
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <button id="chgpass"><i class="fa-solid fa-angles-right mr-2"></i> Đổi mật khẩu</button>
                        </li>

                        <li class="flex items-center py-3">
                            <button id="chginfo"><i class="fa-solid fa-angles-right mr-2"></i> Sửa thông tin</button>
                        </li>
                        <li class="flex items-center py-3">
                        <a href=""><i class="fa-solid fa-angles-right mr-2"></i> Đơn hàng</a>
                        </li>
                    </ul>
                </div>
                <!-- End of profile card -->
                <div class="my-4"></div>
                <!-- Friends card -->
            
            </div>
            <!-- Right Side -->
            <div class="w-full md:w-9/12 mx-2 h-64">
                <!-- Profile tab -->
                <!-- About Section -->
                <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">Thông tin của bạn</span>
                    </div>
                    <div class="text-gray-700 mt-10">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Fullname:</div>
                                <div class="px-4 py-2">${user.fullname}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Địa chỉ email</div>
                                <div class="px-4 py-2 text-blue-800">${
                                  user.email
                                }</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Địa chỉ</div>
                                <div class="px-4 py-2">${user.address}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Số điện thoại</div>
                                <div class="px-4 py-2">${
                                  user.phone_number
                                }</div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div class="bg-white p-3 shadow-sm rounded-sm mt-10">
                        <div id="formpss"
                        class="py-2 align-middle  min-w-full  hidden"
                        >    
                             
                            <label class="block mb-5 mt-10">
                            <span class="text-gray-700">Nhập mật khẩu </span>
                            </label>
                            <input type="password"class="user-pass shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholde="Mời nhập mật khẩu mới" >

                            <button data-id="${user.id}" 
                            class="btn-chageBtn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
                            >
                            Lưu 
                          </button>
                        </div>

                        <div class="text-gray-700 mt-10 form-editt hidden">
                        <div class="grid grid-cols-2 text-sm">
                            <form id="editf" class="grid grid-cols-2 text-sm ">
                            <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Fullname:</div>
                                <input class="px-4 py-1 w-50 user-name " type="text" value="${
                                  user.fullname
                                }"
                                />
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Địa chỉ email</div>
                                <input class="px-4 py-1 w-50 user-email" type="text" value="${
                                  user.email
                                }"
                                  />
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Địa chỉ</div>
                                <input class="px-4 py-1 w-50 user-address" type="text" value="${
                                  user.address
                                }"
                                  />
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Số điện thoại</div>
                                <input class="px-4 py-1 w-50 user-phone" type="text" value="${
                                  user.phone_number
                                }"
                                  />
                            </div>

                            <div class="grid grid-cols-1 mt-5">
                                <div class="px-4 py-2 font-semibold">Số điện thoại
                                <input class="mt-1 block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-base
                                " type="file" id="img-post" ></div>
                                
                            </div>
                            <div class="grid grid-cols-1 mt-5">

                                
                            </div>
                            <div class="r grid-flex grid-cols-1 mt-5">
                            <button data-id="${user.id}" 
                              class="btn-ed bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded h-12 w-80 ml-4 "
                             >
                            Lưu 
                         </button>
                         </div>
                            <form>

                           
                            
                        </div>

                        
                </div>

                
            
            </div>
        </div>
    </div>
</div>

<div style="margin-top: 120px; z-index: 1000">${Footer.render()}</div>
        `;
  },
  afterRender() {
    Header.afterRender();

    const user = JSON.parse(localStorage.getItem("user"));
    const sb = document.querySelector(".btn-chageBtn");
    const id1 = sb.dataset.id;
    const ps = document.querySelector(".user-pass");

    const chageBtn = document.querySelector("#chgpass");
    const chageInfo = document.querySelector("#chginfo");

    const btn_e = document.querySelector(".btn-ed");
    const id2 = btn_e.dataset.id;

    const form_edit = document.querySelector("#editf");
    const f = document.querySelector("#img-post");
    const imgPreview = document.querySelector("#img-preview");
    console.log(form_edit);
    chageBtn.onclick = () => {
      document.querySelector("#formpss").classList.toggle("act");
    };

    chageInfo.onclick = () => {
      document.querySelector(".form-editt").classList.toggle("act");
    };

    sb.onclick = async () => {
      const { data } = await edit({
        id: id1,
        password: ps.value,
        email: user.email,
        fullname: user.fullname,
        address: user.address,
        phone_number: user.phone_number,
        img: user.img,
      });
      if (data) {
        toastr.success("Thành công");
      }
    };

    const CLOUDINARY_PRESET = "fl3e89zr";
    const CLOUDINARY_API_URL =
      "https://api.cloudinary.com/v1_1/thaicodejj/image/upload";
    let imgLink = "";

    imgPreview.addEventListener("change", (e) => {
      imgPreview.src = URL.createObjectURL(e.target.file[0]);
    });

    form_edit.addEventListener("submit", async (e) => {
      e.preventDefault();
      const rr = await get(id2);
      const dl = rr.data;

      const file = f.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_PRESET);

        const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
          headers: {
            "Content-Type": "application/form-data",
          },
        });
        imgLink = data.url;
      }

      console.log(imgLink);
      const res = await edit({
        id: id2,
        fullname: document.querySelector(".user-name").value,
        password: dl.password,
        email: document.querySelector(".user-email").value,
        address: document.querySelector(".user-address").value,
        phone_number: document.querySelector(".user-phone").value,
        img: imgLink || imgPreview.src,
      });

      localStorage.setItem("user", JSON.stringify(res.data));
      toastr.success("Thành công");
      reRender(Profile, ".container");
    });
  },
};

export default Profile;
