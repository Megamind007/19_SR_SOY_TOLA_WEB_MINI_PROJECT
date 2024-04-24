import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import Link from "next/link";

export default async function SidebarComponent({ getData }) {
  //console.log("Data :", getData);
  return (
    <div className="pl-6 mt-6 h-screen">
      <div className="flex justify-between">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
      </div>

      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      <div>
        {getData.data.map((i) => {
          return (
            <div key={i.workSpaceId} className="flex items-center mt-5 w-full ">
              <div
                className={`rounded-full w-4 h-4 ${
                  i.workSpaceId % 2 != 0 ? "bg-orange-600" : "bg-blue-600"
                }`}
              ></div>

              <div className="flex justify-between w-full pl-3 ">
                <Link href={`/todo-list/${i.workSpaceId} `}>
                  <p>{i.workspaceName}</p>
                </Link>
                <EditDeleteDropDownComponent />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>

        <Image src={"/assets/icons/favorite.svg"} width={22} height={22} />
      </div>

      <div className="flex items-center mt-5 w-full">
        <div className="rounded-full w-4 h-4 bg-workingOn"></div>
        <div className="flex justify-between w-full pl-3">
          <p>GKS Scholarship</p>
        </div>
      </div>
    </div>
  );
}
