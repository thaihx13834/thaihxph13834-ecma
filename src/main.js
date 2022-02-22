import Navigo from "navigo";
import Homepage from "./pages/client/homepage";

import Dashboard from "./pages/admin/dashboard";
import LoaiHang from "./pages/admin/loaihang";
import addLoaiHang from "./pages/admin/loaihang/add";
import editLoaiHang from "./pages/admin/loaihang/edit";
import ProductAdminPage from "./pages/admin/products";
import ProductAddPage from "./pages/admin/products/add";
import ProductEditPage from "./pages/admin/products/edit";
import Signin from "./pages/client/signin";
import Signup from "./pages/client/signup";

import UserAdminPage from "./pages/admin/users";
import UserAddPage from "./pages/admin/users/add";
import UserEditPage from "./pages/admin/users/edit";

import Productdetail from "./pages/client/productDetail";
import ProductPage from "./pages/client/product";

import Profile from "./pages/client/profile";
import Checkout from "./pages/client/checkout";

import Cart from "./pages/client/cart";
import Contact from "./pages/client/contact";
import About from "./pages/client/about";
const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
  document.querySelector(" .container").innerHTML = await content.render(id);
  if (content.afterRender) await content.afterRender(id);
};
router.on("/admin/*", () => {}, {
  before: (done) => {
    if (localStorage.getItem("user")) {
      console.log("ahihi");
      const role = JSON.parse(localStorage.getItem("user")).role;
      if (role == "1") {
        done();
      } else {
        document.location.href = "/";
      }
    }
  },
});
router.on({
  "/": () => {
    print(Homepage);
  },
  "/about": () => {
    print(About);
  },

  "/contact": () => {
    print(Contact);
  },

  "/checkout": () => {
    print(Checkout);
  },

  "/signin": () => {
    print(Signin);
  },

  "/signup": () => {
    print(Signup);
  },

  "/cart": () => {
    print(Cart);
  },

  "/profile": () => print(Profile),

  "/products": () => print(ProductPage),
  "/products*": () => print(ProductPage),

  "products/:id": ({ data }) => {
    const { id } = data;
    print(Productdetail, id);
  },
  // admin
  "/admin/dashboard": () => print(Dashboard),
  "/admin/loaihang": () => print(LoaiHang),
  "/admin/loaihang/add": () => print(addLoaiHang),
  "/admin/loaihang/:id/edit": ({ data }) => print(editLoaiHang, data.id),

  "/admin/products": () => print(ProductAdminPage),
  "/admin/products/add": () => print(ProductAddPage),
  "/admin/products/:id/edit": ({ data }) => print(ProductEditPage, data.id),
  "/cates/:id*": ({ data }) => {
    print(ProductPage, data.id);
  },

  "/admin/users": () => print(UserAdminPage),
  "/admin/users/add": () => print(UserAddPage),
  "/admin/users/:id/edit": ({ data }) => print(UserEditPage, data.id),
});
router.resolve();
