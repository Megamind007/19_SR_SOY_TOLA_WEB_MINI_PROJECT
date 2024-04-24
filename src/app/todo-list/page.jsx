import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import { getTaskByWorkSpaceIdService } from "@/service/task-service";
import { getAllWorkSpaceService } from "@/service/workspace-service";
import WorkspacePage from "./[id]/page";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";

const TodoListPage = async ({ data }) => {
  const getData = await getAllWorkSpaceService();
  console.log("My Data : ", data);
  return (
    <main>
      <div className="flex">
        <div className="w-80 ">
          <SidebarComponent getData={getData} />
        </div>
        <div className="grow">
          <NavbarComponent />
          <div className="mt-5 ml-5 ">
            <ListBoardComponentHeader />
            <div className="flex">
              <div className="grow ">
                <div className="flex-grow h-32 rounded-lg bg-warning mt-5  items-center overflow-hidden mr-5">
                  <div className="flex">
                    <div className="bg-white ml-5 w-24 p-5 mr-5 mt-4 rounded-lg text-center">
                      <p className="font-semibold text-xl text-red-600">Wed</p>
                      <p className="font-bold text-xl">17</p>
                    </div>
                    <div className="flex grow justify-between items-center  mt-2 ">
                      <div>
                        <p className="font-semibold"></p>
                        <p>String</p>
                      </div>
                      <button className="mt-16 mr-5  bg-white px-3 h-10 w-36 rounded-md">
                        Working on
                      </button>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className=" w-96">
                <MonthlyStatisticsComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TodoListPage;
