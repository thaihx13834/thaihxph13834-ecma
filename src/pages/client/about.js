import Header from "../../components/header";
import Footer from "../../components/footer";

const About = {
  render() {
    return /* html */ `
            <div>${Header.render()}</div>
            <div class="max-w-6xl mx-auto">
            <h2 class="uppercase text-center mt-16 text-lg font-bold text-4xl text-blue-500">Giới thiệu về cửa hàng thời trang Thái</h2>

            <div class="mb-10">
                <h3 class="uppercase mt-16 text-lg  text-2xl text-blue-500 mb-7">Đôi lời giới thiệu: </h3>
                <p class="mb-5">Shop Thời Trang Thái chúng tôi không đơn thuần là cái đẹp thời trang, chúng tôi khao khát kiến tạo những giá trị xã hội nhân văn, trở thành một lối sống để đồng hành cùng nam giới trên hành trình thấu cảm vẻ đẹp của chính mình.</p>
                <p>Shop Thời Trang Thái là kênh mua sắm online uy tín hàng đầu, cùng với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết đem những sản phẩm tốt nhất, với giá cả phải chăng, uy tín và chất lượng với dịch vụ tốt nhất đến với mọi người.</p>
            </div>

            <div class="mb-10">
                <h3 class="uppercase mt-16 text-lg  text-2xl text-blue-500 mb-7">Mục tiêu của chúng tôi: </h3>
                <p class="mb-7">Shop thời trang Thái – Chất Lượng – Uy Tín – Chuyên nghiệp</p>
                <ul class="list-disc p-7 ">
                    <li class="mb-2">Tiếp tục trở thành shop bán lẻ hàng đầu.</li>
                    <li class="mb-2">Mở rộng phạm vi bán hàng ra toàn quốc.</li>
                    <li class="mb-2">Mang đến cho khách hàng sự yên tâm và hài lòng khi mua sắm tại nhà.</li>
                    <li class="mb-2">Không ngừng tìm kiếm và cập nhật các mẫu quần áo, các hot trend trên thị trường để đáp ứng nhu cầu của khách hàng.</li>
                    <li class="mb-2">Nơi cung cấp thông tin và tư vấn sản phẩm tốt nhất cho khách hàng.</li>
                    <li class="mb-2">Đối tác tiềm năng và uy tín của các nhà cung cấp.</li>
                </ul>
            </div>

            <div class="mb-10">
                <h3 class="uppercase mt-16 text-lg  text-2xl text-blue-500 mb-7">Hình thức bán hàng: </h3>
                <p class="">Quý khách có thể mua hàng qua 2 hình thức</p>
                <ul class="list-disc p-7 ">
                    <li class="mb-2">Đến trực tiếp cửa hàng</li>
                    <li class="mb-2">Hoặc đặt hàng trên Website của chúng tôi</li>
                </ul>
            </div>

            <div class="mb-10">
                <h3 class="uppercase mt-16 text-lg  text-2xl text-blue-500 mb-7">Sản phẩm kinh doanh: </h3>
                
                <p class="mb-5">Chúng tôi chuyên kinh doanh thời trang nam dành cho mọi lứa tuổi, sản phẩm chủ yếu là Áo Thời Trang Nam, Quần Âu Nam,...</p>
                <p>Những sản phẩm tại Thời Trang Thái được chính chủ Shop tìm kiếm tuyển chọn mẫu mã đa dạng phong phú theo xu hướng thời trang “HOT” nhất trên thị trường. </p>
                <p>Các sản phẩm của chúng tôi được lựa chọn vải và đặt may tại Việt Nam với tiêu chí “Không qua trung gian – Giá cả hợp lý – Chất lượng đảm bảo”  </p>
            </div>

            <div class="mb-10">
                <h3 class="uppercase mt-16 text-lg  text-2xl text-blue-500 mb-4">Chúng tôi cam kết: </h3>
                
                <ul class="list-disc p-7 ">
                    <li class="mb-2">Giá cả phù hợp, tư vấn nhiệt tình.</li>
                    <li class="mb-2">Giao hàng nhanh chóng, miễn phí trên toàn quốc.</li>
                    <li class="mb-2">Hậu mãi chu đáo.</li>
                    <li class="mb-2">Nhiều chương trình khuyến mãi hấp dẫn.</li>
                </ul>
            </div>
            </div>
            <div>${Footer.render()}</div>
        `;
  },
};

export default About;
