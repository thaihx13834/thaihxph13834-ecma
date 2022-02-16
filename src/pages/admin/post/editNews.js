import { edit, get } from "../../../api/posts";
import Banner from "../../../components/banner";
import axios from "axios";

const AdminEditPosts = {
  async render(id) {
    const { data } = await get(id);

    return `
            <div class="max-w-5xl mx-auto">
                <div class="banner">
                ${Banner.render()}
                </div>
                <div class="news">
                    <form id="formEditPost">
                        <input type="text" class="border border-black" id="title-post" value="${
                          data.title
                        }" placeholder="Title Post"/><br />
                        <img id="ig" src="${data.img}" />
                        <input type="file" class="border border-black" id="img-post" /> <br />
                        <textarea name="" class="border border-black" id="desc-post" cols="30" rows="10">${
                          data.desc
                        }</textarea> <br />
                        <button class="bg-blue-500 inline-block px-3 py-4">Add post</button>
                    </form>
                </div>
            </div>
        `;
  },
  afterRender(id) {
    const formEditPost = document.querySelector("#formEditPost");
    const CLOUDINARY_PRESET = "fl3e89zr";
    const CLOUDINARY_API_URL =
      "https://api.cloudinary.com/v1_1/thaicodejj/image/upload";

    formEditPost.addEventListener("submit", async (e) => {
      e.preventDefault();

      const file = document.querySelector("#img-post").files[0];
      if (file == undefined) {
        const image = document.querySelector("#ig").src;
        console.log(image);
        edit({
          id: id,
          title: document.querySelector("#title-post").value,
          img: image,
          desc: document.querySelector("#desc-post").value,
        });
      } else {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_PRESET);

        const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
          headers: {
            "Content-Type": "application/form-data",
          },
        });

        edit({
          id: id,
          title: document.querySelector("#title-post").value,
          img: data.url,
          desc: document.querySelector("#desc-post").value,
        });
      }
    });
  },
};

export default AdminEditPosts;
