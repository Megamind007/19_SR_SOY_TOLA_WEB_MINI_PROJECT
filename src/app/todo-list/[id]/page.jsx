import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import { TaskCardComponent } from "@/components/TaskCardComponent";
import { getTaskByWorkSpaceIdService } from "@/service/task-service";
import TodoListPage from "../page";

const WorkspacePage = async ({ params }) => {
  const data = await getTaskByWorkSpaceIdService(params.id);
  //console.log("My param : ", params.id);
  return (
    <div>
      <TodoListPage data={data} />
    </div>
  );
};

export default WorkspacePage;
