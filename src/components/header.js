const Header = {
  render() {
    return `
         <div class="header-top">
          <a href=""><img src="https://picsum.photos/120/50" alt="" /></a>
        </div>
        <div class="header-main">
          <div>
            <ul class="menu">
              <li><a href="/">Trang chủ</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/signin">Chuong trình đào tạo</a></li>
              <li><a href="">Góc sinh viên</a></li>
              <li><a href="">Tuyển dụng</a></li>
            </ul>
          </div>

          <div class="form-search">
            <form action="">
              <input type="text" name="" id="" class="form-control" />
              <input type="submit" value="Tìm kiếm" class="form-submit" />
            </form>
          </div>
        </div>
      `;
  },
};
export default Header;
