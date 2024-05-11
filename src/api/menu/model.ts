/**
 * RouteVO，路由对象
 */
export interface RouteVO {
  /**
   * 子路由列表
   */
  children: RouteVO[];
  /**
   * 组件路径
   */
  component?: string;
  meta?: Meta;
  /**
   * 路由名称
   */
  name?: string;
  /**
   * 路由路径
   */
  path?: string;
  /**
   * 跳转链接
   */
  redirect?: string;
}

/**
 * Meta，路由属性类型
 */
export interface Meta {
  /**
   * 【目录】只有一个子路由是否始终显示
   */
  alwaysShow?: boolean;
  /**
   * 是否隐藏(true-是 false-否)
   */
  hidden?: boolean;
  /**
   * ICON
   */
  icon?: string;
  /**
   * 【菜单】是否开启页面缓存
   */
  keepAlive?: boolean;
  /**
   * 拥有路由权限的角色编码
   */
  roles?: string[];
  /**
   * 路由title
   */
  title?: string;
}
