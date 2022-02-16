import { signin } from "../../api/user";
import toastr from "toastr";
import "toastr/build/toastr.min.css" ;
const Signin = {
  render() {
    return `
            <form id="formSignin">
                <input type="email" id="email" placeholder="your email" class="border border-black"/>
                <input type="password" id="password" placeholder="your password" class="border border-black"/>
                <button class="btn bg-red-500 text-white inline-block py-3 px-5 rounded">Đăng ký</button>
            </form>
        
        `;
  },
  afterRender() {
    const formSignin = document.querySelector("#formSignin");
    formSignin.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const { data } = await signin({
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
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
    });
  },
};
export default Signin;
