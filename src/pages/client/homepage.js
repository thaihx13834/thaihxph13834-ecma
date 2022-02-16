import Banner from "../../components/banner";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Homepage = {
  render() {
    return /*html*/ `
        </header>${Header.render()}</header>
        <div class="banner">${Banner.render()}</div>
        <div>
        <h3 class="title">Tin tức học tập</h3>
        <div class="row">
          <div class="col-item">
            <a href=""><img src="https://picsum.photos/380/250" alt="" /></a>
            <h3 class="name">
              <a href=""
                >!!Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Odio praesentium culpa officiis cum. Praesentium, facilis!</a
              >
            </h3>
            <p class="sub-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              explicabo veniam, nobis, obcaecati, dignissimos velit facere
              tenetur id provident beatae accusamus! Ullam eaque inventore
              iusto soluta optio itaque, adipisci tempora!
            </p>
          </div>

          <div class="col-item">
            <a href=""><img src="https://picsum.photos/380/250" alt="" /></a>
            <h3 class="name">
              <a href=""
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Odio praesentium culpa officiis cum. Praesentium, facilis!</a
              >
            </h3>
            <p class="sub-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              explicabo veniam, nobis, obcaecati, dignissimos velit facere
              tenetur id provident beatae accusamus! Ullam eaque inventore
              iusto soluta optio itaque, adipisci tempora!
            </p>
          </div>

          <div class="col-item">
            <a href=""><img src="https://picsum.photos/380/250" alt="" /></a>
            <h3 class="name">
              <a href=""
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Odio praesentium culpa officiis cum. Praesentium, facilis!</a
              >
            </h3>
            <p class="sub-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              explicabo veniam, nobis, obcaecati, dignissimos velit facere
              tenetur id provident beatae accusamus! Ullam eaque inventore
              iusto soluta optio itaque, adipisci tempora!
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 class="title">Hoạt động sinh viên</h3>
        <div class="row">
          <div class="col-item">
            <a href=""><img src="https://picsum.photos/380/250" alt="" /></a>
            <h3 class="name">
              <a href=""
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Odio praesentium culpa officiis cum. Praesentium, facilis!</a
              >
            </h3>
            <p class="sub-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              explicabo veniam, nobis, obcaecati, dignissimos velit facere
              tenetur id provident beatae accusamus! Ullam eaque inventore
              iusto soluta optio itaque, adipisci tempora!
            </p>
          </div>

          <div class="col-item">
            <a href=""><img src="https://picsum.photos/380/250" alt="" /></a>
            <h3 class="name">
              <a href=""
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Odio praesentium culpa officiis cum. Praesentium, facilis!</a
              >
            </h3>
            <p class="sub-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              explicabo veniam, nobis, obcaecati, dignissimos velit facere
              tenetur id provident beatae accusamus! Ullam eaque inventore
              iusto soluta optio itaque, adipisci tempora!
            </p>
          </div>

          <div class="col-item">
            <a href=""><img src="https://picsum.photos/380/250" alt="" /></a>
            <h3 class="name">
              <a href=""
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Odio praesentium culpa officiis cum. Praesentium, facilis!</a
              >
            </h3>
            <p class="sub-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              explicabo veniam, nobis, obcaecati, dignissimos velit facere
              tenetur id provident beatae accusamus! Ullam eaque inventore
              iusto soluta optio itaque, adipisci tempora!
            </p>
          </div>
        </div>
      </div>
      <div id="footer">${Footer.render()}</div>
        `;
  },

  afterRender() {
    Header.afterRender();
  },
};
export default Homepage;
