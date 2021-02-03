import appconst from "./appconst";

// 重定向路径需要与后台数据库存储的相匹配
const tokenCofig = {
  authority: appconst.token_root, // 授权中心地址
  client_id: appconst.client_id, // 项目的id需要后端配置
  redirect_uri: appconst.appBaseUrl + "/callback", // sso授权成功之后的跳转路由，在这个路由，我们需要做重定向处理
  response_type: appconst.response_type, // OIDC / OAuth2提供程序所需的响应类型
  scope: appconst.scope, // 颁发的Token可以访问那些API资源
  post_logout_redirect_uri: appconst.appBaseUrl // 退出登录跳转的Url地址
};
export default tokenCofig;
