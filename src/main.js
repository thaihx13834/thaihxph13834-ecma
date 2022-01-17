import Navigo from "navigo";
import Homepage from "./pages/client/homepage";
import Signin from "./pages/client/signin";
import Signup from "./pages/client/signup";
import Dashboard from "./pages/admin/dashboard";
import Cart from "./pages/client/cart";
import Checkout from "./pages/client/checkout";
import Bill from "./pages/client/bill";
import About from "./pages/client/about";
import Contact from "./pages/client/contact";
import Product from "./pages/client/product";
import Productdetail from "./pages/client/detail";
import Loaihang from "./pages/admin/loaihang";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
  document.querySelector(" .container").innerHTML = content;
};

router.on({
  "/": () => {
    print(Homepage.render());
  },
  "/signin": () => {
    print(Signin.render());
  },

  "/signup": () => {
    print(Signup.render());
  },

  "/admin/dashboard": () => {
    print(Dashboard.render());
  },

  "/admin/news": () => {
    print(Newsadmin.render());
  },

  "/admin/news/add": () => {
    print(Addnews.render());
  },

  "/admin/news/:id/edit": ({ data }) => {
    const { id } = data;
    print(Editnews.render(id));
  },

  "/cart": () => {
    print(Cart.render());
  },

  "/checkout": () => {
    print(Checkout.render());
  },

  "/bill": () => {
    print(Bill.render());
  },

  "/about": () => {
    print(About.render());
  },

  "/contact": () => {
    print(Contact.render());
  },

  "/product": () => {
    print(Product.render());
  },

  "/detail": () => {
    print(Productdetail.render());
  },

  "/admin/loaihang": () => {
    print(Loaihang.render());
  },
});
router.resolve();
