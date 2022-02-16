import { signup } from "../../api/user";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const Signup = {
  render() {
    return `
            <form id="formSignup">
                <input type="email" id="email" placeholder="your email" class="border border-black"/>
                <input type="password" id="password" placeholder="your password" class="border border-black"/>
                <button class="btn bg-red-500 text-white inline-block py-3 px-5 rounded">Đăng ký</button>
            </form>
        
        `;
  },
  afterRender() {
    const formSignup = document.querySelector("#formSignup");
    formSignup.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const { data } = await signup({
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
        });
        if (data) {
          toastr.success("Thành công chuyển trang sau 2s");
          setTimeout(() => {
            document.location.href = "/signin";
          }, 3000);
        }
      } catch (error) {
        toastr.error(error.response.data);
      }
    });
  },
};
export default Signup;
