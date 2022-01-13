import Navigo from "navigo";
import Header from "./components/header";
import Footer from "./components/footer";
import Homepage from "./pages/homepage";
import News from "./pages/news";
import Detail from "./pages/detailnews";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
  document.querySelector("header").innerHTML = Header.render();
  document.querySelector("main").innerHTML = content;
  document.querySelector("#footer").innerHTML = Footer.render();
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
});
router.resolve();
