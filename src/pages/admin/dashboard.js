import Sidebar from "../../components/sidebar";
import Headeradmin from "../../components/headerAdmin";

const Dashboard = {
  render() {
    return /* html */ `
        <div>${Sidebar.render()}</div>
        <div class="relative md:ml-64">
             <div>${Headeradmin.render()}</div>
             <div class="px-6 py-2">
                <h1 class="font-bold text-2xl">Dashboard</h1>
             </div>
        </div>
        `;
  },
};

export default Dashboard;
