import data from "../../data";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Detail = {
  render(id) {
    const found = data.find((element) => element.id === id);
    return `
       </header>${Header.render()}</header>
       <div class="max-w-5xl mx-auto">
            <h1>${found.title}</h1>
            <img src="${found.img}" />
            <p>${found.desc}</p>
        </div>
        <div id="footer">${Footer.render()}</div>
        `;
  },
};

export default Detail;
