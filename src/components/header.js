const Header = {
  render() {
    return /* html */ `
    <div class="bg-white ">
    <!--
      Mobile menu
  
      Off-canvas menu for mobile, show/hide based on off-canvas menu state.
    -->
  
    <header class="relative bg-white">
      <nav aria-label="Top" class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="border-b ">
          <div class="h-16 flex items-center">
            <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
            <button type="button" class="bg-white p-2 rounded-md text-gray-400 lg:hidden">
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
  
            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <a href="#">
                <span class="sr-only">Workflow</span>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="">
              </a>
            </div>
  
            <!-- Flyout menus -->
            <div class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="h-full flex space-x-8">
                <div class="flex">
                  <div class="relative flex">
                    <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
                    <a href="" type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                      Trang chủ
                    </a>
                  </div>
  

                  <div class="absolute top-full inset-x-0 text-sm text-gray-500">
                    <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                    <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                  </div>
                </div>
  
                <div class="flex">
                  <div class="relative flex">
                    <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
                    <a href="/product" type="button" class="border-transparent  relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 " id="menu-button" aria-expanded="true" aria-haspopup="true" aria-expanded="false">
                      Sản phẩm
                    </a>
                  </div>
                  
                </div>


                <div class="flex">
                  <div class="relative flex">
                    <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
                    <a href="/about" type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                      Giới thiệu
                    </a>
                  </div>
  
                  <!--
                    'Men' flyout menu, show/hide based on flyout menu state.
  
                    Entering: "transition ease-out duration-200"
                      From: "opacity-0"
                      To: "opacity-100"
                    Leaving: "transition ease-in duration-150"
                      From: "opacity-100"
                      To: "opacity-0"
                  -->
                  <div class="absolute top-full inset-x-0 text-sm text-gray-500">
                    <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                    <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
  
                  </div>
                </div>

                <div class="flex">
                  <div class="relative flex">
                    <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
                    <a href="/contact" type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                      Liên hệ
                    </a>
                  </div>
  
                  <!--
                    'Men' flyout menu, show/hide based on flyout menu state.
  
                    Entering: "transition ease-out duration-200"
                      From: "opacity-0"
                      To: "opacity-100"
                    Leaving: "transition ease-in duration-150"
                      From: "opacity-100"
                      To: "opacity-0"
                  -->
                  <div class="absolute top-full inset-x-0 text-sm text-gray-500">
                    <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                    <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
  
                  </div>
                </div>
                
              </div>
            </div>
  
            <div class="ml-auto flex items-center">
              <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a href="/signin" class="text-sm font-medium text-gray-700 hover:text-gray-800">Đăng nhập</a>
                <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                <a href="/signup" class="text-sm font-medium text-gray-700 hover:text-gray-800">Tạo tài khoản</a>
              </div>
  
              <!-- Search -->
              <div class="flex lg:ml-6">
                <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Search</span>
                  <!-- Heroicon name: outline/search -->
                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </a>
              </div>
  
              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-6">
                <a href="/cart" class="group -m-2 p-2 flex items-center">
                  <!-- Heroicon name: outline/shopping-bag -->
                  <svg class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
      `;
  },
};
export default Header;
