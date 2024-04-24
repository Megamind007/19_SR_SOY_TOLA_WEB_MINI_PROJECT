import { baseUrl } from "@/utils/constants";

//login
export const loginService = async (userInfo) => {
  const res = await fetch(
    `${baseUrl}/api/todo/v1/auth/login
    `,
    {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return data;
};



//register
export const registerSevice = async (registerInfo) => {
  const res = await fetch(
    `${baseUrl}/api/todo/v1/auth/sign-up
    `,
    {
      method: "POST",
      body: JSON.stringify(registerInfo),
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return data;
};
