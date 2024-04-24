import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";
import { getAllWorkSpaceService } from "@/service/workspace-service";
import Link from "next/link";
import React from "react";
const BoardPage = async () => {
  var getData = await getAllWorkSpaceService();
  return (
    <div>
      <div className="flex">
        <div className="w-80">
          <SidebarComponent getData={getData} />
        </div>
        <div className="grow">
          <NavbarComponent />
          <div className="mt-5 ml-5">
            <ListBoardComponentHeader />
          </div>
          <div className="mt-5 ml-5 mr-5">
            <div className="grid grid-cols-4 w-full h-10 gap-5">
              <Link href={""}>
                <p className="uppercase ">todo</p>
                <div className="h-1 w-full bg-warning"></div>
              </Link>

              <Link href={""}>
                <p className="uppercase ">working on</p>
                <div className="h-1 w-full bg-blue-700"></div>
              </Link>

              <Link href={""}>
                <p className="uppercase ">checking</p>
                <div className="h-1 w-full bg-orange-700"></div>
              </Link>

              <Link href={""}>
                <p className="uppercase ">completed</p>
                <div className="h-1 w-full bg-green-700"></div>
              </Link>
            </div>
            <div className="grid grid-cols-4 gap-5">
              <div className="grid grid-cols-1 h-screen ">
                <div>
                  <TodoCardComponent />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div>
                  <TodoCardComponent />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div>
                  <TodoCardComponent />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div>
                  <TodoCardComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-5 mr-5">
          <div className="grid grid-cols-4 w-full h-10 gap-5">
           
            <Link href={""}>
              <p className="uppercase ">todo</p>
              <div className="h-1 w-full bg-warning"></div>
            </Link>
         
            <Link href={""}>
              <p className="uppercase ">working on</p>
              <div className="h-1 w-full bg-blue-700"></div>
            </Link>
    
            <Link href={""}>
              <p className="uppercase ">checking</p>
              <div className="h-1 w-full bg-orange-700"></div>
            </Link>
         
            <Link href={""}>
              <p className="uppercase ">completed</p>
              <div className="h-1 w-full bg-green-700"></div>
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-5">
        
            <div className="grid grid-cols-1 h-screen ">
              <div>
                <TodoCardComponent />
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div>
                <TodoCardComponent />
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div>
                <TodoCardComponent />
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div>
                <TodoCardComponent />
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default BoardPage;
