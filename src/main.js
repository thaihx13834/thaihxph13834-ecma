import Navigo from "navigo";
import Homepage from "./pages/client/homepage";
import News from "./pages/client/news";
import Detail from "./pages/client/detailnews";
import Signin from "./pages/client/signin";
import Signup from "./pages/client/signup";
import AdminPosts from "./pages/admin/post";
import AdminAddPosts from "./pages/admin/post/addNews";
import AdminEditPosts from "./pages/admin/post/editNews";
import ProductPage from "./pages/client/products";
import ProductDetailPage from "./pages/client/products/detail.js";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
  document.querySelector(" .container").innerHTML = await content.render(id);
  if (content.afterRender) await content.afterRender(id);
};

router.on({
  "/": () => {
    print(Homepage);
  },
  "/news": () => {
    print(News);
  },
  "/news/:id": ({ data }) => {
    const { id } = data;
    print(Detail.render(id));
  },
  "/signin": () => {
    print(Signin);
  },

  "/signup": () => {
    print(Signup);
  },

  "/admin/post": () => {
    print(AdminPosts);
  },

  "/admin/post/add": () => {
    print(AdminAddPosts);
  },

  "/admin/post/:id/edit": ({ data }) => {
    const { id } = data;
    print(AdminEditPosts, id);
  },

  "/products": () => print(ProductPage),

  "products/:id": ({ data }) => {
    const { id } = data;
    print(ProductDetailPage, id);
  },
});
router.resolve();
