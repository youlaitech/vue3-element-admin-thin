import { defineMock } from "./base";

export default defineMock([
  {
    url: "menus/routes",
    method: ["GET"],
    body: {
      code: "00000",
      data: [
        {
          path: "/doc",
          component: "Layout",
          name: "/doc",
          meta: {
            title: "平台文档",
            icon: "document",
            hidden: false,
            roles: ["ADMIN"],
          },
          children: [
            {
              path: "internal-doc",
              component: "demo/internal-doc",
              name: "InternalDoc",
              meta: {
                title: "平台文档(内嵌)",
                icon: "document",
                hidden: false,
                roles: ["ADMIN"],
              },
            },
            {
              path: "https://juejin.cn/post/7228990409909108793",
              name: "Https://juejin.cn/post/7228990409909108793",
              meta: {
                title: "平台文档(外链)",
                icon: "link",
                hidden: false,
                roles: ["ADMIN"],
              },
            },
          ],
        },
        {
          path: "/multi-level",
          component: "Layout",
          redirect: "/multi-level/multi-level1",
          name: "/multiLevel",
          meta: {
            title: "多级菜单",
            icon: "cascader",
            hidden: false,
            roles: ["ADMIN"],
          },
          children: [
            {
              path: "multi-level1",
              component: "demo/multi-level/level1",
              redirect: "/multi-level/multi-level2",
              name: "MultiLevel1",
              meta: {
                title: "菜单一级",
                icon: "",
                hidden: false,
                roles: ["ADMIN"],
                keepAlive: true,
              },
              children: [
                {
                  path: "multi-level2",
                  component: "demo/multi-level/children/level2",
                  redirect: "/multi-level/multi-level2/multi-level3-1",
                  name: "MultiLevel2",
                  meta: {
                    title: "菜单二级",
                    icon: "",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                  },
                  children: [
                    {
                      path: "multi-level3-1",
                      component: "demo/multi-level/children/children/level3-1",
                      name: "MultiLevel31",
                      meta: {
                        title: "菜单三级-1",
                        icon: "",
                        hidden: false,
                        roles: ["ADMIN"],
                        keepAlive: true,
                      },
                    },
                    {
                      path: "multi-level3-2",
                      component: "demo/multi-level/children/children/level3-2",
                      name: "MultiLevel32",
                      meta: {
                        title: "菜单三级-2",
                        icon: "",
                        hidden: false,
                        roles: ["ADMIN"],
                        keepAlive: true,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      msg: "一切ok",
    },
  },
]);
