import axios from "axios";
import Header from "../../components/header";
import Footer from "../../components/footer";

const News = {
  async render() {
    const rps = await axios.get(
      "https://5e79b4b817314d00161333da.mockapi.io/posts"
    );

    console.log(rps);
    return `
        </header>${Header.render()}</header>
        <h2 class="font-semibold text-2xl uppercase my-4">Tin tức học tập</h2>            
        <div class="grid grid-cols-3 gap-8">
            ${rps.data
              .map(
                (post) => `
                    <div class="border p-3">
                        <a href="/news/${post.id}">
                            <img src="${post.img}" alt="" />
                        </a>
                        <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-lg text-orange-500 ">${post.title}</a></h3>
                        <p>${post.desc}</p>
                    </div>
            `
              )
              .join("")}
        </div>
        <div id="footer">${Footer.render()}</div>
      `;
  },
};

export default News;
