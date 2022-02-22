import Header from "../../components/header";
import Footer from "../../components/footer";

const Contact = {
  render() {
    return /* html */ `
    <div class="header">${Header.render()}</div>
    <div class="max-w-6xl mx-auto ">
            
          <h2 class="uppercase text-center mt-16 text-lg font-bold text-4xl ">Thông tin liên hệ</h2>
          <div class="my-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16774.604670301323!2d106.24613759741523!3d20.542339190546464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ef2dbd54f7d9%3A0x6237c21463bfca4c!2zSOG7k25nIFZp4buHdCwgxJDDtG5nIEjGsG5nLCBUaMOhaSBCw6xuaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1642385599659!5m2!1svi!2s" class="w-full" height="450" style="border-radius:5px;" allowfullscreen="" loading="lazy"></iframe>
          </div>
          <div class="grid grid-cols-3 gap-4 mb-20">
               <div class="py-10 px-2 text-center">
                  <h1 class="font-bold text-2xl mb-3">Địa chỉ</h1>
                  <span>Hồng Việt, Đông Hưng, Thái Bình</span>
               </div>

               <div class="py-10 px-2 text-center">
                  <h1 class="font-bold text-2xl mb-3">Số điện thoại</h1>
                  <span>0399710843</span>
               </div>

               <div class="py-10 px-2 text-center">
                  <h1 class="font-bold text-2xl mb-3">Email</h1>
                  <span>thaihxph13834@fpt.edu.vn</span>
               </div>

          </div>
        
      </div>
    </div>
    <div>${Footer.render()}</div>
      `;
  },
  afterRender() {
    Header.afterRender();
  },
};
export default Contact;
