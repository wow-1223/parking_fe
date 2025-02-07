/// <reference path="./types/index.d.ts" />
/// <reference path="../node_modules/miniprogram-api-typings/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}

interface ICustomTabBar {
  init(isUserMode: boolean): void;
}

declare module 'WechatMiniprogram' {
  interface Page.Instance<TData extends WechatMiniprogram.Page.DataOption, TCustom extends WechatMiniprogram.Page.CustomOption> {
    getTabBar(): ICustomTabBar | undefined;
  }
}