import request from "@/service";
import type { ILoginInfo } from "@/types";

export function LoginRequest(loginInfo: ILoginInfo) {
  return request<any>(`/login`, {
    method: "post",
    body: JSON.stringify(loginInfo),
  });
}
