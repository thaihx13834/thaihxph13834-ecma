import Swiper from "swiper/bundle";
import "swiper/css/bundle";
const Banner = {
  render() {
    return `
    <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide"><img src="https://picsum.photos/1600/500" alt="" /></div>
      <div class="swiper-slide"><img src="https://picsum.photos/1600/500" alt="" /></div>
      <div class="swiper-slide"><img src="https://picsum.photos/1600/500" alt="" /></div>
      ...
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
  
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev "></div>
    <div class="swiper-button-next"></div>
  </div>`;
  },
  afterRender() {
    var swiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};

export default Banner;
