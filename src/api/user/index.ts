import request from "@/utils/request";
import { UserInfo } from "./model";

class UserAPI {
  /**
   * 登录成功后获取用户信息（昵称、头像、权限集合和角色集合）
   */
  static getInfo() {
    return request<any, UserInfo>({
      url: "/api/v1/users/me",
      method: "get",
    });
  }
}

export default UserAPI;
