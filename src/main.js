import Navigo from "navigo";
import Homepage from "./pages/client/homepage";
import News from "./pages/client/news";
import Detail from "./pages/client/detailnews";
import Signin from "./pages/client/signin";
import Signup from "./pages/client/signup";
import Dashboard from "./pages/admin/dashboard";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content) => {
  document.querySelector(" .container").innerHTML = await content.render();
  if (content.after_render) await content.after_render();
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
    print(Signin.render());
  },

  "/signup": () => {
    print(Signup.render());
  },

  "/admin/dashboard": () => {
    print(Dashboard);
  },

  "/admin/news": () => {
    print(Newsadmin);
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
