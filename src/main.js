import Navigo from "navigo";
import Homepage from "./pages/client/homepage";
import News from "./pages/client/news";
import Detail from "./pages/client/detailnews";
import Signin from "./pages/client/signin";
import Signup from "./pages/client/signup";
import Dashboard from "./pages/admin/dashboard";
import Newsadmin from "./pages/admin/news";
import Addnews from "./pages/admin/news/addNews";
import Editnews from "./pages/admin/news/editNews";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
  document.querySelector(" .container").innerHTML = content;
};

router.on({
  "/": () => {
    print(Homepage.render());
  },
  "/news": () => {
    print(News.render());
  },
  "/news/:id": ({ data }) => {
    const { id } = data;
    print(Detail.render(id));
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
});
router.resolve();
