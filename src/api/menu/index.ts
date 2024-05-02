import request from "@/utils/request";
import type { RouteRecordRaw } from "vue-router";

/**
 * 获取路由列表
 */
export function listRoutes() {
  return request<any, ResponseData<RouteRecordRaw[]>>({
    url: "/api/v1/menus/routes",
    method: "get",
  });
}
