import router from "@/router";
import { defineStore } from "pinia";
import { LoginRequest } from "@/service/modules/login";
import type { ILoginInfo } from "@/types";

export const useLoginStore = defineStore("login", () => {
  async function loginAction(loginInfo: ILoginInfo) {
    const res = await LoginRequest(loginInfo);
    console.log(res);
    const { status, data } = res;
    if (status === 200) {
      const { token, user } = data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      const toPath = localStorage.getItem("toPath")
        ? localStorage.getItem("toPath")
        : "/";
      router.replace(toPath as string);
    } else {
      console.error("request fail");
    }
  }

  async function logoutAction() {
    localStorage.clear();
    router.replace("/login");
  }

  return {
    loginAction,
    logoutAction,
  };
});
