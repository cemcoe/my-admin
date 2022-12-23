import { request } from "@/service/request";
import type { IResponse } from "@/types";

interface IPostRes {
  postList: any[];
  total: number;
  page: number;
  per_page: number;
}

export function getPostList(page = 1, per_page = 10) {
  return request<IResponse<IPostRes>>(
    `/posts?page=${page}&per_page=${per_page}`
  );
}
