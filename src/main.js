import Navigo from "navigo";
import Homepage from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import data from "../data";

const router = new Navigo("/", { linksSelector: "a" });

const print = () => {
  document.getElementById("header").innerHTML = Header.render();
  document.getElementById("footer").innerText = Footer.render();
};

// const Homepage = {
//   render() {
//     return "<h1>Home Page</h1>";
//   },
// };

// const Aboutpage = {
//   render() {
//     return "<h1>About Page</h1>";
//   },
// };

// const Producpage = {
//   render() {
//     return "<h1>Product Page</h1>";
//   },
// };

router.on({
  "/": () => {
    // console.log("Home Page");
    // biến print thay thế cho việc viết lại nhiều lần document...
    // document.getElementById("app").innerHTML = "Home Page";
    print(Homepage.render());
  },
  "/about": () => {
    console.log("About Page");
  },
  "/product": () => {
    console.log("Product Page");
  },
});

router.resolve();
