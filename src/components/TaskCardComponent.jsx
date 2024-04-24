import { getTaskByWorkSpaceIdService } from "@/service/task-service";
import React from "react";
export const TaskCardComponent = async ({ para }) => {
  console.log("My param : ", para.id);
  const getData = await getTaskByWorkSpaceIdService(para.id);
  console.log("DATA", getData);
  return (
    <div>
      {getData.data.map((i) => {
        <div
          key={i.taskId}
          className="flex-grow h-32 rounded-lg bg-green-800  mt-5  items-center overflow-hidden mr-5"
        >
          <div className="flex">
            <div className="bg-white ml-5 w-24 p-5 mr-5 mt-4 rounded-lg text-center">
              <p className="font-semibold text-xl text-red-600">Wed</p>
              <p className="font-bold text-xl">17</p>
            </div>
            <div className="flex grow justify-between items-center  mt-2 ">
              <div>
                <p className="font-semibold">{i.taskTitle}</p>
                <p>String</p>
              </div>
              <button className="mt-16 mr-5  bg-white px-3 h-10 w-36 rounded-md">
                Working on
              </button>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};
