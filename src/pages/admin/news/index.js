import Navadmin from "../../../components/navAdmin";
import data from "../../../data";

const Newsadmin = {
  render() {
    return /* html */ `
        <div class="min-h-full">
        ${Navadmin.render()}
        <header class="bg-white shadow ">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h1 class="text-3xl font-bold text-gray-900">
              Quản lí tin tức
            </h1>
                <a class="sm:ml-3" href="/admin/news/add">
                  <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <!-- Heroicon name: solid/check -->
                    <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    Them moi
                  </button>
                </a>
          </div>
        </header>
        <main>
          <div class="max-w-7xl  py-6 ">
            <!-- Replace with your content -->
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                          <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Name
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              DESC
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                              <span class="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          

                          ${data
                            .map(
                              (post) => /* html */ `
                            <tr>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="">
                                  <img class="h-20 w-20 " src="${post.img}" alt="">
                                </div>
                                <div class="ml-4">
                                  <div class="text-sm font-medium text-gray-900">
                                    ${post.title}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">${post.desc}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="/admin/news/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                            </td>
                          </tr>
                          `
                            )
                            .join("")}


                          <!-- More people... -->
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            <!-- /End replace -->
          </div>
        </main>
      </div>
        `;
  },
};

export default Newsadmin;
