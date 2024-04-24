import headerToken from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";
import { getServerSession } from "next-auth";

export const getAllWorkSpaceService = async () => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/todo/v1/workspaces`,

    {
      method: "GET",
      headers: header,
    },
    { caches: "no-store" }
  );

  // console.log("Res ,", res);
  const data = await res.json();
  // console.log("Res ,", res);
  return data;
};

// const session = await getServerSession();

// export const addWorkSpaceService = async (newWorkSpace) => {
//   const res = await fetch(
//     `${baseUrl}/api/todo/v1/workspaces`,
//     { cache: "no-store", next: { tags: ["workspace"] } },
//     {
//       method: "POST",
//       body: JSON.stringify(newWorkSpace),
//       headers: {
//         accept: "*/*",
//         "Content-Type": "application/json",
//         authorization: `Bearer ${session?.user?.token}`,
//       },
//     }
//   );

//   // console.log("Res ,", res);
//   const data = await res.json();
//   console.log("DATA : ", data);
//   return data;
// };
