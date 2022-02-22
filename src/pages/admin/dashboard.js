import SidebarAdmin from "../../components/sidebarAdmin";

const Dashboard = {
  render() {
    return /* html */ `
        <div class="mr-20">${SidebarAdmin.render()}</div>
        <div class="relative md:ml-80 ">
             <div class=" py-6">
                <h1 class="font-bold text-2xl">Dashboard</h1>
             </div>
        </div>
        `;
  },
};

export default Dashboard;
