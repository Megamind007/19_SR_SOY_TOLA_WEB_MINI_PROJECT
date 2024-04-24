import headerToken from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

export const getTaskByWorkSpaceIdService = async (id) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/todo/v1/tasks?workspaceId=${id}`,
    {
      method: "GET",
      headers: header,
    },
    { caches: "no-store" }
  );
  const data = await res.json();
  return data;
};
